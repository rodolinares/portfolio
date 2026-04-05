import { Container } from './container'

export function Footer() {
  return (
    <footer className="border-t mt-16">
      <Container>
        <div className="flex h-16 items-center justify-between text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Rodrigo Linares</span>
          <span>Built with React, TypeScript, Tailwind and shadcn/ui</span>
        </div>
      </Container>
    </footer>
  )
}
