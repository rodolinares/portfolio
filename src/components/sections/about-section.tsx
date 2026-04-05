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
            I am a software engineer focused on building systems that remain maintainable and
            reliable over time. My work has largely taken place in professional environments where
            long-term ownership, stability, and clarity of code are more important than short-term
            output.
          </p>

          <p>
            A significant portion of my experience comes from projects under non-disclosure
            agreements. While that limits what I can show publicly, it reflects exposure to real
            production constraints, evolving requirements, and systems that cannot afford failure.
          </p>

          <p>
            I tend to favor simple, well-structured solutions over clever abstractions. I value
            readability, explicitness, and consistency, especially in collaborative environments
            where code must be understood and maintained by others over time.
          </p>
        </div>
      </div>
    </Section>
  )
}
