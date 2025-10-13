import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-32 md:py-42">
      {/* Decorative background shape */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-20 -z-10 flex justify-center overflow-hidden blur-3xl"
      >
        <div
          className="aspect-[1318/752] w-[300px] sm:w-[500px] md:w-[650px] flex-none bg-gradient-to-r from-[#E935C1] to-[#f78ed8] opacity-40"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-700 leading-tight">
            Software for{" "}
            <span className="relative whitespace-nowrap text-[#E935C1]">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-none stroke-[#c666e6]/30 stroke-[2.5] animate-draw"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>

              <span className="relative font-bold text-[#c566db]">
                Strength and Focus
              </span>
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mx-auto mt-6 max-w-lg text-base sm:text-lg text-gray-600 leading-relaxed px-3 sm:px-0">
            We help companies turn great ideas into amazing apps, products, and
            services — combining innovation, design, and technology to deliver
            impactful digital experiences that drive growth.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row sm:justify-center gap-4 w-full max-w-sm sm:max-w-none mx-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#c2aaff] to-[#c566db] text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
            >
              Let’s Talk
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3 bg-transparent text-[#c666e6] text-sm font-semibold rounded-lg border border-[#c666e6] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
