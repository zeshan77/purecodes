import AboutImage from "/images/whatwedo.jpg";
import {
  FaLaravel,
  FaVuejs,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNginx,
  SiAlgolia,
  SiTrello,
  SiNextdotjs,
  SiVercel,
  SiPostgresql,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Cards() {
  const techIcons = [
    { Icon: FaLaravel, name: "Laravel" },
    { Icon: FaVuejs, name: "Vue.js" },
    { Icon: FaReact, name: "React.js" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiTailwindcss, name: "TailwindCSS" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: FaGitAlt, name: "Git" },
    { Icon: SiVercel, name: "Vercel" },
    { Icon: FaDocker, name: "Docker" },
    { Icon: FaAws, name: "AWS" },
    { Icon: SiNginx, name: "Nginx" },
    { Icon: SiAlgolia, name: "Algolia" },
    { Icon: SiTrello, name: "Trello" },
  ];

  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-12 items-center gap-10 lg:gap-0">
          
          {/* Right Section — Text + Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative lg:col-span-7 rounded-3xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E935C1] via-[#c38bfc] to-[#8b5cf6] opacity-95" />

            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-25 mix-blend-overlay"
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

            <div className="relative z-10 px-6 sm:px-10 py-12 sm:py-16 text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl mx-auto sm:mx-0">
                We build scalable, high-performance web apps using the latest
                technologies. Our team blends design, strategy, and development
                to turn your digital vision into reality.
              </p>

              <div className="mt-8 flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8">
                {techIcons.map(({ Icon, name }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.15 }}
                    className="flex flex-col items-center text-white w-16 sm:w-auto"
                  >
                    <Icon className="text-3xl sm:text-4xl" />
                    <span className="text-xs sm:text-sm mt-1 opacity-80">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Left Section — Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 lg:col-span-5 flex justify-center"
          >
            <div className="max-w-sm sm:max-w-md lg:max-w-none h-[260px] sm:h-[350px] lg:h-[420px]">
              <img
                src={AboutImage}
                alt="Team collaborating on digital product design"
                className="w-full h-full rounded-3xl object-cover shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
