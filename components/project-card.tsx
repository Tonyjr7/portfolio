import { Github } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SkillBadge from "./skill-badge"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

export default function ProjectCard({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full border-secondary/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-gradient">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <SkillBadge key={tech} name={tech} glow />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" asChild className="border-secondary/30 hover:border-secondary/80">
          <Link href={githubUrl} target="_blank">
            <Github className="mr-2 h-4 w-4" />
            View Code
          </Link>
        </Button>
        {liveUrl && (
          <Button
            size="sm"
            asChild
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            <Link href={liveUrl} target="_blank">
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

