import { useState } from 'react'
import Card from '../components/Card'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section className="max-w-xl">
      <Card title="Contact">
        {!sent ? (
          <form
            className="grid gap-3"
            onSubmit={(e) => { e.preventDefault(); setSent(true) }}
          >
            <input className="border rounded-xl px-3 py-2" placeholder="Your name" required />
            <input className="border rounded-xl px-3 py-2" type="email" placeholder="Email" required />
            <textarea className="border rounded-xl px-3 py-2" placeholder="Message" rows={4} required />
            <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white">Send</button>
          </form>
        ) : (
          <p className="text-green-600">Thanks! I'll get back to you soon.</p>
        )}
      </Card>
    </section>
  )
}
