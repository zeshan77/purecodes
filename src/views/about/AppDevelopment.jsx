import AppDevelopmentImage from "/images/app-dev.jpg";
import { motion } from "framer-motion";

export default function AppDevelopment() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight tracking-tight">
          What <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c662e0] to-[#6a1b9a]">We Do</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed px-2">
          We’re a full-stack development agency delivering end-to-end digital solutions 
          that drive growth, enhance conversion, and elevate user experience.
        </p>
      </div>

      {/* App Development Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 
                   flex flex-col md:flex-row md:items-stretch"
      >
        {/* Left Image Section */}
        <div className="relative h-64 sm:h-80 md:h-auto md:w-1/2 overflow-hidden">
          <img
            src={AppDevelopmentImage}
            alt="App Development"
            className="h-full w-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#c662e0]/80 to-[#6a1b9a]/80 mix-blend-multiply"></div>
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 md:px-12 md:w-1/2 text-center md:text-left">
          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#c662e0] to-[#6a1b9a]">
            Let’s Talk
          </h3>
          <h4 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-[#c662e0] to-[#6a1b9a] bg-clip-text text-transparent">
              App Development
            </span>
          </h4>
          <div className="mt-3 mb-5 h-1 w-16 mx-auto md:mx-0 bg-gradient-to-r from-[#c662e0] to-[#6a1b9a] rounded-full"></div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We build apps that are fast, scalable, and beautiful. With
            test-driven workflows and modern frameworks, we write clean,
            maintainable code that grows with your business. The goal? 
            Software that feels effortless — and lasts.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
