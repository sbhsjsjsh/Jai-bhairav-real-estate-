'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Bed, Bath, Square, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROPERTIES, Property } from '@/lib/constants';
import { cn } from '@/lib/utils';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "py-0" : "py-2"
    )}>
      <div className={cn(
        "absolute inset-0 transition-all duration-500",
        scrolled 
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-lg" 
          : "bg-transparent"
      )} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Zone 1: Brand title */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl rotate-3 group-hover:rotate-6 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-600 rounded-xl -rotate-3 group-hover:-rotate-0 transition-transform" />
                <span className="relative text-white text-sm font-black tracking-tighter">B</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Bhairav
              </span>
            </Link>
          </div>

          {/* Zone 2: Nav links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Zone 3: Primary action */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="relative group overflow-hidden bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Get in Touch</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 relative"
            >
              <div className={cn("absolute inset-0 bg-slate-100 rounded-full scale-0 transition-transform", isOpen && "scale-100")} />
              {isOpen ? <X className="relative w-6 h-6" /> : <Menu className="relative w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-lg font-semibold text-slate-900 hover:bg-slate-50 rounded-2xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-slate-900 to-slate-800 text-white py-4 rounded-2xl text-lg font-bold shadow-lg"
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
    <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-200/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-100/30 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/5 text-slate-900 text-xs font-bold uppercase tracking-widest mb-8 border border-slate-900/10">
              <div className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" />
              Bhairav Real Estate Group
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.05] mb-8">
              Own Your Piece of <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 animate-gradient-x">Jaipur&apos;s Future.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
              Exclusive residential and commercial plots on Tonk Road, Shivdaspura, and Vatika. Premium locations for a lifetime of growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#properties"
                className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-slate-900/20 transition-all flex items-center justify-center group"
              >
                Browse Plots
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all text-center"
              >
                Our Expertise
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Stats Floating */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-1/4 right-0 hidden xl:block translate-x-1/2"
      >
        <div className="bg-white/40 backdrop-blur-lg p-8 rounded-[40px] border border-white/50 shadow-2xl">
          <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">500+</div>
          <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Plots Delivered</div>
        </div>
      </motion.div>
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
                  <p className="text-lg font-bold text-slate-900">contact@bhairav.com</p>
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
    <footer className="relative bg-slate-950 text-white py-24 pb-32 md:pb-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-slate-800 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white text-slate-950 rounded-xl flex items-center justify-center font-black text-lg">B</div>
              <span className="text-2xl font-black tracking-tight">Bhairav</span>
            </div>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-8">
              Trusted land developers specializing in high-growth residential and commercial plots along the Jaipur Tonk Road corridor.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li><a href="#properties" className="hover:text-white transition-colors">Featured Plots</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Group</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> +91 78498 61947</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> contact@bhairav.com</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Jaipur, Rajasthan</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm font-medium">© 2026 Bhairav Real Estate Group. Crafted for Excellence.</p>
          <div className="flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingCTA = () => {
  const phoneNumber = "917849861947";
  const whatsappMessage = encodeURIComponent("Hello Bhairav Real Estate Group, I'm interested in your properties.");
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
                  Hand-picked premium listings from the most sought-after locations across Jaipur.
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
                  Bhairav Real Estate Group is the leading name for land plots in the Tonk Road corridor. From Shivdaspura to Vatika, we help investors and homeowners find high-growth land opportunities.
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
                   <div className="text-slate-600 text-6xl font-bold">B</div>
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
