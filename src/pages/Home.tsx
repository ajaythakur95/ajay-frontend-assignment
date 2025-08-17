import { Link } from 'react-router-dom'
import Card from '../components/Card'

export default function Home() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <Card title="Welcome">
        <p>
          Hi, I'm <span className="font-semibold">Ajay</span> — a frontend developer focused on
          building fast, accessible, and beautiful web apps.
        </p>
        <div className="mt-4 flex gap-3">
          <Link to="/projects" className="px-4 py-2 rounded-xl bg-indigo-600 text-white">View Projects</Link>
          <Link to="/dashboard" className="px-4 py-2 rounded-xl bg-gray-100 text-gray-800 border">Open Dashboard</Link>
        </div>
      </Card>
      <Card title="Highlights">
        <ul className="list-disc pl-6 space-y-1">
          <li>React 18 + TypeScript</li>
          <li>Tailwind CSS & component-based design</li>
          <li>Routing, state, and mock API</li>
          <li>Unit tests and CI pipeline</li>
        </ul>
      </Card>
    </section>
  )
}
