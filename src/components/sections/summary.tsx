import { Section } from '@/components/shared/section'

export function ProfessionalSummary() {
  return (
    <Section className="pb-16">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Professional Summary</h2>

        <p className="text-muted-foreground">
          Software Engineer with over 8 years of experience developing and maintaining production
          web applications, primarily in TypeScript-based ecosystems. I have worked across fintech,
          retail, and startup environments, contributing to systems that require reliability,
          scalability, and continuous evolution.
        </p>

        <p className="text-muted-foreground">
          Much of my work has been developed under non-disclosure agreements, but it includes
          payment platforms, microservices architectures, and complex frontend applications with
          state management and real-time interactions. I focus on building systems that remain
          maintainable over time and can adapt to changing requirements without unnecessary
          complexity.
        </p>
      </div>
    </Section>
  )
}
