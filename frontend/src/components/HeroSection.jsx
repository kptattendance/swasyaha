"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-sky-400 text-white pt-28 md:pt-32 pb-16 md:pb-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE TEXT */}

        <div className="text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          >
            Building Modern <br className="hidden md:block" />
            Digital Solutions
          </motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-5 text-base sm:text-lg text-blue-100 max-w-lg mx-auto md:mx-0"
          >
            We develop high-quality web applications, cloud platforms, and
            intelligent digital solutions to help businesses grow faster in the
            modern digital world.
          </motion.p>


          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          >

            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition text-center"
            >
              Get Started
            </Link>

            <Link
              href="/services"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition text-center"
            >
              Our Services
            </Link>

          </motion.div>

        </div>


        {/* RIGHT SIDE IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <Image
            src="/image.png"
            alt="hero illustration"
            width={500}
            height={500}
            priority
            className="w-full max-w-sm md:max-w-lg"
          />

        </motion.div>

      </div>

    </section>
  );
}