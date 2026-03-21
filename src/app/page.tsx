import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StackSection from "@/components/StackSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 mx-auto max-w-[740px] px-6">
        <Hero />
        <StackSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
