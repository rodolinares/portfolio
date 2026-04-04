import { Container } from '@/components/layout/container'

type SectionProps = {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={className ?? 'py-16'}>
      <Container>{children}</Container>
    </section>
  )
}
