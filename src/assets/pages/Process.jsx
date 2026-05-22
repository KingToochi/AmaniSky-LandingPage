import { FaRegLightbulb, FaTasks, FaRocket, FaHandshake } from 'react-icons/fa';

const Process = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-32 pb-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 font-semibold">Our process</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">A calm process for powerful results.</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Every project moves through clear milestones so your team always knows what to expect, when to review, and how success is measured.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {[
            {
              step: '01',
              icon: <FaRegLightbulb className="w-8 h-8 text-white" />,
              title: 'Discover',
              description: 'We listen deeply, study your goals, and map the right digital strategy for your business.',
              accent: 'from-sky-500 to-blue-600'
            },
            {
              step: '02',
              icon: <FaTasks className="w-8 h-8 text-white" />,
              title: 'Design',
              description: 'Wireframes, visuals, and interactions are refined until every detail feels exactly right.',
              accent: 'from-violet-500 to-fuchsia-500'
            },
            {
              step: '03',
              icon: <FaRocket className="w-8 h-8 text-white" />,
              title: 'Build',
              description: 'We code fast, test carefully, and deliver a polished product that performs beautifully.',
              accent: 'from-emerald-500 to-cyan-500'
            },
            {
              step: '04',
              icon: <FaHandshake className="w-8 h-8 text-white" />,
              title: 'Launch & Grow',
              description: 'We support your launch and keep improving the experience as your business grows.',
              accent: 'from-orange-500 to-rose-500'
            }
          ].map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
              <div className={`p-8 bg-gradient-to-br ${item.accent}`}>
                <div className="flex items-center justify-between text-white">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15 shadow-lg">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">{item.title}</h2>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-gradient-to-r from-blue-600 to-violet-600 p-10 text-white shadow-2xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-blue-200 font-semibold">How it works</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Simple communication. Clear milestones. Smooth delivery.</h2>
            </div>
            <div className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-blue-700 px-6 py-4 font-semibold shadow-lg hover:bg-slate-100 transition">
                Start your project
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-4 text-white font-semibold hover:bg-white/10 transition">
                Request a proposal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
