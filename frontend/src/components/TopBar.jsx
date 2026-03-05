import { FaPhoneAlt, FaEnvelope, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="bg-[var(--secondary)] text-gray-200 text-sm border-b border-gray-700">
      <div className="container-custom flex justify-between items-center py-2">
        {/* Contact Info */}

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-1 text-center md:text-left w-full md:w-auto">
          <a
            href="tel:+917349445974"
            className="flex items-center gap-2 hover:text-[var(--accent)] transition"
          >
            <FaPhoneAlt className="text-[var(--accent)] text-xs" />
            +91 73494 45974
          </a>

          <a
            href="mailto:rajleelavathi6@gmail.com"
            className="flex items-center gap-2 hover:text-[var(--accent)] transition"
          >
            <FaEnvelope className="text-[var(--accent)] text-xs" />
            rajleelavathi6@gmail.com
          </a>
        </div>

        {/* Social Icons (Desktop Only) */}

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-[var(--accent)] transition">
            <FaFacebook />
          </a>

          <a href="#" className="hover:text-[var(--accent)] transition">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
