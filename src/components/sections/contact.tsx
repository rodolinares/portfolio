import { Section } from '@/components/shared/section'
import { SectionHeader } from '@/components/shared/section-header'
import { Button } from '@/components/ui/button'
import { contact } from '@/data/contact'

type ContactProps = {
  className?: string
}

export function Contact({ className }: ContactProps) {
  return (
    <Section className={className || 'pb-16'}>
      <div className="space-y-10">
        <SectionHeader
          title="Contact"
          description="If you want to discuss opportunities or collaborate, reach out."
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </Button>

          <Button variant="outline">
            <a href={contact.linkedin} target="_blank">
              LinkedIn
            </a>
          </Button>

          <Button variant="outline">
            <a href={contact.github} target="_blank">
              GitHub
            </a>
          </Button>

          <Button variant="ghost">
            <a href={contact.resume} target="_blank">
              Resume
            </a>
          </Button>
        </div>
      </div>
    </Section>
  )
}
