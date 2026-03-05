"use client";

import Swal from "sweetalert2";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for contacting Swasyaha Solutions. We will get back to you soon.",
      icon: "success",
      confirmButtonColor: "#2563eb",
    });

    e.target.reset();
  };

  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container-custom">
        {/* Page Title */}

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">
            Contact Us
          </h1>

          <p className="mt-4 text-[var(--text-light)]">
            Have a project in mind? Let's discuss how Swasyaha Solutions can
            help.
          </p>
        </div>

        {/* Contact Grid */}

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Form */}

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md space-y-4"
          >
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>

            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:border-[var(--primary)]"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:border-[var(--primary)]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg p-3 focus:outline-none focus:border-[var(--primary)]"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:border-[var(--primary)]"
            ></textarea>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>

          {/* Contact Info */}

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Address</h3>

              <p className="text-[var(--text-light)] text-sm">
                Swasyaha Solutions
                <br />
                Bangalore, Karnataka
                <br />
                India
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Email</h3>

              <p className="text-[var(--text-light)] text-sm">
                rajleelavathi6@gmail.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Phone</h3>

              <p className="text-[var(--text-light)] text-sm">
                +91 73494 45974
              </p>
            </div>

            {/* Map Placeholder */}

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">Location</h3>

              <p className="text-sm text-[var(--text-light)]">
                Google Map integration can be added here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
