import { Section } from '@/components/shared/section'
import { SectionHeader } from '@/components/shared/section-header'

type Props = {
  className?: string
}

export function AboutSection({ className }: Props) {
  return (
    <Section className={className || 'pb-16'}>
      <div className="space-y-10">
        <SectionHeader
          title="About"
          description="A more complete view of my background, approach, and work style."
        />

        <div className="space-y-6 text-muted-foreground">
          <p>
            I'm a Software engineer with over 8 years of experience working primarily with TypeScript,
            Angular, and Node.js. Career development has taken place across fintech, retail, and
            startup environments, contributing to both frontend and backend systems.
          </p>

          <p>
            My work has included payment platforms, microservices architectures, and large-scale
            frontend applications, often in contexts where stability, consistency, and performance
            are critical. These systems required balancing delivery speed with long-term
            maintainability.
          </p>

          <p>
            A significant portion of this experience has been developed under non-disclosure
            agreements, limiting public visibility while still involving production systems that are
            actively used and continuously evolving.
          </p>
        </div>
      </div>
    </Section>
  )
}
