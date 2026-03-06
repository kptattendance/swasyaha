import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      title: "SSKS Music Academy",
      description:
        "Designed and developed a modern digital platform for a music academy, enabling students and visitors to explore courses, events and academy activities through a responsive and user-friendly website.",
      image: "/projects/1.png",
      tech: ["Next.js", "Tailwind CSS", "Responsive UI"],
      link: "https://www.ssksmusic.com",
      category: "Education Website",
    },

    {
      title: "Maruthi Auto Components",
      description:
        "Developed a professional corporate website for a manufacturing company to showcase their precision auto components, industry expertise and global capabilities.",
      image: "/projects/3.png",
      tech: ["Next.js", "SEO Optimization", "Responsive Design"],
      link: "https://maruthiautocomponents.com",
      category: "Industrial Website",
    },

    {
      title: "GP Flowers",
      description:
        "Created a modern business website for a flower shop to present their products, services and business information with a clean and engaging user interface.",
      image: "/projects/2.jpeg",
      tech: ["React", "Tailwind CSS", "Modern UI"],
      link: "https://gpflowers.in",
      category: "Business Website",
    },

    {
      title: "Manjunatha Tech",
      description:
        "Built a technology portfolio website to showcase technical expertise, services and digital solutions offered in software development and modern web technologies.",
      image: "/projects/6.png",
      tech: ["Next.js", "Tailwind", "Vercel Deployment"],
      link: "https://manjunathatech.vercel.app",
      category: "Tech Portfolio",
    },

    {
      title: "Co-operative Society",
      description:
        "Developed an educational organization co-operative website to highlight institutional memebrs financial activities, its maintainance and community initiatives through an accessible digital platform.",
      image: "/projects/4.png",
      tech: ["Next.js", "Responsive UI", "Modern Web Design"],
      link: "https://kptsociety.in",
      category: "Educational Organization",
    },

    {
      title: "Job Fair",
      description:
        "Developed a website for an educational organization to highlight job fair activities, participating institutions, and community initiatives through a responsive and user-friendly digital platform.",
      image: "/projects/7.png",
      tech: ["Next.js", "Responsive UI", "Modern Web Design"],
      link: "https://kptjobfair.vercel.app/",
      category: "Event Management",
    },
    {
      title: "Adamyasamskruthi NGO",
      description:
        "Created a digital platform for a non-profit organization to promote cultural programs, social initiatives and community engagement activities.",
      image: "/projects/5.png", //
      tech: ["Next.js", "Tailwind", "SEO Friendly"],
      link: "https://adamyasamskruthi.org",
      category: "NGO Website",
    },
  ];
  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container-custom">
        {/* Title */}

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">
            Our Projects
          </h1>

          <p className="mt-4 text-[var(--text-light)] max-w-2xl mx-auto">
            Explore real-world websites developed by Swasyaha Solutions for
            businesses and organizations.
          </p>
        </div>

        {/* Grid */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              {/* Image */}

              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}

              <div className="p-6">
                <span className="text-xs text-[var(--primary)] font-semibold">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold mt-2 mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-[var(--text-light)] mb-4">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
