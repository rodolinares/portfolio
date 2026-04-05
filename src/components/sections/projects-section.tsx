import { Section } from '@/components/shared/section'
import { SectionHeader } from '@/components/shared/section-header'
import { projects } from '@/data/projects-data'
import { ProjectCard } from './project-card'
import { ProjectsEmpty } from './projects-empty'

type Props = {
  className?: string
}

export function ProjectsSection({ className }: Props) {
  return (
    <Section className={className || 'pb-16'}>
      <div className="space-y-10">
        <SectionHeader title="Projects" description="Selected work and case studies." />

        {projects.length === 0 ? (
          <ProjectsEmpty />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
