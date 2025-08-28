import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, Building2, Palette, Zap, Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { websiteGenerator } from "@/lib/websiteGenerator"
import { DemoWebsitePreview } from "./DemoWebsitePreview"

interface ConfigurationData {
  // Step 1 - Business Details
  companyName: string
  currentWebsite: string
  industry: string
  targetAudience: string
  keyServices: string
  location: string
  
  // Step 2 - Visual Preferences
  colorScheme: string
  typography: string
  layoutDensity: string
  
  // Step 3 - Features
  features: string[]
  
  // Step 4 - Final
  completed: boolean
}

interface ConfigurationWizardProps {
  isOpen: boolean
  onClose: () => void
  selectedIndustry: string
}

const steps = [
  { id: 1, title: "Business Details", icon: <Building2 className="w-5 h-5" /> },
  { id: 2, title: "Visual Style", icon: <Palette className="w-5 h-5" /> },
  { id: 3, title: "Features", icon: <Zap className="w-5 h-5" /> },
  { id: 4, title: "Preview", icon: <Eye className="w-5 h-5" /> }
]

const colorSchemes = {
  healthcare: [
    { name: "Medical Professional", colors: "from-blue-600 to-teal-500", description: "Trust and cleanliness" },
    { name: "Wellness Focused", colors: "from-green-500 to-emerald-500", description: "Health and vitality" },
    { name: "Modern Clinical", colors: "from-slate-600 to-blue-600", description: "Professional authority" }
  ],
  ecommerce: [
    { name: "Premium Luxury", colors: "from-purple-600 to-pink-600", description: "High-end appeal" },
    { name: "Trusted Retail", colors: "from-blue-500 to-indigo-600", description: "Reliable and secure" },
    { name: "Energetic Sales", colors: "from-orange-500 to-red-500", description: "Action-oriented" }
  ],
  legal: [
    { name: "Corporate Authority", colors: "from-slate-700 to-gray-800", description: "Professional power" },
    { name: "Trustworthy Gold", colors: "from-amber-600 to-yellow-600", description: "Established credibility" },
    { name: "Modern Legal", colors: "from-blue-800 to-slate-700", description: "Contemporary expertise" }
  ],
  corporate: [
    { name: "Executive Blue", colors: "from-blue-800 to-slate-700", description: "Corporate leadership" },
    { name: "Professional Gray", colors: "from-gray-600 to-slate-800", description: "Business authority" },
    { name: "Success Green", colors: "from-emerald-600 to-teal-700", description: "Growth and prosperity" }
  ],
  automotive: [
    { name: "Racing Red", colors: "from-red-600 to-rose-700", description: "Speed and performance" },
    { name: "Luxury Black", colors: "from-gray-800 to-black", description: "Premium elegance" },
    { name: "Electric Blue", colors: "from-blue-600 to-cyan-600", description: "Innovation and tech" }
  ],
  realestate: [
    { name: "Luxury Gold", colors: "from-amber-600 to-yellow-600", description: "Premium properties" },
    { name: "Trust Blue", colors: "from-blue-600 to-indigo-700", description: "Reliable expertise" },
    { name: "Nature Green", colors: "from-green-600 to-emerald-700", description: "Home and growth" }
  ],
  restaurant: [
    { name: "Warm Amber", colors: "from-amber-500 to-orange-600", description: "Cozy dining" },
    { name: "Fresh Green", colors: "from-green-500 to-lime-600", description: "Fresh ingredients" },
    { name: "Elegant Red", colors: "from-red-600 to-rose-700", description: "Fine dining" }
  ],
  education: [
    { name: "Academic Blue", colors: "from-blue-600 to-indigo-700", description: "Knowledge and trust" },
    { name: "Creative Purple", colors: "from-purple-600 to-indigo-700", description: "Innovation in learning" },
    { name: "Growth Green", colors: "from-green-600 to-teal-700", description: "Development and progress" }
  ]
}

