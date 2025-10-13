import ShowcaseImage from "/images/showcase.avif";
import { Link as ScrollLink } from "react-scroll";

export default function Showcase() {
  return (
    <div className="bg-white mb-24">
      <main>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2" />

          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              {/* Background Image + Overlay */}
              <div className="absolute inset-0">
                <img
                  alt="People working on laptops"
                  src={ShowcaseImage}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-[#c167d8]/70 mix-blend-multiply" />
              </div>

              {/* Content */}
              <div className="relative px-4 py-16 sm:py-24 lg:px-8 lg:py-36 text-center">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug">
                  <span className="block text-white animate-fadeInUp">
                    Boost your productivity
                  </span>
                  <span className="block text-indigo-200 animate-fadeInUp delay-150">
                    Create your app today
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
