const team = [
  {
    name: 'Ali Shehhi',
    role: 'Frontend Developer',
    initials: 'AS',
    bio: 'Passionate about building intuitive UIs and solving real-world problems with React.',
    color: 'bg-indigo-500',
  },
  {
    name: 'Sara Ahmed',
    role: 'UI/UX Designer',
    initials: 'SA',
    bio: 'Designs user-centred experiences with a focus on accessibility and visual clarity.',
    color: 'bg-purple-500',
  },
  {
    name: 'Omar Hassan',
    role: 'Project Manager',
    initials: 'OH',
    bio: 'Coordinates team efforts and ensures milestones are delivered on time.',
    color: 'bg-pink-500',
  },
];

const milestones = [
  { year: 'Week 1', event: 'Project kick-off and requirements gathering' },
  { year: 'Week 2', event: 'UI wireframes and design prototypes' },
  { year: 'Week 3', event: 'Core React component development' },
  { year: 'Week 4', event: 'Testing, polish and deployment' },
];

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About TaskFlow</h1>
        <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
          Learn about the mission behind TaskFlow and the team that built it.
        </p>
      </section>

      {/* Mission */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              TaskFlow was created as part of CSCI390 Project 2 to demonstrate how a modern,
              responsive web application can help students manage their academic workload
              more effectively.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that staying organised shouldn't be complicated. TaskFlow strips away
              the noise and gives you a clean, fast interface to manage what matters.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-xl font-bold text-indigo-700 mb-4">Tech Stack</h3>
            <ul className="space-y-3">
              {[
                { tech: 'React 19', desc: 'UI library' },
                { tech: 'React Router v7', desc: 'Client-side routing' },
                { tech: 'Tailwind CSS v4', desc: 'Utility-first styling' },
                { tech: 'Vite', desc: 'Build tool & dev server' },
                { tech: 'Git & GitHub', desc: 'Version control & hosting' },
              ].map(({ tech, desc }) => (
                <li key={tech} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                  <span className="font-semibold text-gray-800">{tech}</span>
                  <span className="text-gray-500 text-sm">— {desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Project Timeline</h2>
          <ol className="relative border-l-2 border-indigo-200 space-y-8 pl-8">
            {milestones.map(({ year, event }) => (
              <li key={year} className="relative">
                <span className="absolute -left-[1.1rem] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-2 border-white shadow" />
                <p className="text-sm font-semibold text-indigo-600 mb-1">{year}</p>
                <p className="text-gray-700">{event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map(({ name, role, initials, bio, color }) => (
              <div
                key={name}
                className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-16 h-16 rounded-full ${color} text-white flex items-center justify-center text-2xl font-bold mb-4`}
                >
                  {initials}
                </div>
                <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                <p className="text-indigo-600 text-sm font-medium mb-3">{role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
