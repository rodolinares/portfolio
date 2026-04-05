import { Hero } from '@/components/sections/hero'
import { ProfessionalSummary } from '@/components/sections/summary'
import { Experience } from '@/components/sections/experience'
import { Skills } from '@/components/sections/skills'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ContactSection } from '@/components/sections/contact-section'

export function HomePage() {
  return (
    <>
      <Hero />
      <ProfessionalSummary />
      <Experience />
      <Skills />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
