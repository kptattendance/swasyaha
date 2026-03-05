import WebDevelopment from "./WebDevelopment";
import CloudSolutions from "./CloudSolutions";
import AISolutions from "./AISolutions";
import MobileAppDevelopment from "./MobileAppDevelopment";
import ITConsulting from "./ITConsulting";
import CyberSecurity from "./CyberSecurity";

export default function ServicesPage() {
  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container-custom">
        {/* Page Heading */}

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">
            Our Services
          </h1>

          <p className="mt-4 text-[var(--text-light)] max-w-2xl mx-auto">
            Swasyaha Solutions offers innovative technology services designed to
            help businesses grow, innovate and succeed in the digital era.
          </p>
        </div>

        {/* Services Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <WebDevelopment />

          <CloudSolutions />

          <AISolutions />

          <MobileAppDevelopment />

          <ITConsulting />

          <CyberSecurity />
        </div>
      </div>
    </section>
  );
}
