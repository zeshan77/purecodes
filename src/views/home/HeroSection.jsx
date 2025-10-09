import AntonxLogo from '../../assets/partners/antonx.webp'
import HonestmedLogo from '../../assets/partners/honestmed.webp'
import SoftpyramidLogo from '../../assets/partners/softpyramid.png'
import NodesolLogo from '../../assets/partners/nodesol.svg'

export default function HeroSection() {
  return (
    <div className="bg-white">

      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <img
                    alt="People working on laptops"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#01627a] mix-blend-multiply" />
                </div>
                <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Software For</span>
                    <span className="block text-indigo-200">Strength and Focus</span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                  We help companies turn great ideas into amazing apps, products, and services.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-xs hover:bg-indigo-50 sm:px-8"
                      >
                        Get started
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500/60 px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-500/70 sm:px-8"
                      >
                        Live demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          {/* <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <p className="text-center text-base font-semibold text-gray-500">
                Trusted by average medium & large businesses
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-5 lg:grid-cols-4">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    alt="Tuple"
                    src={AntonxLogo}
                    className="h-12"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    alt="Mirage"
                    src={HonestmedLogo}
                    className="h-12"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    alt="StaticKit"
                    src={SoftpyramidLogo}
                    className="h-12"
                  />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    alt="Transistor"
                    src={NodesolLogo}
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}
