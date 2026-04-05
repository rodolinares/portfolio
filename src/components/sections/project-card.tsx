import type { ProjectItem } from '@/types/project-item'
import { Button } from '@/components/ui/button'

type ProjectCardProps = {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-xl border p-6 space-y-4">
      <h3 className="font-medium">{project.title}</h3>

      <p className="text-sm text-muted-foreground">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 rounded-md bg-muted">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-2">
        {project.link && (
          <Button size="sm">
            <a href={project.link} target="_blank">
              Live
            </a>
          </Button>
        )}

        {project.repo && (
          <Button size="sm" variant="outline">
            <a href={project.repo} target="_blank">
              Code
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}
