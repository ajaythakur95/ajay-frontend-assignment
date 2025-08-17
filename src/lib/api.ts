import data from '../data/projects.json'

export type Project = {
  id: number
  name: string
  tags: string[]
  stars: number
}

export function fetchProjects(signal?: AbortSignal): Promise<Project[]> {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => resolve(data as Project[]), 600)
    signal?.addEventListener('abort', () => {
      clearTimeout(t)
      reject(new DOMException('Aborted', 'AbortError'))
    })
  })
}
