import { FaLaptopCode, FaPaintBrush, FaBullhorn, FaChartLine } from 'react-icons/fa';

const Service = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-32 pb-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600 font-semibold">Services</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">Smart services for focused businesses.</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            AmaniSky brings calm and clarity to every project with digital services that align with your brand and grow your audience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              icon: <FaLaptopCode className="w-8 h-8 text-white" />,
              title: 'Web Development',
              description: 'Fast, accessible websites that feel effortless to manage and look exceptional across every device.',
              accent: 'from-sky-500 to-blue-600'
            },
            {
              icon: <FaPaintBrush className="w-8 h-8 text-white" />,
              title: 'Brand & Design',
              description: 'Brand identities, logo systems, and visual experiences designed to make your message unforgettable.',
              accent: 'from-violet-500 to-fuchsia-500'
            },
            {
              icon: <FaBullhorn className="w-8 h-8 text-white" />,
              title: 'Digital Marketing',
              description: 'Marketing assets and campaigns crafted to build momentum, nurture trust, and convert visitors to customers.',
              accent: 'from-emerald-500 to-cyan-500'
            },
            {
              icon: <FaChartLine className="w-8 h-8 text-white" />,
              title: 'Strategy & Growth',
              description: 'Guidance on product direction, UX, and operations so your next step is clear and grounded in real goals.',
              accent: 'from-orange-500 to-rose-500'
            }
          ].map((item) => (
            <div key={item.title} className="group rounded-[2rem] bg-white border border-slate-200 shadow-lg overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl">
              <div className={`p-8 bg-gradient-to-br ${item.accent}`}>
                <div className="w-16 h-16 rounded-3xl bg-white/15 backdrop-blur-xl flex items-center justify-center shadow-lg">
                  {item.icon}
                </div>
              </div>
              <div className="p-8 bg-white">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">{item.title}</h2>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-slate-200 bg-gradient-to-r from-slate-100 via-white to-slate-100 p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Ready when you are</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">Choose the service that fits your pace.</h2>
            </div>
            <div className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 transition">
                Talk to our team
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-4 text-slate-700 font-semibold hover:bg-slate-50 transition">
                Get a quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
