const features = [
  {
    icon: '✅',
    title: 'Task Management',
    desc: 'Create, edit and delete tasks with ease. Set titles, descriptions, due dates and priority levels to stay on top of your workload.',
    highlights: ['Add & remove tasks instantly', 'Priority labels: High / Medium / Low', 'Due date tracking'],
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    desc: 'Visualise how much you have accomplished. Mark tasks as complete and watch your progress bar grow throughout the day.',
    highlights: ['Completion percentage indicator', 'Filter by status: All / Active / Done', 'Task count summary'],
  },
  {
    icon: '🏷️',
    title: 'Category Tags',
    desc: 'Organise tasks by category — study, personal, work, health — so you can focus on one area at a time.',
    highlights: ['Custom colour tags', 'Filter by category', 'Quick visual scanning'],
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    desc: 'TaskFlow works beautifully on desktop, tablet and mobile. Access your tasks anywhere, any time.',
    highlights: ['Mobile-first layout', 'Touch-friendly controls', 'Fast load times with Vite'],
  },
  {
    icon: '🔍',
    title: 'Search & Filter',
    desc: 'Instantly find the task you are looking for using the live search bar and filter options.',
    highlights: ['Real-time search', 'Filter by priority', 'Sort by date or name'],
  },
  {
    icon: '💾',
    title: 'Local Persistence',
    desc: 'Your tasks are saved in your browser\'s local storage, so they persist even after you close the tab.',
    highlights: ['No account required', 'Data stays on your device', 'Works offline'],
  },
];

export default function Features() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Features</h1>
        <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
          Everything you need to manage your tasks and boost your productivity — no fluff, just results.
        </p>
      </section>

      {/* Feature cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ icon, title, desc, highlights }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col hover:shadow-xl transition-shadow"
            >
              <span className="text-5xl mb-4">{icon}</span>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed mb-5 flex-1">{desc}</p>
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-500 font-bold">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Why Choose TaskFlow?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm text-left">
              <thead>
                <tr className="bg-indigo-700 text-white">
                  <th className="px-4 py-3 rounded-tl-lg">Feature</th>
                  <th className="px-4 py-3 text-center">TaskFlow</th>
                  <th className="px-4 py-3 text-center rounded-tr-lg">Other Apps</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Completely Free', true, false],
                  ['No Account Needed', true, false],
                  ['Offline Support', true, false],
                  ['Responsive Mobile UI', true, true],
                  ['Priority & Categories', true, true],
                  ['Instant Load (Vite)', true, false],
                ].map(([feature, ours, theirs], i) => (
                  <tr
                    key={feature}
                    className={i % 2 === 0 ? 'bg-indigo-50' : 'bg-white'}
                  >
                    <td className="px-4 py-3 font-medium text-gray-700">{feature}</td>
                    <td className="px-4 py-3 text-center text-xl">
                      {ours ? '✅' : '❌'}
                    </td>
                    <td className="px-4 py-3 text-center text-xl">
                      {theirs ? '✅' : '❌'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
