import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaClock } from 'react-icons/fa';
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const formRef = useRef(null);
  const [state, handleSubmit] = useForm("mkoedprb");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let timer;
    if (state.succeeded) {
      setShowSuccess(true);
      formRef.current?.reset();
      timer = setTimeout(() => setShowSuccess(false), 4000);
    }
    return () => clearTimeout(timer);
  }, [state.succeeded]);
  
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="min-h-screen bg-gradient-to-b from-slate-100 to-white text-slate-900 pt-32 pb-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {showSuccess && (
          <div className="mb-10 rounded-3xl border border-green-200 bg-green-50 px-6 py-4 text-green-900 shadow-sm">
            <p className="font-semibold">Thanks for your message!</p>
            <p className="mt-1 text-sm text-green-700">We’ll be in touch shortly.</p>
          </div>
        )}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600 font-semibold">Contact</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">Let’s build something peaceful together.</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Send a message, book a quick call, or explore how AmaniSky NexTech can support your next website, design, or digital strategy.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-10 shadow-xl border border-slate-200">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">Get in touch</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <FaEnvelope className="w-5 h-5 text-blue-600" />,
                  title: 'Email',
                  detail: 'contact@amanisky.tech'
                },
                // {
                //   icon: <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />,
                //   title: 'Location',
                //   detail: 'Lagos, Nigeria'
                // },
                {
                  icon: <FaClock className="w-5 h-5 text-blue-600" />,
                  title: 'Availability',
                  detail: '24/7 Support'
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
            <div className="space-y-6">
              <label className="block">
                <span className="text-sm text-slate-200">Name</span>
                <input name="name" type="text" placeholder="Your name" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" required />
              </label>
              <label className="block">
                <span className="text-sm text-slate-200">Email</span>
                <input name="email" type="email" placeholder="you@example.com" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" required />
              </label>

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label className="block">
                <span className="text-sm text-slate-200">Message</span>
                <textarea name='message' rows="5" placeholder="Tell us about your project" className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" required></textarea>
              </label>
              <button type="submit" className="w-full rounded-full bg-blue-500 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-blue-400" disabled={state.submitting }>
                {state.submitting ? "Sending..." : "Send message"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
