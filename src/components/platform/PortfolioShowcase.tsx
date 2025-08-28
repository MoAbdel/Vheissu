import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Camera, DollarSign, TrendingUp, Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const portfolioProjects = [
  {
    id: "mortgage",
    industry: "Mortgage & Finance",
    client: "MoTheBroker",
    challenge: "Complex mortgage process simplified for first-time buyers",
    solution: "Local SEO domination + conversion-focused design",
    specialization: "Financial Trust Signals",
    results: "300% increase in qualified leads",
    color: "from-blue-600 to-indigo-700",
    icon: <DollarSign className="w-8 h-8" />,
    features: ["Local SEO optimization", "Mortgage calculator integration", "Compliance-focused design", "Lead capture optimization"],
    location: "Orange County, CA",
    description: "Transformed complex mortgage services into an approachable, trust-building experience that converts visitors into qualified leads."
  },
  {
    id: "photography",
    industry: "Creative Services", 
    client: "Professional Photography",
    challenge: "Portfolio showcase that converts browsers to bookings",
    solution: "Visual storytelling + booking optimization",
    specialization: "Portfolio Conversion",
    results: "250% booking increase",
    color: "from-purple-600 to-pink-600",
    icon: <Camera className="w-8 h-8" />,
    features: ["Portfolio optimization", "Booking system integration", "Mobile-first galleries", "Social proof amplification"],
    location: "Los Angeles, CA",
    description: "Created a stunning visual experience that showcases artistic work while driving consistent booking inquiries from ideal clients."
  },
  {
    id: "debt-settlement",
    industry: "Financial Services",
    client: "Debt Resolution Firm", 
    challenge: "Sensitive topic requiring maximum trust and discretion",
    solution: "Authority positioning + privacy-focused design",
    specialization: "Problem-Solution Marketing",
    results: "400% consultation requests",
    color: "from-emerald-600 to-teal-700",
    icon: <Award className="w-8 h-8" />,
    features: ["Trust signal optimization", "Discreet contact methods", "Educational content strategy", "Compliance integration"],
    location: "Nationwide",
    description: "Built credibility and trust for sensitive financial services while maintaining client privacy and regulatory compliance."
  },
  {
    id: "seo-tool",
    industry: "SEO & Marketing Tools",
    client: "SEO Analytics Platform",
    challenge: "Technical product requiring educational marketing approach", 
    solution: "Feature demonstration + conversion funnel optimization",
    specialization: "SaaS Product Marketing",
    results: "450% trial signups",
    color: "from-indigo-600 to-purple-600",
    icon: <TrendingUp className="w-8 h-8" />,
    features: ["Product demo integration", "Educational content strategy", "Trial conversion optimization", "Technical SEO implementation"],
    location: "Global SaaS",
    description: "Transformed complex SEO tool into an accessible platform with educational content that converts visitors into paying subscribers."
  }
]

export function PortfolioShowcase() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="portfolio" className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="text-primary font-mono text-sm tracking-widest uppercase bg-primary/10 px-4 py-2 rounded-full">
                PROVEN RESULTS
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
              <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                Real Success Stories
              </span>
              <br />
              <span className="text-muted-foreground text-2xl md:text-4xl">
                Across Every Industry
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These 4 examples showcase our approach across completely different markets. 
              <strong className="text-foreground"> Your industry is next.</strong> We create custom-optimized websites 
              with industry-specific SEO, local dominance strategies, and conversion psychology.
            </p>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color.replace('600', '600/5').replace('700', '700/5')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.industry}
                          </h3>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {project.location}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-mono tracking-wider text-muted-foreground uppercase">Challenge</span>
                        <p className="text-sm text-foreground mt-1">{project.challenge}</p>
                      </div>
                      <div>
                        <span className="text-xs font-mono tracking-wider text-muted-foreground uppercase">Our Solution</span>
                        <p className="text-sm text-foreground mt-1">{project.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-muted/30 rounded-lg p-4 border border-primary/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-mono tracking-wider text-muted-foreground uppercase mb-1">
                            Key Result
                          </div>
                          <div className="text-lg font-bold text-primary">
                            {project.results}
                          </div>
                        </div>
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Specialization Tags */}
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-mono tracking-wider text-muted-foreground uppercase">Specialization</span>
                        <div className="mt-2">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white`}>
                            {project.specialization}
                          </span>
                        </div>
                      </div>

                      {/* Expanded Features on Hover */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: hoveredProject === project.id ? 1 : 0,
                          height: hoveredProject === project.id ? 'auto' : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 space-y-2">
                          <span className="text-xs font-mono tracking-wider text-muted-foreground uppercase">Custom Optimizations</span>
                          <div className="grid grid-cols-2 gap-2">
                            {project.features.map((feature, idx) => (
                              <div key={idx} className="text-xs text-muted-foreground flex items-center">
                                <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          <div className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Your Industry Could Be Next
                  </span>
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  These are just <strong>4 examples</strong> from our portfolio. We work across <strong>every industry</strong> 
                  with custom SEO strategies, local market domination, and conversion-focused design 
                  tailored to your specific business challenges.
                </p>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground font-mono tracking-wider">INDUSTRIES SERVED</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">300%</div>
                  <div className="text-sm text-muted-foreground font-mono tracking-wider">AVERAGE GROWTH</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground font-mono tracking-wider">ONGOING SUPPORT</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  size="lg" 
                  className="px-12 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-lg font-semibold relative group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Schedule Strategy Call
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Limited availability.</strong> Only 3 new clients per month.
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    ⭐ ⭐ ⭐ ⭐ ⭐ <span className="ml-1">5.0 rating • 47 reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}