import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Zap, Globe, Palette, Code2, Users, Rocket, TrendingUp, Target, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IndustryConfigurator } from "./IndustryConfigurator"

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
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">VHEISSU</span>
                <span className="block mt-2 text-2xl md:text-4xl lg:text-5xl text-muted-foreground">Multi-Industry Replication Platform</span>
              </h1>
            
              <div className="space-y-3 text-lg md:text-xl text-muted-foreground/80 font-sans leading-relaxed max-w-3xl mx-auto">
                <p>Transform your business success across unlimited industries with intelligent website replication</p>
                <p className="text-primary font-mono text-sm tracking-wider">[ ELECTRIC_BLUE • WARM_GOLD • DEEP_CRIMSON ]</p>
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

      {/* Features Section - Asymmetric Layout */}
      <section id="features" className="py-20 px-4 relative overflow-hidden">
        {/* Diagonal background element */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 transform -skew-y-2 scale-110"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            {/* Left side - Title */}
            <div className="lg:col-span-5">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-secondary font-mono text-sm tracking-widest uppercase">[ CORE_FEATURES ]</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Industry
                  <br />
                  <span className="text-secondary">Agnostic</span>
                  <br />
                  Platform
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Revolutionary technology that adapts and replicates successful website patterns across any business vertical.
                </p>
              </div>
            </div>
            
            {/* Right side - Key stats */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform"></div>
                  <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
                    <TrendingUp className="w-8 h-8 text-primary mb-3" />
                    <div className="text-3xl font-bold text-primary">300%</div>
                    <div className="text-sm text-muted-foreground font-mono tracking-wider">FASTER_DEPLOYMENT</div>
                  </div>
                </div>
                <div className="relative group mt-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform"></div>
                  <div className="relative bg-card/80 backdrop-blur-sm border border-secondary/20 rounded-lg p-6">
                    <Target className="w-8 h-8 text-secondary mb-3" />
                    <div className="text-3xl font-bold text-secondary">15+</div>
                    <div className="text-sm text-muted-foreground font-mono tracking-wider">INDUSTRIES_SUPPORTED</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-lg transform rotate-2 group-hover:rotate-3 transition-transform"></div>
                  <div className="relative bg-card/80 backdrop-blur-sm border border-accent/20 rounded-lg p-6">
                    <Settings className="w-8 h-8 text-accent mb-3" />
                    <div className="text-3xl font-bold text-accent">∞</div>
                    <div className="text-sm text-muted-foreground font-mono tracking-wider">CUSTOMIZATION_DEPTH</div>
                  </div>
                </div>
                <div className="relative group mt-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform -rotate-2 group-hover:-rotate-3 transition-transform"></div>
                  <div className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
                    <Rocket className="w-8 h-8 text-primary mb-3" />
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI</div>
                    <div className="text-sm text-muted-foreground font-mono tracking-wider">OPTIMIZATION_ENGINE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards - staggered layout */}
          <div className="space-y-12">
            {/* Row 1 - offset right */}
            <div className="flex flex-col lg:flex-row lg:justify-end gap-8 lg:gap-12">
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden group hover:border-primary/50 transition-all duration-500 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                    <CardHeader className="relative z-10">
                      <Palette className="w-8 h-8 text-primary mb-4 group-hover:rotate-12 transition-transform duration-300" />
                      <CardTitle className="text-xl font-mono tracking-wide">Signature Design System</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground">Electric blue, warm gold, and deep crimson palette with advanced typography and geometric patterns</p>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden group hover:border-secondary/50 transition-all duration-500 bg-gradient-to-bl from-card/80 to-card/40 backdrop-blur-sm">
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-secondary/10 rounded-full translate-y-10 -translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                    <CardHeader className="relative z-10">
                      <Globe className="w-8 h-8 text-secondary mb-4 group-hover:rotate-12 transition-transform duration-300" />
                      <CardTitle className="text-xl font-mono tracking-wide">Industry Transformation</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground">Intelligent adaptation engine that transforms successful patterns across unlimited business verticals</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
            
            {/* Row 2 - offset left */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden group hover:border-accent/50 transition-all duration-500 bg-gradient-to-tr from-card/80 to-card/40 backdrop-blur-sm">
                    <div className="absolute top-0 left-0 w-16 h-16 bg-accent/10 transform rotate-45 -translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
                    <CardHeader className="relative z-10">
                      <Rocket className="w-8 h-8 text-accent mb-4 group-hover:rotate-12 transition-transform duration-300" />
                      <CardTitle className="text-xl font-mono tracking-wide">AI-Powered SEO</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground">Advanced optimization algorithms that adapt to search engines and emerging AI discovery platforms</p>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden group hover:border-primary/50 transition-all duration-500 bg-gradient-to-tl from-card/80 to-card/40 backdrop-blur-sm">
                    <div className="absolute bottom-0 right-0 w-24 h-6 bg-primary/10 transform -rotate-12 translate-y-3 translate-x-6 group-hover:scale-150 transition-transform duration-700"></div>
                    <CardHeader className="relative z-10">
                      <Code2 className="w-8 h-8 text-primary mb-4 group-hover:rotate-12 transition-transform duration-300" />
                      <CardTitle className="text-xl font-mono tracking-wide">Future-Proof Stack</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground">Cutting-edge React 18, TypeScript, and performance-optimized architecture with magnetic interactions</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
            
            {/* Row 3 - centered */}
            <div className="flex justify-center">
              <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden group hover:border-secondary/50 transition-all duration-500 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="relative z-10">
                      <Users className="w-8 h-8 text-secondary mb-4 group-hover:rotate-12 transition-transform duration-300" />
                      <CardTitle className="text-xl font-mono tracking-wide">Multi-Tenant Core</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground">Isolated client configurations with shared optimization intelligence and scalable architecture</p>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative overflow-hidden group hover:border-accent/50 transition-all duration-500 bg-gradient-to-bl from-card/80 to-card/40 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-l from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="relative z-10">
                      <Zap className="w-8 h-8 text-accent mb-4 group-hover:rotate-12 transition-transform duration-300" />
                      <CardTitle className="text-xl font-mono tracking-wide">Quantum Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground">Sub-second loading with intelligent caching, progressive enhancement, and predictive prefetching</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Configurator */}
      <IndustryConfigurator />

      {/* CTA Section - Diagonal Design */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Diagonal background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/15 to-accent/20 transform -skew-y-3 scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-accent/10 via-transparent to-primary/10 transform skew-y-2 scale-105"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-accent font-mono text-sm tracking-widest uppercase">[ INITIALIZATION_SEQUENCE ]</span>
                  <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                    Transform Your
                    <br />
                    <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      Digital Empire
                    </span>
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Deploy unlimited website variations across any industry. Leverage AI-powered optimization and multi-tenant architecture to dominate every market vertical.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button size="lg" className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary text-lg font-mono tracking-wider relative group overflow-hidden">
                    <span className="relative z-10">INITIALIZE_PLATFORM</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-4 border-2 border-secondary/50 hover:bg-secondary/10 text-lg font-mono tracking-wider">
                    VIEW_DEMO_MATRIX
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Floating geometric elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-32 h-32 border-2 border-primary/30 transform rotate-45 animate-pulse"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-secondary/30 rounded-full animate-bounce"></div>
                  <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-accent/20 transform -translate-x-1/2 -translate-y-1/2 rotate-12 animate-spin" style={{ animationDuration: '8s' }}></div>
                </div>
                
                {/* Main visual element */}
                <div className="relative bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-mono text-sm">SYSTEM_STATUS</span>
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Industries_Supported</span>
                        <span className="text-secondary font-mono">15+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Performance_Boost</span>
                        <span className="text-accent font-mono">300%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">AI_Optimization</span>
                        <span className="text-primary font-mono">ACTIVE</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="text-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">∞</div>
                        <div className="text-xs text-muted-foreground font-mono mt-1">SCALABILITY_COEFFICIENT</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}