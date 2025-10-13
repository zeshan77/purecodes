import { FaLaravel, FaVuejs, FaGitAlt, FaHeart } from "react-icons/fa";
import { SiPostgresql, SiTailwindcss } from "react-icons/si";

const features = [
  {
    title: "Laravel",
    description:
      "A powerful PHP framework that provides elegant syntax and robust backend architecture for scalable web applications.",
    icon: FaLaravel,
    gradient: "from-[#f05340] to-[#6c6c6c]",
  },
  {
    title: "Vue.js",
    description:
      "The progressive JavaScript framework for building intuitive, fast, and maintainable front-end user interfaces.",
    icon: FaVuejs,
    gradient: "from-[#42b883] to-[#35495e]",
  },
  {
    title: "Tailwind CSS",
    description:
      "A modern utility-first CSS framework that enables rapid UI development with consistent, responsive design.",
    icon: SiTailwindcss,
    gradient: "from-[#5c6ac4] to-[#bbdefb]",
  },
  {
    title: "PostgreSQL",
    description:
      "A reliable open-source relational database system trusted for scalability, performance, and strong data integrity.",
    icon: SiPostgresql,
    gradient: "from-[#336791] to-[#008bb9]",
  },
  {
    title: "Git",
    description:
      "Version control made simple — enabling collaboration, tracking, and seamless code management across teams.",
    icon: FaGitAlt,
    gradient: "from-[#F1502F] to-[#3E2C00]",
  },
  {
    title: "More",
    description:
      "We also work with cutting-edge technologies and tools to deliver high-quality, production-ready digital experiences.",
    icon: FaHeart,
    gradient: "from-[#FE251B] to-[#000024]",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c662e0] to-[#6a1b9a]">Services</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed px-2">
          We are a full-stack web development agency offering end-to-end digital
          solutions that boost growth, conversion, and user satisfaction.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {features.map(({ title, description, icon, gradient }) => {
          const Icon = icon;
          return (
            <div
              key={title}
              className="relative p-6 sm:p-8 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-[#c38bfc]/40 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-95`}
              />

              {/* Pattern Overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20 mix-blend-overlay"
              >
                <svg
                  fill="none"
                  width={404}
                  height={384}
                  viewBox="0 0 404 384"
                  className="absolute top-0 left-0"
                >
                  <defs>
                    <pattern
                      id="pattern-dots"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        fill="white"
                        className="opacity-50"
                      />
                    </pattern>
                  </defs>
                  <rect width={404} height={384} fill="url(#pattern-dots)" />
                </svg>
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>

                <p className="text-white/90 leading-relaxed">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
