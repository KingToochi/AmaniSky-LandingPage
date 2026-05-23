import { useEffect, useMemo, useState } from 'react';

const projectTypeOptions = [
  'Web Development',
  'Brand & Design',
  'Digital Marketing',
  'Strategy & Growth',
  'App Development'
];

const scopeOptions = [
  'Startup site',
  'E-commerce store',
  'Web application',
  'Brand system',
  'Marketing campaign',
  'Custom platform'
];

const timelineOptions = [
  '2-4 weeks',
  '4-6 weeks',
  '6-8 weeks',
  '8+ weeks'
];

const multipliers = {
  'Web Development': 1.2,
  'Brand & Design': 1.0,
  'Digital Marketing': 1.1,
  'Strategy & Growth': 0.9,
  'App Development': 1.4,
  'Startup site': 1.0,
  'E-commerce store': 1.3,
  'Web application': 1.4,
  'Brand system': 0.9,
  'Marketing campaign': 1.0,
  'Custom platform': 1.6,
  '2-4 weeks': 1.25,
  '4-6 weeks': 1.1,
  '6-8 weeks': 1.0,
  '8+ weeks': 0.9
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
};

const QuoteModal = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState(projectTypeOptions[0]);
  const [scope, setScope] = useState(scopeOptions[0]);
  const [timeline, setTimeline] = useState(timelineOptions[1]);
  const [details, setDetails] = useState('A new digital project with clear goals and a smooth user experience.');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setProjectType(projectTypeOptions[0]);
      setScope(scopeOptions[0]);
      setTimeline(timelineOptions[1]);
      setDetails('A new digital project with clear goals and a smooth user experience.');
      setResult(null);
    }
  }, [isOpen]);

  const estimate = useMemo(() => {
    const basePrice = 1800;
    const typeMultiplier = multipliers[projectType] || 1;
    const scopeMultiplier = multipliers[scope] || 1;
    const timelineMultiplier = multipliers[timeline] || 1;
    const raw = basePrice * typeMultiplier * scopeMultiplier * timelineMultiplier;
    const min = raw * 0.95;
    const max = raw * 1.25;
    return { min, max, raw };
  }, [projectType, scope, timeline]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const min = estimate.min;
    const max = estimate.max;
    setResult({
      range: `${formatCurrency(min)} — ${formatCurrency(max)}`,
      summary: `Estimated quote based on ${projectType.toLowerCase()} with ${scope.toLowerCase()} and a ${timeline.toLowerCase()} timeline.`
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-3xl rounded-[2rem] bg-white shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-5 bg-slate-50">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Quick Quote</p>
            <h2 className="text-2xl font-semibold text-slate-900">Estimate your project cost instantly</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition"
          >
            Close
          </button>
        </div>

        <div className="px-6 py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Project type</span>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  {projectTypeOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Scope</span>
                <select
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  {scopeOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Timeline</span>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              >
                {timelineOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Describe your project</span>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={4}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-4 text-white font-semibold hover:bg-blue-700 transition"
              >
                Generate quote
              </button>
              <p className="text-sm text-slate-500">Stay on this page while we calculate an estimate for your project.</p>
            </div>
          </form>

          {result && (
            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Quote estimate</p>
              <h3 className="mt-4 text-3xl font-semibold text-slate-900">{result.range}</h3>
              <p className="mt-3 text-slate-600">{result.summary}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-4 text-white font-semibold hover:bg-slate-800 transition"
                >
                  Close quote
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
