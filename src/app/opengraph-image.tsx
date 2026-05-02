import { ImageResponse } from 'next/og';

export const alt =
  'Aleksandr Hubanov, full-stack engineer portfolio preview';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

const stack = ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'] as const;
const facts = [
  'Full-stack engineer',
  'Bucharest, Romania',
  'Open to new projects',
] as const;
const projects = [
  ['AI Definition', 78, '#2dd4bf'],
  ['4Seasons', 118, '#60a5fa'],
  ['Tactica', 96, '#2dd4bf'],
  ['IVE Studio', 132, '#60a5fa'],
] as const;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          background: '#050505',
          color: '#f4f4f5',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 18% 12%, rgba(45, 212, 191, 0.18), transparent 28%), radial-gradient(circle at 82% 18%, rgba(96, 165, 250, 0.17), transparent 30%), linear-gradient(135deg, #050505 0%, #111111 54%, #050505 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.22,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: 72,
            top: 54,
            width: 1056,
            height: 522,
            border: '1px solid rgba(255,255,255,0.16)',
            borderRadius: 34,
            background:
              'linear-gradient(180deg, rgba(24,24,27,0.92), rgba(10,10,10,0.96))',
            boxShadow: '0 28px 90px rgba(0, 0, 0, 0.5)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: 112,
            top: 92,
            width: 80,
            height: 80,
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 22,
            background:
              'linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.04))',
            color: '#ffffff',
            fontSize: 45,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          e
        </div>

        <div
          style={{
            position: 'absolute',
            left: 216,
            top: 98,
            color: 'rgba(244,244,245,0.64)',
            fontSize: 27,
          }}
        >
          https://eeri.dev/
        </div>
        <div
          style={{
            position: 'absolute',
            left: 216,
            top: 138,
            width: 10,
            height: 10,
            borderRadius: 999,
            background: '#10b981',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 236,
            top: 128,
            color: '#a7f3d0',
            fontSize: 22,
          }}
        >
          available for work
        </div>

        <div
          style={{
            position: 'absolute',
            right: 112,
            top: 104,
            border: '1px solid rgba(16,185,129,0.34)',
            borderRadius: 999,
            background: 'rgba(16,185,129,0.1)',
            color: '#a7f3d0',
            padding: '10px 16px',
            fontSize: 22,
          }}
        >
          portfolio
        </div>

        <div
          style={{
            position: 'absolute',
            left: 112,
            top: 214,
            fontSize: 64,
            fontWeight: 760,
            letterSpacing: -2,
          }}
        >
          Aleksandr Hubanov
        </div>
        <div
          style={{
            position: 'absolute',
            left: 112,
            top: 292,
            width: 600,
            color: 'rgba(244,244,245,0.72)',
            fontSize: 29,
            lineHeight: 1.22,
          }}
        >
          I design polished web products with fast interfaces and maintainable
          codebases.
        </div>

        <div
          style={{
            position: 'absolute',
            left: 112,
            top: 354,
            display: 'flex',
            gap: 10,
          }}
        >
          {stack.map((item) => (
            <div
              key={item}
              style={{
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: 10,
                background: 'rgba(255,255,255,0.06)',
                color: '#e5e7eb',
                padding: '9px 13px',
                fontSize: 21,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div
          style={{
            position: 'absolute',
            left: 112,
            top: 410,
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            width: 610,
          }}
        >
          {facts.map((fact) => (
            <div
              key={fact}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 9,
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(244,244,245,0.68)',
                padding: '8px 12px',
                fontSize: 18,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: '#2dd4bf',
                }}
              />
              {fact}
            </div>
          ))}
        </div>

        <div
          style={{
            position: 'absolute',
            right: 112,
            top: 214,
            width: 360,
            height: 242,
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: 20,
            background: 'rgba(0,0,0,0.26)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 742,
            top: 234,
            color: 'rgba(244,244,245,0.48)',
            fontSize: 18,
          }}
        >
          selected work
        </div>
        {projects.map(([project, width, color], index) => (
          <div key={project} style={{ display: 'contents' }}>
            <div
              style={{
                position: 'absolute',
                right: 306,
                top: 270 + index * 45,
                color: '#f4f4f5',
                fontSize: 21,
              }}
            >
              {project}
            </div>
            <div
              style={{
                position: 'absolute',
                right: 130,
                top: 279 + index * 45,
                width,
                height: 7,
                borderRadius: 999,
                background: color,
                opacity: 0.72,
              }}
            />
          </div>
        ))}

        <div
          style={{
            position: 'absolute',
            left: 112,
            bottom: 78,
            color: 'rgba(244,244,245,0.48)',
            fontSize: 22,
          }}
        >
          github.com/eerinessofsilence
        </div>
        <div
          style={{
            position: 'absolute',
            right: 112,
            bottom: 78,
            color: 'rgba(244,244,245,0.48)',
            fontSize: 22,
          }}
        >
          eeri.dev@gmail.com
        </div>
      </div>
    ),
    size,
  );
}
