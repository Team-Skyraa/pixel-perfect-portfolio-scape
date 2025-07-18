import { Card } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
          About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Full-Stack Developer expert in Java Spring Boot, MERN Stack, and React Native. 
          Passionate about building scalable applications that solve real-world problems.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Card className="glass-effect p-6 hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Frontend Development</h3>
            <p className="text-muted-foreground">
              Expert in React Native, React.js, Redux.js, and Tailwind CSS. 
              I create responsive, accessible mobile and web applications.
            </p>
          </Card>
          
          <Card className="glass-effect p-6 hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Backend Development</h3>
            <p className="text-muted-foreground">
              Proficient in Java Spring Boot, Node.js, Express.js, and REST API development. 
              Experience with multiple databases including PostgreSQL, MongoDB, and MySQL.
            </p>
          </Card>
          
          <Card className="glass-effect p-6 hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-primary">DevOps & Cloud</h3>
            <p className="text-muted-foreground">
              Experience with Docker, Kubernetes, Jenkins, and AWS services. 
              Expertise in CI/CD pipelines and Infrastructure as Code with Terraform.
            </p>
          </Card>
        </div>
        
        <div className="relative">
          <div className="w-full h-96 bg-gradient-secondary rounded-2xl p-8 flex items-center justify-center perspective-1000">
            <div className="transform-3d animate-rotate-3d">
              <div className="w-48 h-48 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow overflow-hidden">
                <img 
                  src="/lovable-uploads/f6be2257-a2b3-49f5-b896-7380f8af71c0.png" 
                  alt="Mohit Ranjan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Floating skill badges */}
          <div className="absolute -top-4 -left-4 animate-float">
            <div className="px-4 py-2 bg-card glass-effect rounded-full text-sm font-medium">
              Java
            </div>
          </div>
          
          <div className="absolute top-10 -right-6 animate-float" style={{ animationDelay: '1s' }}>
            <div className="px-4 py-2 bg-card glass-effect rounded-full text-sm font-medium">
              Spring Boot
            </div>
          </div>
          
          <div className="absolute -bottom-4 left-10 animate-float" style={{ animationDelay: '2s' }}>
            <div className="px-4 py-2 bg-card glass-effect rounded-full text-sm font-medium">
              React Native
            </div>
          </div>
          
          <div className="absolute bottom-20 -right-8 animate-float" style={{ animationDelay: '3s' }}>
            <div className="px-4 py-2 bg-card glass-effect rounded-full text-sm font-medium">
              AWS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}