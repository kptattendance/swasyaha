import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main>

      <HeroSection />

      <ServicesSection />
      <StatsSection />

      <WhyChooseUs />

      <ProjectsSection />

      <TestimonialsSection />

      <CTASection />

    </main>
  );
}