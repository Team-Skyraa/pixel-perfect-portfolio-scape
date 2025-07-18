import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
          Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Let's discuss your next project or explore collaboration opportunities
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="glass-effect p-6 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xl">📧</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Email</h3>
                <p className="text-muted-foreground">your.email@example.com</p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-effect p-6 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xl">💼</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary">LinkedIn</h3>
                <p className="text-muted-foreground">linkedin.com/in/yourprofile</p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-effect p-6 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xl">💻</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary">GitHub</h3>
                <p className="text-muted-foreground">github.com/yourusername</p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-effect p-6 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xl">📱</span>
              </div>
              <div>
                <h3 className="font-semibold text-primary">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Contact Form */}
        <Card className="glass-effect p-6">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-primary">Name</label>
              <Input 
                placeholder="Your name"
                className="bg-secondary border-border focus:border-primary focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-primary">Email</label>
              <Input 
                type="email"
                placeholder="your.email@example.com"
                className="bg-secondary border-border focus:border-primary focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-primary">Subject</label>
              <Input 
                placeholder="Project inquiry"
                className="bg-secondary border-border focus:border-primary focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-primary">Message</label>
              <Textarea 
                placeholder="Tell me about your project..."
                rows={4}
                className="bg-secondary border-border focus:border-primary focus:ring-primary resize-none"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
              size="lg"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
      
      {/* Floating elements */}
      <div className="relative mt-16">
        <div className="absolute top-0 left-10 animate-float opacity-30">
          <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
        </div>
        
        <div className="absolute top-10 right-20 animate-float opacity-30" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-gradient-primary rounded-lg"></div>
        </div>
        
        <div className="absolute -bottom-5 left-1/3 animate-float opacity-30" style={{ animationDelay: '2s' }}>
          <div className="w-10 h-10 bg-gradient-primary rounded-full"></div>
        </div>
      </div>
    </section>
  )
}