import { Section } from '@/components/shared/section'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <Section className="py-16">
      <div className="space-y-6">
        <p className="text-sm text-muted-foreground">Software Engineer</p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          I build scalable, production-grade web applications with a focus on reliability and
          long-term maintainability.
        </h1>

        <p className="text-lg text-muted-foreground">
          Experience across fintech, retail, and startup environments, contributing to systems that
          operate under real-world constraints and require continuous evolution.
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
