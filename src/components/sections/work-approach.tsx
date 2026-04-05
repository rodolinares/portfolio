import { Section } from '@/components/shared/section'
import { SectionHeader } from '@/components/shared/section-header'

export function WorkApproach() {
  return (
    <Section className="pb-16">
      <div className="space-y-10 max-w-3xl">
        <SectionHeader title="How I Work" />

        <div className="space-y-4 text-muted-foreground">
          <p>
            I approach development with an emphasis on clarity and long-term sustainability. I
            prioritize understanding the problem space before introducing abstractions, and I aim to
            keep systems predictable and easy to reason about.
          </p>

          <p>
            I am comfortable working within existing codebases, improving them incrementally rather
            than rewriting unnecessarily. I focus on reducing complexity, improving structure, and
            making future changes easier.
          </p>

          <p>
            I value explicitness over cleverness. Code should be readable by someone new to the
            project without requiring context that only the original author has.
          </p>

          <p>
            I also prioritize communication and alignment. Good technical decisions are not just
            correct—they are understood and agreed upon by the team working with them.
          </p>
        </div>
      </div>
    </Section>
  )
}
