export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-indigo-200 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} TaskFlow · CSCI390 Project 2</p>
        <p className="text-sm">Built with React + Tailwind CSS</p>
      </div>
    </footer>
  );
}
