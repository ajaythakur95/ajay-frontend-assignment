export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-6 text-sm text-gray-500 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
        <p>© {new Date().getFullYear()} Ajay Chauhan. All rights reserved.</p>
        <p className="opacity-80">Built with React, Vite, Tailwind.</p>
      </div>
    </footer>
  )
}
