import Leadership from "/images/technical-leadership.jpg";
import { motion } from "framer-motion";

export default function TechnicalLeadership() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-12 lg:py-18">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 md:flex md:h-[480px] lg:h-[520px]"
      >
        {/* Left Image Section (order swapped) */}
        <div className="relative h-80 sm:h-64 w-full overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none md:h-auto md:w-1/2">
          <img
            alt="Technical Leadership background"
            src={Leadership}
            className="h-full w-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#c662e0]/80 to-[#6a1b9a]/80 mix-blend-multiply"></div>
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-center px-6 py-10 sm:px-8 sm:py-16 md:w-1/2">
          <h3 className="text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#c662e0] to-[#6a1b9a] uppercase tracking-wide">
            Let’s Talk
          </h3>
          <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-[#c662e0] to-[#6a1b9a] bg-clip-text text-transparent">
              Technical Leadership
            </span>
          </p>
          <div className="mt-2 h-1 w-14 bg-gradient-to-r from-[#c662e0] to-[#6a1b9a] rounded-full"></div>
          <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
            We pride ourselves on delivering exceptional code, and we facilitate
            this when working with our clients. Our team consists of experts
            that will help you guide your team into building products you can be
            proud of.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

