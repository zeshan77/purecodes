export default function Contact() {
  return (
    <div className="bg-white py-5 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-200 lg:mx-0 lg:max-w-none">
          
          {/* --- CONTACT SECTION --- */}
          <div className="grid grid-cols-1 gap-10 py-12 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
                Get in touch
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                We’d love to hear from you! Reach out via the contact form or drop us a quick message — we’ll respond fast.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10 hover:shadow-md transition-shadow">
                <h3 className="text-base font-semibold text-gray-900">
                  Consultation
                </h3>
                <dl className="mt-3 space-y-1 text-sm text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:zeshan77@gmail.com"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        zeshan77@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+92 (333) 9644730</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl bg-gray-50 p-10 hover:shadow-md transition-shadow">
                <h3 className="text-base font-semibold text-gray-900">
                  Inquiries
                </h3>
                <dl className="mt-3 space-y-1 text-sm text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href="mailto:imuhammadessa@gmail.com"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        imuhammadessa@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+92 (345) 9257074</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* --- LOCATION SECTION --- */}
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
                Locations
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Find us where innovation happens — visit our offices or connect online.  
                We work with clients across the globe.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10 hover:shadow-md transition-shadow">
                <h3 className="text-base font-semibold text-gray-900">
                  Peshawar, Pakistan
                </h3>
                <address className="mt-3 space-y-1 text-sm text-gray-600 not-italic">
                  <p>25000 Hayatabad</p>
                  <p>Peshawar, Pakistan</p>
                </address>
              </div>

              <div className="rounded-2xl bg-gray-50 p-10 hover:shadow-md transition-shadow">
                <h3 className="text-base font-semibold text-gray-900">
                  Hangu, Pakistan
                </h3>
                <address className="mt-3 space-y-1 text-sm text-gray-600 not-italic">
                  <p>26190 Tall</p>
                  <p>Hangu, Pakistan</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
