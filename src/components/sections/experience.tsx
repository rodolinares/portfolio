import { Section } from '@/components/shared/section'
import { SectionHeader } from '@/components/shared/section-header'
import { experience } from '@/data/experience-data'

const data = experience

export function Experience() {
  return (
    <Section className="pb-16">
      <div className="space-y-10">
        <SectionHeader
          title="Experience"
          description="Professional work focused on building and maintaining production-grade systems."
        />

        <div className="space-y-8">
          {data.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-medium">{item.role}</h3>
                <span className="text-sm text-muted-foreground">{item.period}</span>
              </div>

              <p className="text-sm text-muted-foreground">{item.company}</p>

              {item.description.map((desc, idx) => (
                <p key={idx} className="text-sm text-muted-foreground">
                  {desc}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
