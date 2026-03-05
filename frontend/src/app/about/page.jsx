import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container-custom">
        {/* Page Title */}

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">
            About Swasyaha Solutions
          </h1>

          <p className="mt-4 text-[var(--text-light)] max-w-2xl mx-auto">
            Swasyaha Solutions is dedicated to delivering innovative technology
            solutions that empower businesses, institutions, and startups to
            succeed in the digital world.
          </p>
        </div>

        {/* Company Introduction */}

        <div className="grid gap-10 md:grid-cols-2 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[var(--text-main)]">
              Who We Are
            </h2>

            <p className="text-[var(--text-light)] leading-relaxed mb-4">
              Swasyaha Solutions is a technology-driven company focused on
              building modern digital solutions for businesses and
              organizations. Our expertise includes web development, cloud
              solutions, data analytics, and intelligent systems.
            </p>

            <p className="text-[var(--text-light)] leading-relaxed">
              We combine innovation, technical expertise, and customer-focused
              development to deliver high-quality software systems that help
              organizations grow and adapt in today’s digital era.
            </p>
          </div>

          {/* Image */}

          <div className="relative w-full h-80">
            <Image
              src="/1.png"
              alt="about"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Mission & Vision */}

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
              Our Mission
            </h3>

            <p className="text-[var(--text-light)] leading-relaxed">
              To deliver innovative, scalable, and reliable digital solutions
              that help businesses transform their ideas into impactful
              technology products.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
              Our Vision
            </h3>

            <p className="text-[var(--text-light)] leading-relaxed">
              To become a trusted technology partner for organizations by
              providing intelligent digital solutions that drive growth,
              efficiency, and innovation.
            </p>
          </div>
        </div>

        {/* Core Values */}

        <div>
          <h2 className="text-2xl font-semibold text-center mb-10">
            Our Core Values
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="font-semibold mb-2">Innovation</h3>

              <p className="text-sm text-[var(--text-light)]">
                We continuously explore new technologies and ideas to create
                impactful digital solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="font-semibold mb-2">Quality</h3>

              <p className="text-sm text-[var(--text-light)]">
                Delivering reliable, secure, and high-performance solutions is
                our top priority.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="font-semibold mb-2">Integrity</h3>

              <p className="text-sm text-[var(--text-light)]">
                We maintain transparency and honesty in every project and
                collaboration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="font-semibold mb-2">Customer Focus</h3>

              <p className="text-sm text-[var(--text-light)]">
                Our solutions are designed around the needs and goals of our
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
