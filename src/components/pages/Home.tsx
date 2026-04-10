import { HomeContact } from '@/components/home/sections/HomeContact';
import { HomeExperience } from '@/components/home/sections/HomeExperience';
import { HomeIntro } from '@/components/home/sections/HomeIntro';
import { HomeProjects } from '@/components/home/sections/HomeProjects';
import { HomeToolkit } from '@/components/home/sections/HomeToolkit';

export default function Home() {
  return (
    <section className="container-small relative w-full pb-10">
      <div className="flex flex-col gap-12">
        <HomeIntro />
        <HomeToolkit />
        <HomeProjects />
        <HomeExperience />
        <HomeContact />
      </div>
    </section>
  );
}
