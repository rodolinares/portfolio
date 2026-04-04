import { Container } from './container'

export function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="font-semibold">Rodo</div>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition">
              About
            </a>
            <a href="#" className="hover:text-foreground transition">
              Projects
            </a>
            <a href="#" className="hover:text-foreground transition">
              Contact
            </a>
          </nav>
        </div>
      </Container>
    </header>
  )
}
