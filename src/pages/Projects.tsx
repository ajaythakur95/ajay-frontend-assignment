import { useEffect, useMemo, useState } from 'react'
import Card from '../components/Card'
import { fetchProjects, type Project } from '../lib/api'

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [q, setQ] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    fetchProjects(controller.signal)
      .then(setProjects)
      .catch((e) => {
        if (e?.name !== 'AbortError') setError('Failed to load projects')
      })
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [])

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return projects
    return projects.filter(p => p.name.toLowerCase().includes(term) || p.tags.some(t => t.toLowerCase().includes(term)))
  }, [q, projects])

  return (
    <section className="grid gap-6">
      <div className="flex items-center gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search projects or tags..."
          className="flex-1 border rounded-xl px-3 py-2"
        />
        <span className="text-sm text-gray-500">{filtered.length} / {projects.length}</span>
      </div>

      {loading && <Card title="Loading">Please wait…</Card>}
      {error && <Card title="Error">{error}</Card>}

      {!loading && !error && (
        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map(p => (
            <Card key={p.id} title={p.name}>
              <div className="flex flex-wrap gap-2 mb-2">
                {p.tags.map(t => <span key={t} className="text-xs bg-gray-100 border rounded-lg px-2 py-1">{t}</span>)}
              </div>
              <p className="text-sm text-gray-500">⭐ {p.stars} stars</p>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}
