import { Card } from "@/components/ui/card"

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Three.js", level: 78 }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 82 },
      { name: "REST APIs", level: 92 }
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 85 },
      { name: "Testing", level: 80 }
    ]
  }
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <div 
          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out shadow-glow"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
          Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive overview of my technical expertise and proficiency levels
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <Card 
            key={skillGroup.category}
            className="glass-effect p-6 hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary text-center">
              {skillGroup.category}
            </h3>
            
            <div className="space-y-4">
              {skillGroup.technologies.map((tech) => (
                <SkillBar key={tech.name} name={tech.name} level={tech.level} />
              ))}
            </div>
          </Card>
        ))}
      </div>
      
      {/* 3D floating elements */}
      <div className="relative mt-16">
        <div className="absolute top-0 left-10 animate-float">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center opacity-20">
            <span className="text-2xl">⚛️</span>
          </div>
        </div>
        
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center opacity-20">
            <span className="text-xl">🟢</span>
          </div>
        </div>
        
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center opacity-20">
            <span className="text-xl">🍃</span>
          </div>
        </div>
      </div>
    </section>
  )
}