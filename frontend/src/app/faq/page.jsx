"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
export default function FAQPage() {
  const faqs = [
    {
      q: "What services does Swasyaha Solutions provide?",
      a: "Swasyaha Solutions provides digital technology services including web development, cloud solutions, AI and data analytics, mobile application development, IT consulting, and cybersecurity solutions.",
    },
    {
      q: "Do you develop custom websites?",
      a: "Yes. We design and develop custom websites tailored to business needs using modern technologies such as Next.js, React, and Tailwind CSS.",
    },
    {
      q: "Do you provide mobile app development?",
      a: "Yes. We develop mobile applications for Android and cross-platform frameworks with modern UI and scalable architecture.",
    },
    {
      q: "How long does it take to build a website?",
      a: "Project timelines depend on complexity. Simple websites may take 1–2 weeks while advanced systems may take several weeks.",
    },
    {
      q: "Do you provide website maintenance?",
      a: "Yes. We provide maintenance services including security updates, performance improvements, and feature upgrades.",
    },
    {
      q: "Can you redesign an existing website?",
      a: "Yes. We can modernize outdated websites by improving design, performance, security, and SEO.",
    },
    {
      q: "Do you offer SEO optimization?",
      a: "Yes. We implement SEO best practices including performance optimization, structured metadata, and search engine indexing.",
    },
    {
      q: "What technologies do you use?",
      a: "Our technology stack includes Next.js, React, Node.js, Tailwind CSS, Python, cloud platforms, and modern development frameworks.",
    },
    {
      q: "Do you work with startups?",
      a: "Yes. We support startups with digital product development, MVP development, and scalable system architecture.",
    },
    {
      q: "Can you build cloud-based applications?",
      a: "Yes. We develop scalable cloud systems and deploy solutions on modern cloud platforms.",
    },
    {
      q: "Do you provide cybersecurity services?",
      a: "Yes. We provide vulnerability analysis, secure architecture design, and system protection solutions.",
    },
    {
      q: "Do you support long-term partnerships?",
      a: "Yes. We support long-term collaborations for system upgrades, maintenance, and feature development.",
    },
    {
      q: "How can I start a project with you?",
      a: "You can contact us through our contact form, email, or phone to discuss your project requirements.",
    },
    {
      q: "Do you provide consultation services?",
      a: "Yes. We provide IT consulting and digital strategy planning for businesses.",
    },
    {
      q: "Do you provide hosting or deployment services?",
      a: "Yes. We assist clients with deployment, hosting setup, and cloud infrastructure.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container-custom max-w-4xl">
        {/* Title */}

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-[var(--text-light)]">
            Answers to common questions about our services and solutions.
          </p>
        </div>

        {/* FAQ Cards */}

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold text-[var(--text-main)]">
                  {faq.q}
                </span>

                <span className="text-[var(--primary)] text-sm">
                  {active === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <div
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  active === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-[var(--text-light)]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
