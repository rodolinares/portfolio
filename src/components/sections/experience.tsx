import { Section } from '@/components/shared/section'
import { SectionHeader } from '@/components/shared/section-header'

type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
}

const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'Confidential (NDA)',
    period: '20XX — Present',
    description:
      'Worked on production systems with a focus on reliability, maintainability, and long-term scalability. Contributed to architecture decisions and ongoing system evolution under real-world constraints.'
  }
]

export function Experience() {
  return (
    <Section className="pb-15">
      <div className="space-y-10">
        <SectionHeader
          title="Experience"
          description="Professional work focused on building and maintaining production-grade systems."
        />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-medium">{item.role}</h3>
                <span className="text-sm text-muted-foreground">{item.period}</span>
              </div>

              <p className="text-sm text-muted-foreground">{item.company}</p>

              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
