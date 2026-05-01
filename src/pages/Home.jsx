import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { value: '4+', label: 'Core Features' },
    { value: '100%', label: 'Free to Use' },
    { value: '3', label: 'Team Members' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-600 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Stay Organised.{' '}
            <span className="text-yellow-300">Stay Productive.</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            TaskFlow is a student productivity hub that helps you manage tasks,
            track progress and collaborate — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/features"
              className="bg-yellow-400 text-indigo-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors shadow-lg"
            >
              Explore Features
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-indigo-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label} className="p-6 rounded-2xl bg-indigo-50 shadow-sm">
              <p className="text-4xl font-extrabold text-indigo-700 mb-1">{value}</p>
              <p className="text-gray-600 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Create Tasks',
                desc: 'Add tasks with titles, descriptions, due dates and priority levels in seconds.',
              },
              {
                step: '02',
                title: 'Track Progress',
                desc: 'Mark tasks as complete, filter by status and view your productivity at a glance.',
              },
              {
                step: '03',
                title: 'Stay Focused',
                desc: 'Use categories and priority tags to focus on what matters most today.',
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-5xl font-black text-indigo-200 mb-4">{step}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to take control of your tasks?
        </h2>
        <p className="text-indigo-200 mb-8 text-lg">
          Explore all the features TaskFlow has to offer.
        </p>
        <Link
          to="/features"
          className="bg-yellow-400 text-indigo-900 font-bold px-10 py-3 rounded-full hover:bg-yellow-300 transition-colors shadow-lg text-lg"
        >
          See All Features
        </Link>
      </section>
    </div>
  );
}
