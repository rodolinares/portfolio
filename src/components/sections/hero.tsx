import { Section } from '@/components/shared/section'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <Section className="pt-16 pb-15">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm text-muted-foreground">Software Engineer</p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          I build reliable, scalable applications with a focus on clean architecture and long-term
          maintainability.
        </h1>

        <p className="text-lg text-muted-foreground">
          Experienced in TypeScript, React, and modern frontend ecosystems, with a professional
          background in delivering production systems under strict constraints and long-term
          ownership.
        </p>

        <div className="flex items-center gap-4 pt-4">
          <Button>
            <Link to="/contact">Get in touch</Link>
          </Button>

          <Button variant="outline">
            <Link to="/projects">View projects</Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
