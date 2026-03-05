"use client";

import { FaCode, FaCloud, FaMobileAlt, FaRobot } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern responsive websites and web applications built with latest technologies like React, Next.js and cloud platforms.",
      icon: <FaCode />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure, deployment automation, and performance optimization for modern businesses.",
      icon: <FaCloud />,
    },
    {
      title: "Mobile Applications",
      description:
        "High performance Android and iOS mobile applications designed with modern UI and seamless user experience.",
      icon: <FaMobileAlt />,
    },
    {
      title: "AI & Data Solutions",
      description:
        "Artificial intelligence, machine learning and data driven solutions to help businesses make smarter decisions.",
      icon: <FaRobot />,
    },
  ];

  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container-custom">
        {/* Section Title */}

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">
            Our Services
          </h2>

          <p className="mt-4 text-[var(--text-light)] max-w-2xl mx-auto">
            Swasyaha Solutions provides innovative technology services to help
            businesses grow faster and operate more efficiently in the digital
            world.
          </p>
        </div>

        {/* Services Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              {/* Icon */}

              <div className="text-3xl text-[var(--primary)] mb-4">
                {service.icon}
              </div>

              {/* Title */}

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

              {/* Description */}

              <p className="text-sm text-[var(--text-light)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
