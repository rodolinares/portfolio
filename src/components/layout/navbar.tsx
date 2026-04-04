import { Link } from 'react-router-dom'
import { Container } from './container'

export function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="font-semibold">
            Rodo
          </Link>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition">
              About
            </Link>
            <Link to="/projects" className="hover:text-foreground transition">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-foreground transition">
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}
