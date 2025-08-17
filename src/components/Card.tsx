import { ReactNode } from 'react'

export default function Card({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </div>
  )
}
