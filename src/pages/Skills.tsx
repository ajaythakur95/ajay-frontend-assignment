import Card from '../components/Card'

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind', level: 88 },
  { name: 'Accessibility', level: 78 },
  { name: 'Performance', level: 82 },
]

export default function Skills() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <Card title="Skills">
        <ul className="space-y-3">
          {skills.map(s => (
            <li key={s.name}>
              <div className="flex justify-between text-sm">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mt-1">
                <div className="h-2 bg-indigo-500 rounded-full" style={{ width: `${s.level}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </Card>
      <Card title="About">
        <p>
          I craft maintainable UI using component-driven architecture, focus on performance and
          accessibility, and collaborate closely with design and backend teams.
        </p>
      </Card>
    </section>
  )
}
