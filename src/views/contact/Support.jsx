const supportLinks = [
  {
    name: "Sales",
    href: "#",
    description:
      "Looking to start a new project or scale your business? Our sales team is ready to help you find the perfect plan for your goals."
  },
  {
    name: "Technical Support",
    href: "#",
    description:
      "Need technical help or facing an issue? Our expert engineers are available 24/7 to assist you with setup, deployment, and troubleshooting."
  },
  {
    name: "Media Inquiries",
    href: "#",
    description:
      "For collaborations, interviews, or press opportunities — reach out to our media team. We’re happy to connect and collaborate."
  },
];

export default function Support() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16">
      {/* Section Header */}
      <div className="text-center mb-14 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight tracking-tight">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c662e0] to-[#6a1b9a]">
            Support
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
          At{" "}
          <span className="font-semibold text-[#6a1b9a]">
            PureCode Solutions
          </span>
          , we believe support should be as exceptional as our code. Whether you
          need sales guidance, technical help, or media assistance — we’re here
          to back you up every step of the way.
        </p>
      </div>

      {/* Support Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {supportLinks.map((link) => {
          return (
            <div
              key={link.name}
              className="flex flex-col rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {link.name}
              </h3>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                {link.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
