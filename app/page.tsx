"use client";
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ExperienceItem from "@/components/experience-item"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"


export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Anthony Triumph
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} variant="ghost" size="icon">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Tonyjr7" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/anthonytriumph" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="py-20 md:py-32 bg-tech-pattern gradient-bg">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-sm opacity-70"></div>
                  <img
                    src="Anthony Triumph.png"
                    alt="Profile Picture"
                    className="relative w-full h-full object-cover rounded-full border-2 border-primary/30 p-1"
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Backend Engineer
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Building robust, scalable systems and APIs that power modern applications
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  <Link href="#contact">Get in touch</Link>
                </Button>
                <Button variant="outline" asChild className="border-secondary/30 hover:border-secondary/80">
                  <Link href="#projects">View projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="JavaScript" glow />
                  <SkillBadge name="TypeScript" glow />
                  <SkillBadge name="Python" glow />
                  <SkillBadge name="Go" glow />
                  <SkillBadge name="SQL" glow />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Djano Rest Framwork" glow />
                  <SkillBadge name="Django" glow />
                  <SkillBadge name="FastAPI" glow />
                  <SkillBadge name="Docker" glow />
                  <SkillBadge name="Kubernetes" glow />
                  <SkillBadge name="Git" glow />
                  <SkillBadge name="Github Actions" glow />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Databases & Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="PostgreSQL" glow />
                  <SkillBadge name="SQLite" glow />
                  <SkillBadge name="Redis" glow />
                  <SkillBadge name="AWS" glow />
                  <SkillBadge name="GCP" glow />
                  <SkillBadge name="CI/CD" glow />
                  <SkillBadge name="Terraform" glow />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-tech-pattern gradient-bg">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="AWS Spend Monitor"
                description="AWS Spend Monitor is a tool for tracking and analyzing AWS spending, providing insights into cost trends on Telex and optimization opportunities."
                technologies={["Python", "FastAPI", "IAM Policy", "Telex.im", "AWS"]}
                githubUrl="https://github.com/Tonyjr7/aws-spend-monitor"
              />
              <ProjectCard
                title="Outbound AI"
                description="AI call campaign for businesses."
                technologies={["Python", "FastAPI", "AWS S3", "Redshift", "Grafana"]}
                githubUrl="https://github.com/Tonyjr7/Outbound-AI-Backend"
              />
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Work Experience
            </h2>
            <div className="max-w-3xl mx-auto space-y-10">
              <ExperienceItem
                title="Backend Engineer Intern"
                company="HNG"
                period="2024 - Present"
                description="As a Backend Engineer Intern at HNG, I contributed to building and optimizing backend systems, improving performance, and ensuring seamless API integrations."
                technologies={["FastAPI", "Python", "PostgreSQL", "Docker", "AWS"]}
              />
              <ExperienceItem
                title="Backend Developer Freelancer"
                company="Data Systems LLC"
                period="2023 - Present"
                description="Designed and implemented RESTful APIs serving 5M+ requests daily. Optimized database queries resulting in 40% performance improvement."
                technologies={["Python", "Django", "PostgreSQL", "Redis", "AWS"]}
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-tech-pattern gradient-bg">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Get In Touch
            </h2>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col gap-6 items-center text-center">
                <p className="text-muted-foreground">
                  I'm currently open to new opportunities and collaborations. Feel free to reach out!
                </p>
                <div className="flex gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  >
                    <Link href="mailto:anthony.triumph.dev@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="border-secondary/30 hover:border-secondary/80">
                    <Link href="https://www.linkedin.com/in/anthonytriumph" target="_blank">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/40 py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Anthony Triumph. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Tonyjr7" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/anthonytriumph" target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:anthony.triumph.dev@gmail.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

