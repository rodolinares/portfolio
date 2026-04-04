type SectionHeaderProps = {
  title: string
  description?: string
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl space-y-2">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  )
}
