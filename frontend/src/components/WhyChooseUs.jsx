"use client";

import { FaLightbulb, FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Innovative Solutions",
      description:
        "We deliver modern technology solutions using the latest tools and frameworks to help businesses stay ahead.",
      icon: <FaLightbulb />,
    },
    {
      title: "Experienced Team",
      description:
        "Our team has strong expertise in software development, cloud technologies and intelligent systems.",
      icon: <FaUsers />,
    },
    {
      title: "Reliable & Secure",
      description:
        "Security, performance and reliability are core priorities in every solution we build.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Fast & Scalable",
      description:
        "Our solutions are designed to grow with your business and scale efficiently as your needs expand.",
      icon: <FaRocket />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Section Heading */}

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">
            Why Choose Us
          </h2>

          <p className="mt-4 text-[var(--text-light)] max-w-2xl mx-auto">
            Swasyaha Solutions focuses on delivering high-quality technology
            solutions that help organizations innovate, grow and succeed in the
            digital world.
          </p>
        </div>

        {/* Features Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-lg transition"
            >
              {/* Icon */}

              <div className="text-3xl text-[var(--primary)] mb-4">
                {item.icon}
              </div>

              {/* Title */}

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              {/* Description */}

              <p className="text-sm text-[var(--text-light)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
