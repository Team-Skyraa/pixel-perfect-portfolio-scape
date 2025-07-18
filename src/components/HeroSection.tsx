import { Button } from "@/components/ui/button";
import Scene3D from "./Scene3D";
export default function HeroSection() {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
            Mohit
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Ranjan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-Stack Developer expert in Java Spring Boot, MERN Stack, and React Native. 
            Experience in REST API development, DBMS, and DevOps.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Floating tech icons */}
        <div className="absolute top-20 left-10 animate-float">
          
        </div>
        
        
        
        
        
        <div className="absolute bottom-20 right-10 animate-float" style={{
        animationDelay: '3s'
      }}>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      
    </section>;
}