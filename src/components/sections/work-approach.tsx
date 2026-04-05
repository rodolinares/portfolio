import { Section } from '@/components/shared/section'
import { SectionHeader } from '@/components/shared/section-header'

export function WorkApproach() {
  return (
    <Section className="pb-16">
      <div className="space-y-10">
        <SectionHeader title="How I Work" />

        <div className="space-y-4 text-muted-foreground">
          <p>
            I work primarily on production systems that require stability, consistency, and
            long-term maintainability. I prioritize clarity in code structure and avoid unnecessary
            abstraction, especially in large or evolving codebases.
          </p>

          <p>
            I am comfortable working within established systems, improving them incrementally rather
            than rewriting them. Much of my experience involves maintaining and extending
            applications that are already in use, where reliability and continuity are critical.
          </p>

          <p>
            I focus on making systems easier to reason about over time—through better structure,
            clearer boundaries, and predictable behavior. This is particularly important in frontend
            applications with complex state management and backend systems with multiple
            integrations.
          </p>

          <p>
            I also have experience working in distributed teams and remote environments, where clear
            communication and alignment are necessary to maintain development velocity and code
            quality.
          </p>
        </div>
      </div>
    </Section>
  )
}
