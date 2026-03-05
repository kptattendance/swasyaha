import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "Refund Policy", path: "/refund-policy" },
    { name: "FAQs", path: "/faq" },
  ];

  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="mt-20 bg-[var(--secondary)] text-gray-300">
      <div className="container-custom py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
        {/* Company Info */}

        <div className="flex flex-col items-center sm:items-start">
          <Image
            src="/logo.jpeg"
            alt="Swasyaha Solutions"
            width={150}
            height={50}
            className="mb-3"
          />

          <h2 className="text-xl font-bold mb-3">
            <span className="text-[var(--accent)]">Swasyaha</span>{" "}
            <span>Solutions</span>
          </h2>

          <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
            Delivering modern web, cloud, and intelligent digital solutions.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="hover:text-[var(--accent)] transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}

        {/* Pages */}

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Pages</h3>

          <ul className="space-y-2 text-sm">
            {pages.map((page) => (
              <li key={page.name}>
                <Link
                  href={page.path}
                  className="hover:text-[var(--accent)] transition"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>

          <div className="space-y-3 text-sm">
            <a
              href="tel:+917349445974"
              className="flex items-center justify-center sm:justify-start gap-2 hover:text-[var(--accent)] transition"
            >
              <FaPhoneAlt className="text-[var(--accent)]" />
              +91 73494 45974
            </a>

            <a
              href="mailto:rajleelavathi6@gmail.com"
              className="flex items-center justify-center sm:justify-start gap-2 hover:text-[var(--accent)] transition"
            >
              <FaEnvelope className="text-[var(--accent)]" />
              rajleelavathi6@gmail.com
            </a>

            <div className="flex items-center justify-center sm:justify-start gap-2">
              <FaMapMarkerAlt className="text-[var(--accent)]" />
              Karnataka, India
            </div>
          </div>

          {/* Social Icons */}

          <div className="flex justify-center sm:justify-start space-x-4 text-xl mt-4">
            <FaFacebook className="cursor-pointer hover:text-[var(--accent)] transition" />
            <FaLinkedin className="cursor-pointer hover:text-[var(--accent)] transition" />
            <FaGithub className="cursor-pointer hover:text-[var(--accent)] transition" />
            <FaTwitter className="cursor-pointer hover:text-[var(--accent)] transition" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}

      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} Swasyaha Solutions. All Rights Reserved.
      </div>
    </footer>
  );
}