export function ConfigurationWizard({ isOpen, onClose, selectedIndustry }: ConfigurationWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedWebsite, setGeneratedWebsite] = useState<any>(null)
  const [showPreview, setShowPreview] = useState(false)
  const [config, setConfig] = useState<ConfigurationData>({
    companyName: "",
    currentWebsite: "",
    industry: selectedIndustry,
    targetAudience: "",
    keyServices: "",
    location: "",
    colorScheme: "",
    typography: "modern",
    layoutDensity: "balanced",
    features: [],
    completed: false
  })

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      const website = await websiteGenerator.generateWebsite(config)
      setGeneratedWebsite(website)
      setConfig(prev => ({ ...prev, completed: true }))
    } catch (error) {
      console.error('Failed to generate website:', error)
      alert('Failed to generate website. Please try again.')
    }
    setIsGenerating(false)
  }

  const handleViewDemo = () => {
    setShowPreview(true)
  }

  const handleGetQuote = () => {
    // In production, this would redirect to a pricing/contact page
    alert('Quote functionality coming soon! For now, contact us at hello@vheissu.com')
  }

  const updateConfig = (field: string, value: string | string[]) => {
    setConfig(prev => ({ ...prev, [field]: value }))
  }

  const toggleFeature = (feature: string) => {
    setConfig(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-4xl bg-card border border-primary/20 rounded-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Configure Your {selectedIndustry} Website</h2>
              <p className="text-muted-foreground mt-1">Step {currentStep} of 4 - {steps[currentStep - 1].title}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6 flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                  currentStep > step.id
                    ? 'bg-primary border-primary text-primary-foreground'
                    : currentStep === step.id
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-muted-foreground/30 text-muted-foreground'
                }`}>
                  {currentStep > step.id ? <Check className="w-5 h-5" /> : step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-1 mx-2 transition-all ${
                    currentStep > step.id ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {/* Step 1 - Business Details */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4">Tell us about your business</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name *</label>
                      <Input
                        value={config.companyName}
                        onChange={(e) => updateConfig('companyName', e.target.value)}
                        placeholder="Your Company Name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Current Website (optional)</label>
                      <Input
                        value={config.currentWebsite}
                        onChange={(e) => updateConfig('currentWebsite', e.target.value)}
                        placeholder="https://yoursite.com"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Target Audience *</label>
                      <Input
                        value={config.targetAudience}
                        onChange={(e) => updateConfig('targetAudience', e.target.value)}
                        placeholder="e.g., Small business owners, Families, Professionals"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Location *</label>
                      <Input
                        value={config.location}
                        onChange={(e) => updateConfig('location', e.target.value)}
                        placeholder="City, State or Region"
                        className="w-full"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Key Services *</label>
                      <Input
                        value={config.keyServices}
                        onChange={(e) => updateConfig('keyServices', e.target.value)}
                        placeholder="List your main services or products"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2 - Visual Preferences */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-6">Choose your visual style</h3>
                  
                  {/* Color Schemes */}
                  <div className="mb-8">
                    <h4 className="font-medium mb-4">Color Scheme</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {(colorSchemes[selectedIndustry as keyof typeof colorSchemes] || colorSchemes.healthcare).map((scheme) => (
                        <Card
                          key={scheme.name}
                          className={`cursor-pointer transition-all hover:shadow-lg ${
                            config.colorScheme === scheme.name ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => updateConfig('colorScheme', scheme.name)}
                        >
                          <CardContent className="p-4">
                            <div className={`w-full h-12 rounded-lg bg-gradient-to-r ${scheme.colors} mb-3`}></div>
                            <h5 className="font-medium">{scheme.name}</h5>
                            <p className="text-sm text-muted-foreground">{scheme.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Typography */}
                  <div className="mb-8">
                    <h4 className="font-medium mb-4">Typography Style</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { id: 'professional', name: 'Professional', preview: 'Aa', desc: 'Clean and authoritative' },
                        { id: 'modern', name: 'Modern', preview: 'Aa', desc: 'Contemporary and sleek' },
                        { id: 'friendly', name: 'Friendly', preview: 'Aa', desc: 'Approachable and warm' }
                      ].map((type) => (
                        <Card
                          key={type.id}
                          className={`cursor-pointer transition-all hover:shadow-lg ${
                            config.typography === type.id ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => updateConfig('typography', type.id)}
                        >
                          <CardContent className="p-4 text-center">
                            <div className="text-3xl font-bold mb-2">{type.preview}</div>
                            <h5 className="font-medium">{type.name}</h5>
                            <p className="text-sm text-muted-foreground">{type.desc}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Layout Density */}
                  <div>
                    <h4 className="font-medium mb-4">Layout Style</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { id: 'minimal', name: 'Minimal', desc: 'Clean and spacious' },
                        { id: 'balanced', name: 'Balanced', desc: 'Perfect mix of content' },
                        { id: 'information-rich', name: 'Information Rich', desc: 'Detailed and comprehensive' }
                      ].map((layout) => (
                        <Card
                          key={layout.id}
                          className={`cursor-pointer transition-all hover:shadow-lg ${
                            config.layoutDensity === layout.id ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => updateConfig('layoutDensity', layout.id)}
                        >
                          <CardContent className="p-4 text-center">
                            <h5 className="font-medium">{layout.name}</h5>
                            <p className="text-sm text-muted-foreground">{layout.desc}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3 - Features */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-6">Select features for your website</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'Contact Forms', 'Online Booking', 'E-commerce', 'Blog/News', 
                      'Customer Reviews', 'Social Media Integration', 'Live Chat', 
                      'Email Newsletter', 'Analytics Dashboard', 'SEO Optimization',
                      'Mobile App', 'Multi-language Support'
                    ].map((feature) => (
                      <Card
                        key={feature}
                        className={`cursor-pointer transition-all hover:shadow-lg ${
                          config.features.includes(feature) ? 'ring-2 ring-primary bg-primary/5' : ''
                        }`}
                        onClick={() => toggleFeature(feature)}
                      >
                        <CardContent className="p-4 text-center">
                          <div className="flex items-center justify-center mb-2">
                            {config.features.includes(feature) && (
                              <Check className="w-5 h-5 text-primary" />
                            )}
                          </div>
                          <h5 className="font-medium">{feature}</h5>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4 - Preview */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {!config.completed ? (
                  <div className="text-center space-y-6">
                    <h3 className="text-xl font-semibold">Ready to generate your {selectedIndustry} website?</h3>
                    
                    {/* Configuration Summary */}
                    <div className="bg-muted/30 rounded-lg p-6 space-y-4 text-left max-w-2xl mx-auto">
                      <h4 className="font-semibold">Configuration Summary:</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div><strong>Company:</strong> {config.companyName}</div>
                        <div><strong>Industry:</strong> {config.industry}</div>
                        <div><strong>Location:</strong> {config.location}</div>
                        <div><strong>Color Scheme:</strong> {config.colorScheme}</div>
                        <div><strong>Typography:</strong> {config.typography}</div>
                        <div><strong>Layout:</strong> {config.layoutDensity}</div>
                      </div>
                      <div>
                        <strong>Features:</strong> {config.features.join(', ') || 'None selected'}
                      </div>
                    </div>

                    <Button
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      size="lg"
                      className="px-12 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-lg"
                    >
                      {isGenerating ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                          <span>GENERATING WEBSITE...</span>
                        </motion.div>
                      ) : (
                        'GENERATE MY WEBSITE'
                      )}
                    </Button>

                    {isGenerating && (
                      <div className="text-sm text-muted-foreground">
                        <p>Estimated completion time: 2-3 minutes</p>
                        <p className="mt-2">We're creating your industry-optimized website...</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-primary">Website Generated Successfully!</h3>
                    <p className="text-muted-foreground">Your {selectedIndustry} website has been created and optimized.</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg" 
                        className="px-8 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark"
                        onClick={handleViewDemo}
                      >
                        VIEW DEMO WEBSITE
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="px-8 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        onClick={handleGetQuote}
                      >
                        GET FULL SERVICE QUOTE
                      </Button>
                    </div>
                    
                    <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20 text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong className="text-secondary">This is a demo preview.</strong> Get the full website with hosting, domain, and ongoing support.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Starting at $297/month • Full ownership • 24/7 support • SEO optimization
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        {!config.completed && (
          <div className="bg-muted/30 p-6 border-t border-primary/20 flex justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={
                currentStep === 4 ||
                (currentStep === 1 && (!config.companyName || !config.targetAudience || !config.location || !config.keyServices)) ||
                (currentStep === 2 && !config.colorScheme)
              }
              className="flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark"
            >
              <span>{currentStep === 4 ? 'Generate' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
        
        {/* Demo Website Preview */}
        <DemoWebsitePreview
          isOpen={showPreview}
          onClose={() => setShowPreview(false)}
          website={generatedWebsite}
        />
      </motion.div>
    </div>
  )
}