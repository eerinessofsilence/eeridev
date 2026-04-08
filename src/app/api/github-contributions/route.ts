import { NextRequest, NextResponse } from 'next/server';
import { parseGitHubContributionsMarkup } from '@/lib/github-contributions';
import { siteProfile } from '@/lib/site';

const githubUsernamePattern =
  /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
const isDevelopment = process.env.NODE_ENV === 'development';

function resolveUsername(rawValue: string | null) {
  if (!rawValue) {
    return siteProfile.githubUsername;
  }

  const value = rawValue.trim();

  if (!githubUsernamePattern.test(value)) {
    return siteProfile.githubUsername;
  }

  return value;
}

export async function GET(request: NextRequest) {
  const username = resolveUsername(
    request.nextUrl.searchParams.get('username'),
  );
  const githubUrl = `https://github.com/users/${username}/contributions`;

  try {
    const response = await fetch(githubUrl, {
      headers: {
        Accept: 'text/html;q=0.9,*/*;q=0.8',
        'User-Agent': 'eeri.dev',
      },
      ...(isDevelopment
        ? { cache: 'no-store' as const }
        : { next: { revalidate: 3600 } }),
    });

    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status}`);
    }

    const markup = await response.text();
    const data = parseGitHubContributionsMarkup(markup);

    if (!data) {
      throw new Error('Unable to parse GitHub contribution graph');
    }

    return NextResponse.json(
      {
        ...data,
        profileUrl: `https://github.com/${username}`,
        username,
      },
      {
        headers: {
          'Cache-Control': isDevelopment
            ? 'no-store, no-cache, must-revalidate'
            : 's-maxage=3600, stale-while-revalidate=86400',
        },
      },
    );
  } catch {
    return NextResponse.json(
      {
        message: 'Unable to load live GitHub contributions right now.',
        profileUrl: `https://github.com/${username}`,
        username,
      },
      { status: 502 },
    );
  }
}
