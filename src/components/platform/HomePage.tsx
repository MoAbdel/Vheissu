import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Zap, Globe, Palette, Code2, Users, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div 
            className="absolute top-20 left-10 md:left-20 w-40 md:w-60 h-40 md:h-60 rounded-full bg-primary/30 blur-3xl animate-parallax-float" 
            style={{ transform: `translateY(-${scrollY * 0.05}px)` }}
          />
          <div 
            className="absolute bottom-20 right-10 md:right-20 w-60 md:w-80 h-60 md:h-80 rounded-full bg-secondary/20 blur-3xl" 
            style={{ transform: `translateY(-${scrollY * 0.08}px)` }}
          />
        </div>
        
        <div 
          style={{ transform: `translateY(${scrollY * 0.08}px)` }} 
          className="container mx-auto relative z-10 text-center"
        >
          {/* Brand identity */}
          <div className="mb-8">
            <p className="glitch-intense mb-6 bg-clip-text font-mono text-sm tracking-wider md:text-base uppercase" data-text="MULTI-INDUSTRY • PLATFORM • REPLICATION • SYSTEM">
              MULTI-INDUSTRY • PLATFORM • REPLICATION • SYSTEM
            </p>
          </div>

          {/* Main headline */}
          <div className="space-y-8 max-w-4xl mx-auto mb-12">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-sm">
              <div className="text-primary/90 font-mono text-sm md:text-base tracking-widest">[ SYSTEM INITIALIZED ]</div>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono text-foreground/90 tracking-tight">
                <span className="block">VHEISSU</span>
                <span className="block mt-2 text-2xl md:text-4xl lg:text-5xl text-gradient-primary">Next-Gen Website Platform</span>
              </h1>
            
              <div className="space-y-3 text-lg md:text-xl text-muted-foreground/80 font-sans leading-relaxed max-w-3xl mx-auto">
                <p>Replicate perfect website optimization across any industry</p>
                <p>cyberpunk aesthetics // advanced SEO // multi-tenant architecture</p>
              </div>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button size="lg" className="px-8 relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary transition-all duration-300 glow-primary">
              <span className="relative z-10">Initialize Platform</span>
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-2 hover:bg-primary/10 border-primary/50">
              View Demo Sites
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-8 text-xs md:text-sm tracking-wider text-muted-foreground/60 uppercase font-mono">
            <span className="hover:text-primary transition-colors cursor-default flex items-center gap-2">
              <Zap className="w-4 h-4" /> Lightning Fast
            </span>
            <span className="hover:text-primary transition-colors cursor-default flex items-center gap-2">
              <Globe className="w-4 h-4" /> Multi-Industry
            </span>
            <span className="hover:text-primary transition-colors cursor-default flex items-center gap-2">
              <Code2 className="w-4 h-4" /> SEO Optimized
            </span>
            <span className="hover:text-primary transition-colors cursor-default flex items-center gap-2">
              <Users className="w-4 h-4" /> Multi-Tenant
            </span>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <a href="#features" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground/60 hover:text-foreground transition-colors group">
          <span className="text-xs tracking-wider mb-2 font-mono uppercase">Explore Platform</span>
          <ArrowDown className="h-4 w-4 animate-bounce group-hover:translate-y-1 transition-transform" />
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Platform Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to replicate website success across any industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="w-8 h-8 text-primary" />,
                title: "Cyberpunk Design System",
                description: "Beautiful, modern interface with dark/light themes and advanced animations"
              },
              {
                icon: <Globe className="w-8 h-8 text-secondary" />,
                title: "Multi-Industry Support",
                description: "Adaptable components and layouts for any business vertical"
              },
              {
                icon: <Rocket className="w-8 h-8 text-accent" />,
                title: "Advanced SEO",
                description: "Built-in optimization for search engines and AI platforms"
              },
              {
                icon: <Code2 className="w-8 h-8 text-primary" />,
                title: "Modern Tech Stack",
                description: "React 18, TypeScript, Tailwind CSS, Framer Motion"
              },
              {
                icon: <Users className="w-8 h-8 text-secondary" />,
                title: "Multi-Tenant Ready",
                description: "Deploy for multiple clients with isolated configurations"
              },
              {
                icon: <Zap className="w-8 h-8 text-accent" />,
                title: "Lightning Performance",
                description: "Optimized for speed with lazy loading and code splitting"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:border-primary/50 transition-all duration-300 group hover:glow-primary">
                  <CardHeader>
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Ready to Build the Future?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start replicating website success across industries with Vheissu's advanced platform
          </p>
          <Button size="lg" className="px-12 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark glow-primary text-lg">
            Initialize Your Platform
          </Button>
        </div>
      </section>
    </main>
  )
}