"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 w-full z-40 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="container-custom flex justify-between items-center py-3">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo1.jpeg"
            alt="Swasyaha Solutions"
            width={46}
            height={36}
            className="object-contain"
          />

          <span className="text-xl font-bold">
            <span className="text-[var(--primary)]">Swasyaha</span>
            <span className="text-[var(--text-main)] ml-1">Solutions</span>
          </span>
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="text-[var(--text-main)] hover:text-[var(--primary)] transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-2xl text-[var(--text-main)]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center py-6 space-y-4 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-[var(--text-main)] hover:text-[var(--primary)] transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
