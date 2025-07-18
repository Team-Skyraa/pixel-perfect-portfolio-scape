import { Card } from "@/components/ui/card"

export default function AboutSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
          About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          I'm a passionate full-stack developer with expertise in modern web technologies. 
          I love building applications that solve real-world problems.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Card className="glass-effect p-6 hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Frontend Development</h3>
            <p className="text-muted-foreground">
              Expert in React, Next.js, TypeScript, and modern CSS frameworks. 
              I create responsive, accessible, and performant user interfaces.
            </p>
          </Card>
          
          <Card className="glass-effect p-6 hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Backend Development</h3>
            <p className="text-muted-foreground">
              Proficient in Node.js, Express, MongoDB, and RESTful API design. 
              I build scalable and secure backend systems.
            </p>
          </Card>
          
          <Card className="glass-effect p-6 hover:shadow-glow transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Full-Stack Integration</h3>
            <p className="text-muted-foreground">
              Seamless integration between frontend and backend systems, 
              ensuring optimal performance and user experience.
            </p>
          </Card>
        </div>
        
        <div className="relative">
          <div className="w-full h-96 bg-gradient-secondary rounded-2xl p-8 flex items-center justify-center perspective-1000">
            <div className="transform-3d animate-rotate-3d">
              <div className="w-32 h-32 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-4xl font-bold text-primary-foreground">💻</span>
              </div>
            </div>
          </div>
          
          {/* Floating skill badges */}
          <div className="absolute -top-4 -left-4 animate-float">
            <div className="px-4 py-2 bg-card glass-effect rounded-full text-sm font-medium">
              React
            </div>
          </div>
          
          <div className="absolute top-10 -right-6 animate-float" style={{ animationDelay: '1s' }}>
            <div className="px-4 py-2 bg-card glass-effect rounded-full text-sm font-medium">
              Node.js
            </div>
          </div>
          
          <div className="absolute -bottom-4 left-10 animate-float" style={{ animationDelay: '2s' }}>
            <div className="px-4 py-2 bg-card glass-effect rounded-full text-sm font-medium">
              MongoDB
            </div>
          </div>
          
          <div className="absolute bottom-20 -right-8 animate-float" style={{ animationDelay: '3s' }}>
            <div className="px-4 py-2 bg-card glass-effect rounded-full text-sm font-medium">
              Express
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}