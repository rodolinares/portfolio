import { NavLink } from 'react-router-dom'
import { Container } from './container'

export function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="font-semibold">
            Rodrigo Linares
          </NavLink>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-foreground font-medium' : 'hover:text-foreground transition'
              }
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'text-foreground font-medium' : 'hover:text-foreground transition'
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-foreground font-medium' : 'hover:text-foreground transition'
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  )
}
