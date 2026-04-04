import { Hero } from '@/components/sections/hero'
import { ProfessionalSummary } from '@/components/sections/summary'
import { Experience } from '@/components/sections/experience'
import { Skills } from '@/components/sections/skills'

export function HomePage() {
  return (
    <>
      <Hero />
      <ProfessionalSummary />
      <Experience />
      <Skills />
    </>
  )
}
