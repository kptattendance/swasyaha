"use client";

import { FaStar } from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ravi Kumar",
      role: "Startup Founder",
      message:
        "Swasyaha Solutions delivered an excellent website for our company. Their professionalism and technical expertise are outstanding.",
    },
    {
      name: "Anita Sharma",
      role: "Business Owner",
      message:
        "The team developed a modern web platform for our business. The quality and performance exceeded our expectations.",
    },
    {
      name: "Rahul Mehta",
      role: "Tech Consultant",
      message:
        "Very reliable team with strong technical knowledge. They provided innovative solutions for our digital transformation.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Section Title */}

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-[var(--text-light)] max-w-2xl mx-auto">
            Feedback from clients and partners who have worked with Swasyaha
            Solutions.
          </p>
        </div>

        {/* Testimonials Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[var(--background)] rounded-xl shadow-md hover:shadow-xl transition"
            >
              {/* Stars */}

              <div className="flex text-yellow-400 mb-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Message */}

              <p className="text-sm text-[var(--text-light)] mb-4 leading-relaxed">
                "{item.message}"
              </p>

              {/* Client Info */}

              <div>
                <h4 className="font-semibold text-[var(--text-main)]">
                  {item.name}
                </h4>

                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
