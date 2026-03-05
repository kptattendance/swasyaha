"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="py-16 text-white"
      style={{
        background: "linear-gradient(to right, var(--primary), var(--accent))",
      }}
    >
      <div className="container-custom text-center">
        {/* Title */}

        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Start Your Next Project?
        </h2>

        {/* Description */}

        <p className="mt-4 max-w-2xl mx-auto text-blue-100">
          Swasyaha Solutions helps businesses transform ideas into powerful
          digital solutions. Let’s collaborate and build something amazing.
        </p>

        {/* Button */}

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-white text-[var(--primary)] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
