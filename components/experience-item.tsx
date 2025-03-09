import SkillBadge from "./skill-badge"

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export default function ExperienceItem({ title, company, period, description, technologies }: ExperienceItemProps) {
  return (
    <div className="border-l-4 border-primary/70 pl-6 relative">
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-1 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
      <div className="mb-2">
        <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {title}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-muted-foreground">
          <span>{company}</span>
          <span className="hidden sm:inline">•</span>
          <span>{period}</span>
        </div>
      </div>
      <p className="my-4">{description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {technologies.map((tech) => (
          <SkillBadge key={tech} name={tech} glow />
        ))}
      </div>
    </div>
  )
}

