import { Section } from '@/components/shared/section'
import { SectionHeader } from '@/components/shared/section-header'

export function WorkApproach() {
  return (
    <Section className="pb-16">
      <div className="space-y-10">
        <SectionHeader title="How I Work" />

        <div className="space-y-4 text-muted-foreground">
          <p>
            Engineering decisions are driven by clarity, constraints, and long-term impact rather
            than short-term convenience. Systems are designed with the expectation that they will
            evolve, which places emphasis on structure, readability, and consistency.
          </p>

          <p>
            Preference is given to explicit solutions over clever abstractions. Code that is easy to
            understand and modify tends to scale better across time and teams than code optimized
            for brevity or novelty.
          </p>

          <p>
            Understanding the problem space is prioritized before committing to implementation.
            Technical choices are evaluated in the context of real constraints (existing systems,
            team dynamics, and product requirements) rather than in isolation.
          </p>

          <p>
            Changes to existing systems are approached incrementally. Refactoring and improvement
            are favored over large rewrites, reducing risk while maintaining forward progress.
          </p>
        </div>
      </div>
    </Section>
  )
}
