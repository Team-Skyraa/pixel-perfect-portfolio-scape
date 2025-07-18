import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Workie - Employee Management System",
    description: "A comprehensive Spring Boot API for employee management with CRUD operations, data validation, and optimized performance achieving sub-200ms response times.",
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "H2 Database", "Maven"],
    features: ["Complete CRUD operations for employee data", "Data validation with H2 database", "Code reliability via JUnit and Mockito", "45% improvement in data processing efficiency"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Market Maven - AI Trading Platform",
    description: "An AI-powered trading platform for market forecasting and currency conversion using advanced machine learning models and time series analysis.",
    technologies: ["Java", "Spring Boot", "Python", "ARIMA", "SVR", "RNNs"],
    features: ["85% accuracy in price forecasting", "Multiple ML models (ARIMA, SVR, RNNs)", "Time Series Analysis and Deep Learning", "Real-time currency conversion"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Client/Partner React Applications",
    description: "Engineered React applications with unified database and admin panel, optimized for performance with Docker/Kubernetes deployment.",
    technologies: ["React", "PostgreSQL", "Docker", "Kubernetes", "CI/CD"],
    features: ["60% faster PostgreSQL query responses", "99.8% deployment success rate", "70% reduction in deployment time", "Automated CI/CD pipeline"],
    githubUrl: "#",
    liveUrl: "#"
  }
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <Card 
      className="glass-effect overflow-hidden group hover:shadow-glow transition-all duration-500 transform hover:scale-105"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="p-6">
        <div className="h-48 bg-gradient-secondary rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-20 transform rotate-12 scale-150 group-hover:rotate-0 group-hover:scale-100 transition-all duration-500"></div>
          <span className="text-4xl relative z-10">💻</span>
        </div>
        
        <h3 className="text-2xl font-semibold mb-3 text-primary group-hover:glow-text transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-primary">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((feature) => (
              <li key={feature} className="text-sm text-muted-foreground flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            size="sm"
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            GitHub
          </Button>
          <Button 
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300"
          >
            Live Demo
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
          Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A showcase of my recent work and personal projects demonstrating various technical skills
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button 
          size="lg"
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
        >
          View All Projects
        </Button>
      </div>
    </section>
  )
}