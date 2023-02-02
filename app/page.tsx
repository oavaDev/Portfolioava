import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-2-5xl xl:px-0  '>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </main>
  );
}
