import { Section } from '@/components/shared/section'
import { SectionHeader } from '@/components/shared/section-header'

type SkillGroup = {
  title: string
  items: string[]
}

const skills: SkillGroup[] = [
  {
    title: 'Core',
    items: ['TypeScript', 'JavaScript', 'React']
  },
  {
    title: 'Frontend',
    items: ['Tailwind CSS', 'HTML', 'CSS']
  },
  {
    title: 'Tools & Practices',
    items: ['Git', 'REST APIs', 'Testing']
  }
]

export function Skills() {
  return (
    <Section className="pb-15">
      <div className="space-y-10">
        <SectionHeader
          title="Skills"
          description="Technologies and practices I use to build and maintain software."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(group => (
            <div key={group.title} className="space-y-3">
              <h3 className="font-medium">{group.title}</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {group.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
