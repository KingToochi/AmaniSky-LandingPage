import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white text-slate-900 pt-32 pb-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600 font-semibold">Contact</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">Let’s build something peaceful together.</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Send a message, book a quick call, or explore how AmaniSky can support your next website, design, or digital strategy.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-10 shadow-xl border border-slate-200">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">Get in touch</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <FaPhone className="w-5 h-5 text-blue-600" />,
                  title: 'Phone',
                  detail: '+234 903 118 3272'
                },
                {
                  icon: <FaEnvelope className="w-5 h-5 text-blue-600" />,
                  title: 'Email',
                  detail: 'kingtoochukwuumoke@gmail.com'
                },
                {
                  icon: <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />,
                  title: 'Location',
                  detail: 'Lagos, Nigeria'
                },
                {
                  icon: <FaClock className="w-5 h-5 text-blue-600" />,
                  title: 'Availability',
                  detail: 'Weekdays 9AM – 6PM WAT'
                }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-3xl bg-slate-50 p-5 border border-slate-200">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">{item.icon}</div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-500 font-semibold">{item.title}</p>
                    <p className="mt-2 text-slate-700">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-10 shadow-2xl text-white">
            <h2 className="text-3xl font-semibold mb-6">Request a consultation</h2>
            <form className="space-y-6">
              <label className="block">
                <span className="text-sm text-slate-200">Name</span>
                <input type="text" placeholder="Your name" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-200">Email</span>
                <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-200">Message</span>
                <textarea rows="5" placeholder="Tell us about your project" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"></textarea>
              </label>
              <button type="button" className="w-full rounded-full bg-blue-500 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-blue-400">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
