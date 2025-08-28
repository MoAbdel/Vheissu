import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building, Stethoscope, ShoppingBag, Briefcase, Car, Home, Utensils, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: <Stethoscope className="w-6 h-6" />,
    color: "from-blue-500 to-teal-500",
    description: "Patient-focused design with trust signals and accessibility"
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    description: "Conversion-optimized layouts with seamless checkout flows"
  },
  {
    id: "corporate",
    name: "Corporate",
    icon: <Building className="w-6 h-6" />,
    color: "from-gray-600 to-gray-800",
    description: "Professional aesthetics with authority and credibility"
  },
  {
    id: "legal",
    name: "Legal Services",
    icon: <Briefcase className="w-6 h-6" />,
    color: "from-amber-600 to-orange-600",
    description: "Trust-building design with clear call-to-actions"
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: <Car className="w-6 h-6" />,
    color: "from-red-500 to-rose-600",
    description: "Dynamic visuals with performance-focused messaging"
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: <Home className="w-6 h-6" />,
    color: "from-green-500 to-emerald-600",
    description: "Property showcases with local market optimization"
  },
  {
    id: "restaurant",
    name: "Restaurant",
    icon: <Utensils className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
    description: "Appetite-driven design with online ordering integration"
  },
  {
    id: "education",
    name: "Education",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-600",
    description: "Learning-focused layouts with enrollment optimization"
  }
]

export function IndustryConfigurator() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("healthcare")
  const [isConfiguring, setIsConfiguring] = useState(false)

  const currentIndustry = industries.find(ind => ind.id === selectedIndustry)

  const handleConfigure = () => {
    setIsConfiguring(true)
    setTimeout(() => setIsConfiguring(false), 2000)
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary animate-geometric-spin"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 transform rotate-45 animate-bounce"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">INDUSTRY CONFIGURATOR</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Real-Time Industry Adaptation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch how Vheissu transforms design patterns, content strategies, and optimization techniques for any industry vertical in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Industry Selection */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-mono tracking-wide">SELECT INDUSTRY</h3>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <motion.button
                    key={industry.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`relative p-4 rounded-lg border-2 transition-all duration-300 text-left group ${
                      selectedIndustry === industry.id
                        ? 'border-primary bg-primary/10 shadow-lg'
                        : 'border-muted-foreground/20 hover:border-primary/50 hover:bg-primary/5'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded bg-gradient-to-r ${industry.color} text-white`}>
                        {industry.icon}
                      </div>
                      <span className="font-medium text-sm">{industry.name}</span>
                    </div>
                    {selectedIndustry === industry.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Configuration Preview */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {currentIndustry && (
                <motion.div
                  key={currentIndustry.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${currentIndustry.color}`}></div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center space-x-3 text-2xl">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${currentIndustry.color} text-white`}>
                            {currentIndustry.icon}
                          </div>
                          <span>{currentIndustry.name}</span>
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                          <span className="text-primary font-mono text-sm">ACTIVE</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {currentIndustry.description}
                      </p>

                      {/* Configuration Stats */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
                          <div className="text-2xl font-bold text-primary">98%</div>
                          <div className="text-xs text-muted-foreground font-mono">ADAPTATION ACCURACY</div>
                        </div>
                        <div className="text-center p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                          <div className="text-2xl font-bold text-secondary">2.3s</div>
                          <div className="text-xs text-muted-foreground font-mono">GENERATION TIME</div>
                        </div>
                        <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/10">
                          <div className="text-2xl font-bold text-accent">47+</div>
                          <div className="text-xs text-muted-foreground font-mono">OPTIMIZATIONS APPLIED</div>
                        </div>
                      </div>

                      {/* Features adapted for industry */}
                      <div className="space-y-3">
                        <h4 className="font-mono text-sm tracking-wider text-primary uppercase">ADAPTIVE FEATURES</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                            <span>Color Psychology</span>
                            <div className={`w-4 h-4 rounded bg-gradient-to-r ${currentIndustry.color}`}></div>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                            <span>Trust Signals</span>
                            <span className="text-primary font-mono">OPTIMIZED</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                            <span>CTA Positioning</span>
                            <span className="text-secondary font-mono">ENHANCED</span>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                            <span>SEO Strategy</span>
                            <span className="text-accent font-mono">INDUSTRY SPECIFIC</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={handleConfigure}
                        disabled={isConfiguring}
                        className="w-full py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark font-mono tracking-wider relative overflow-hidden group"
                      >
                        {isConfiguring ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                            <span>CONFIGURING...</span>
                          </motion.div>
                        ) : (
                          <>
                            <span className="relative z-10">CONFIGURE FOR {currentIndustry.name.toUpperCase()}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}