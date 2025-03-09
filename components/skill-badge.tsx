interface SkillBadgeProps {
  name: string
  glow?: boolean
}

export default function SkillBadge({ name, glow = false }: SkillBadgeProps) {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
        glow ? "border-primary/50 bg-primary/10 text-primary shadow-[0_0_10px_rgba(var(--primary),0.2)]" : ""
      }`}
    >
      {name}
    </div>
  )
}

