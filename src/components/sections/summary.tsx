import { Section } from '@/components/shared/section'

export function ProfessionalSummary() {
  return (
    <Section className="pb-15">
      <div className="max-w-3xl space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Professional Summary</h2>

        <p className="text-muted-foreground">
          I am a software engineer with experience building and maintaining production-grade systems
          in environments where code quality, reliability, and long-term evolution are critical.
          Much of my work has been developed under non-disclosure agreements, which limits public
          visibility but reflects exposure to real-world complexity and responsibility.
        </p>

        <p className="text-muted-foreground">
          My focus is on writing clear, maintainable code, designing systems that scale, and making
          pragmatic technical decisions that hold up over time. I am particularly comfortable in
          TypeScript-based stacks and modern frontend architectures.
        </p>
      </div>
    </Section>
  )
}
