import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

const active =
  'text-indigo-600 underline underline-offset-8 decoration-2'
const base =
  'text-gray-600 hover:text-indigo-600 transition-colors'

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-8 w-8" />
          <span className="font-bold">Ajay Frontend</span>
        </Link>
        <nav className="flex gap-6">
          <NavLink to="/" className={({isActive}) => isActive ? active : base}>Home</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? active : base}>Projects</NavLink>
          <NavLink to="/skills" className={({isActive}) => isActive ? active : base}>Skills</NavLink>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? active : base}>Dashboard</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? active : base}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
