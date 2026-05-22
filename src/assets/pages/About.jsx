import { FaUsers, FaShieldAlt, FaGlobe, FaClock } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600 font-semibold">About us</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">A partnership built around calm, craft, and clarity.</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            AmaniSky is a digital studio founded to help businesses move forward without noise. We create thoughtful experiences that feel easy to use and easy to love.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-white p-10 shadow-xl border border-slate-200">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">Who we are</h2>
              <p className="text-slate-600 leading-relaxed">We are a small, multidisciplinary team that blends web development, design, and business strategy. Our focus is on reducing overwhelm so you can launch with confidence.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { icon: <FaUsers className="w-6 h-6 text-slate-50" />, title: 'Client-first', detail: 'Transparent communication from day one.' },
                { icon: <FaShieldAlt className="w-6 h-6 text-slate-50" />, title: 'Trusted delivery', detail: 'Projects launched on time, with fewer revisions.' },
                { icon: <FaGlobe className="w-6 h-6 text-slate-50" />, title: 'Global reach', detail: 'Supporting companies across industries and continents.' },
                { icon: <FaClock className="w-6 h-6 text-slate-50" />, title: 'Always available', detail: 'Friendly support that moves at your pace.' }
              ].map((item) => (
                <div key={item.title} className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 p-6 text-white shadow-lg">
                  <div className="mb-4 rounded-3xl bg-white/10 p-4 inline-flex">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-200 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-violet-600 p-12 text-white shadow-2xl">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-blue-200 font-semibold">Our mission</p>
              <h2 className="mt-4 text-3xl font-bold">Design and code that feels peaceful and professional.</h2>
            </div>
            <p className="text-lg leading-relaxed text-blue-100 mb-6">
              We help brands create calm customer journeys with digital products that work beautifully and communicate clearly.
            </p>
            <div className="space-y-5">
              <div className="rounded-3xl bg-white/10 p-6">
                <h3 className="text-lg font-semibold">Simplified collaboration</h3>
                <p className="mt-2 text-slate-100 leading-relaxed">We keep feedback loops short and our process understandable.</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-6">
                <h3 className="text-lg font-semibold">Built for trust</h3>
                <p className="mt-2 text-slate-100 leading-relaxed">Clear estimates, honest advice, and a focus on long-term value.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600">150+</p>
              <p className="mt-2 text-slate-600">Projects delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">98%</p>
              <p className="mt-2 text-slate-600">Client satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600">24/7</p>
              <p className="mt-2 text-slate-600">Support available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
