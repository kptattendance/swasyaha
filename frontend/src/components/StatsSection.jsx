"use client";

import { useEffect, useState } from "react";

export default function StatsSection() {
  const stats = [
    { label: "Projects Completed", value: 50 },
    { label: "Happy Clients", value: 40 },
    { label: "Technologies Used", value: 25 },
    { label: "Years Experience", value: 5 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;

      const interval = setInterval(() => {
        start += 1;

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });

        if (start >= stat.value) clearInterval(interval);
      }, 30);
    });
  }, []);

  return (
    <section className="py-16 bg-[var(--primary)] text-white">
      <div className="container-custom grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-4xl font-bold">{counts[index]}+</h2>

            <p className="mt-2 text-blue-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
