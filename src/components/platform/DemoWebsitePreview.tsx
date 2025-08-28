import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { X, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GeneratedWebsite {
  id: string
  companyName: string
  industry: string
  url: string
  content: {
    hero: {
      headline: string
      subheadline: string
      ctaText: string
    }
    about: {
      title: string
      content: string
    }
    services: {
      title: string
      items: Array<{
        name: string
        description: string
        icon: string
      }>
    }
    contact: {
      title: string
      address: string
      phone: string
      email: string
    }
    seo: {
      title: string
      description: string
      keywords: string[]
    }
  }
  styling: {
    primaryColor: string
    secondaryColor: string
    accentColor: string
    fontFamily: string
  }
  createdAt: string
}

interface DemoWebsitePreviewProps {
  isOpen: boolean
  onClose: () => void
  website: GeneratedWebsite | null
}

export function DemoWebsitePreview({ isOpen, onClose, website }: DemoWebsitePreviewProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isOpen && website) {
      setIsLoaded(false)
      const timer = setTimeout(() => setIsLoaded(true), 500)
      return () => clearTimeout(timer)
    }
  }, [isOpen, website])

  if (!isOpen || !website) return null

  const { content, styling } = website

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-6xl bg-white rounded-lg overflow-hidden shadow-2xl relative"
        style={{ minHeight: '90vh' }}
      >
        {/* Preview Header */}
        <div className="bg-gray-100 p-4 border-b flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="bg-white px-4 py-2 rounded-full text-sm text-gray-600 border">
              {website.url}
            </div>
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
              DEMO PREVIEW
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Website Content */}
        {!isLoaded ? (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading your demo website...</p>
            </div>
          </div>
        ) : (
          <div className="bg-white">
            {/* Hero Section */}
            <section 
              className="relative py-20 px-6 text-white"
              style={{ backgroundColor: styling.primaryColor }}
            >
              <div className="max-w-6xl mx-auto text-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold mb-6"
                >
                  {content.hero.headline}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl mb-8 max-w-4xl mx-auto opacity-90"
                >
                  {content.hero.subheadline}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <button 
                    className="px-8 py-4 text-lg font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: styling.accentColor }}
                  >
                    {content.hero.ctaText}
                  </button>
                </motion.div>
              </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6" style={{ color: styling.primaryColor }}>
                      {content.about.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {content.about.content}
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <div className="text-6xl mb-4">🏢</div>
                    <p className="text-gray-600">Professional Excellence</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-6 bg-gray-50">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12" style={{ color: styling.primaryColor }}>
                  {content.services.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {content.services.items.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="text-4xl mb-4">
                        {service.icon === 'stethoscope' ? '🩺' : 
                         service.icon === 'heart' ? '❤️' : 
                         service.icon === 'shield' ? '🛡️' : 
                         service.icon === 'scale' ? '⚖️' : 
                         service.icon === 'gavel' ? '🔨' : 
                         service.icon === 'shopping-bag' ? '🛍️' : '⭐'}
                      </div>
                      <h3 className="text-xl font-semibold mb-3" style={{ color: styling.secondaryColor }}>
                        {service.name}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12" style={{ color: styling.primaryColor }}>
                  {content.contact.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <MapPin className="w-8 h-8 mb-4" style={{ color: styling.secondaryColor }} />
                    <h3 className="font-semibold mb-2">Visit Us</h3>
                    <p className="text-gray-600">{content.contact.address}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Phone className="w-8 h-8 mb-4" style={{ color: styling.secondaryColor }} />
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-600">{content.contact.phone}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-8 h-8 mb-4" style={{ color: styling.secondaryColor }} />
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-600">{content.contact.email}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Demo Footer */}
            <div className="bg-gray-800 text-white py-8 px-6 text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">This is a DEMO preview</h3>
                <p className="text-gray-300 mb-6">
                  Your actual website will include full functionality, hosting, domain setup, and ongoing support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                  >
                    Get Full Service ($297/month)
                  </button>
                  <button 
                    className="px-6 py-3 border border-gray-500 hover:bg-gray-700 rounded-lg font-semibold transition-colors"
                    onClick={onClose}
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}