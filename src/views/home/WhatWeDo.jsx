export default function WhatWeDo() {
    const features = [
      { title: 'Fast', desc: 'Optimized performance using React & Vite.' },
      { title: 'Modern', desc: 'Built with TailwindCSS & best design practices.' },
      { title: 'Scalable', desc: 'Modular architecture ready for growth.' },
    ]
  
    return (
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#013d52]">Why Choose PureCodes?</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="bg-[#e8f2f6] p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-[#01627a]">{f.title}</h3>
              <p className="mt-2 text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  