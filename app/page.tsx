'use client';

import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Bed, Bath, Square, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROPERTIES, Property } from '@/lib/constants';
import { cn } from '@/lib/utils';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Zone 1: Brand title */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-900 text-white rounded flex items-center justify-center text-xs font-black">JB</span>
              Jai Bhairav
            </span>
          </div>

          {/* Zone 2: Nav links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Zone 3: Primary action */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all active:scale-95"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-slate-900 text-white px-4 py-3 rounded-lg text-base font-medium"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
              Jai Bhairav Real Estate Group
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Premium Land Plots <br />
              <span className="text-slate-500">in Jaipur City.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-xl leading-relaxed">
              Jai Bhairav Real Estate Group specializes in open land and residential plots on Tonk Road, Shivdaspura, and Vatika. Secure your future today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#properties"
                className="bg-slate-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-800 transition-all inline-flex items-center justify-center group"
              >
                View Listings
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all text-center"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full hidden lg:block">
        <div className="absolute inset-0 bg-slate-100 rounded-bl-[120px]" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-white shadow-2xl rounded-3xl border border-slate-100 p-8 flex flex-col justify-end">
          <div className="text-4xl font-bold text-slate-900">500+</div>
          <div className="text-slate-500 font-medium">Properties Delivered</div>
        </div>
      </div>
    </section>
  );
};

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all"
    >
      <div className={cn("aspect-[4/3] w-full relative", property.imageFallbackColor)}>
        {/* Placeholder for image */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <MapPin className="w-12 h-12 text-slate-900" />
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wider">
            {property.type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
            {property.title}
          </h3>
          <span className="text-lg font-bold text-slate-900">{property.price}</span>
        </div>
        <p className="text-slate-500 text-sm flex items-center mb-6">
          <MapPin className="w-4 h-4 mr-1" />
          {property.location}
        </p>
        <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{property.type}</span>
          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-900 transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Let&apos;s Discuss Your Next Move</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Whether you&apos;re looking to buy, sell, or invest, our team of experts is ready to guide you through every step of the journey.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white rounded-xl border border-slate-200">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Call Us</p>
                  <p className="text-lg font-bold text-slate-900">+91 78498 61947</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-xl border border-slate-200">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Us</p>
                  <p className="text-lg font-bold text-slate-900">contact@jaibhairav.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500">Thank you for reaching out. Our team will contact you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-slate-900 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Property Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all">
                    <option>Residential Plot</option>
                    <option>Commercial Plot</option>
                    <option>Industrial Land</option>
                    <option>Agricultural Land</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-[0.99]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 pb-32 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold text-slate-900">Jai Bhairav</span>
            <p className="mt-2 text-slate-500 text-sm">© 2026 Jai Bhairav Real Estate Group. All rights reserved.</p>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-slate-500 hover:text-slate-900 text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 text-sm">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-slate-900 text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingCTA = () => {
  const phoneNumber = "917849861947";
  const whatsappMessage = encodeURIComponent("Hello Jai Bhairav Real Estate Group, I'm interested in your properties.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  const callUrl = `tel:+${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-4 pointer-events-none">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-emerald-600 transition-colors group relative"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </motion.a>

      <motion.a
        href={callUrl}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-slate-800 transition-colors group relative"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </motion.a>
    </div>
  );
};

// --- Main Page ---

export default function RealEstateApp() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Properties Section */}
        <section id="properties" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-slate-900">Featured Properties</h2>
                <p className="mt-4 text-slate-500 max-w-lg">
                  Hand-picked premium listings from the most sought-after locations across India.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <button className="text-slate-900 font-bold inline-flex items-center hover:underline">
                  View All Properties <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROPERTIES.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Specialized real estate solutions for the growing landscape of Jaipur.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Residential Plot Sales",
                "Premium Plotting Projects",
                "Plot Investment",
                "Easy Payment Plans"
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-slate-200 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-slate-900 shrink-0 group-hover:scale-125 transition-transform" />
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {service}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Stats Section */}
        <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                  Experts in Jaipur <br /> 
                  <span className="text-slate-400">Land Development.</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                  Jai Bhairav Real Estate Group is the leading name for land plots in the Tonk Road corridor. From Shivdaspura to Vatika, we help investors and homeowners find high-growth land opportunities.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold mb-1">15+</div>
                    <div className="text-slate-500 font-medium">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">1.2k</div>
                    <div className="text-slate-500 font-medium">Happy Families</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 flex items-center justify-center">
                   <div className="text-slate-600 text-6xl font-bold">JB</div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl border border-slate-100 hidden sm:block">
                  <div className="text-slate-900 font-bold mb-1">Market Leaders</div>
                  <div className="text-slate-500 text-sm font-medium">Voted #1 Premium Group</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      
      <Footer />
      <FloatingCTA />
    </div>
  );
}
