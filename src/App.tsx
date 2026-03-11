/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Wind,
  Zap,
  Calendar,
  Truck,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
  ArrowRight,
  Star
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import whatsappImage from './assets/logo.jpeg';
import foot from './assets/foot.jpeg';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    service: 'Deep Cleaning',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "256778335647";
    const text = `*New Booking Request from SneakerWash*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Service:* ${formData.service}%0A` +
                 `${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };



  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      const heroTl = gsap.timeline();
      heroTl.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      })
      .from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6')
      .from('.hero-cta', {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
      }, '-=0.4')
      .from('.hero-image', {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      }, '-=1');

      // Floating animation for hero image
      gsap.to('.hero-image', {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Section Reveals
      const reveals = document.querySelectorAll('.gsap-reveal');
      reveals.forEach((el) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0, visibility: 'hidden' },
          {
            y: 0,
            opacity: 1,
            visibility: 'visible',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // Service Cards Stagger
      gsap.from('.service-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 85%',
          once: true
        }
      });

      // How It Works Steps
      gsap.from('.step-item', {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.steps-container',
          start: 'top 75%',
        }
      });

       setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

    }, mainRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Deep Shoe Cleaning",
      description: "Complete interior and exterior cleaning using premium solutions for all materials.",
      icon: <Sparkles className="w-8 h-8 text-brand-500" />,

    },

    {
      title: "Odor Removal",
      description: "Advanced ozone treatment to eliminate bacteria and persistent smells.",
      icon: <Wind className="w-8 h-8 text-brand-500" />,

    },
    {
      title: "Express Cleaning",
      description: "Quick surface refresh for when you need your kicks ready in 24 hours.",
      icon: <Zap className="w-8 h-8 text-brand-500" />,

    }
  ];

  const steps = [
    { title: "Book Service", desc: "Select your cleaning package.", icon: <Calendar /> },
    { title: "Pickup or Drop-off", desc: "We collect from you or visit our site of operation.", icon: <Truck /> },
    { title: "Professional Cleaning", desc: "Hand-cleaned by our expert technicians.", icon: <Sparkles /> },
    { title: "Delivery", desc: "Fresh shoes delivered back to you.", icon: <CheckCircle2 /> }
  ];

  const testimonials = [
    { name: "Alex Mubiru", role: " Fashion Designer", content: "SneakerWash saved my limited edition Jordans. They look brand new!", rating: 5 },
    { name: "Sarah Mukimba", role: "Athlete", content: "Fast service and amazing results on my dirty shoes.", rating: 5 },
    { name: "David Komaketch", role: "Mechanic", content: "The odor removal service is magic. Highly recommend for all shoes.", rating: 4 }
  ];

  return (
    <div ref={mainRef} className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h- flex items-center justify-between">
            <div className="flex items-center gap-3">
            <img
              src={whatsappImage}
              alt="Shoe Icon"
              className="h-18 px-5 object-fit-contain"
              referrerPolicy="no-referrer"
            />
            </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">About</a>
            <a href="#services" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Services</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">How It Works</a>
            <a href="#pricing" className="text-slate-600 hover:text-brand-600 font-medium transition-colors">Pricing</a>
            <a href="#contact" className="bg-brand-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200">Book Now</a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">About</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Services</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">How It Works</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Pricing</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold text-center">Book Now</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-brand-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>PREMIUM SHOE CARE</span>
            </div>
            <h1 className="hero-title font-display text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Give Your Shoes a <span className="text-brand-600">Fresh Start.</span>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              Professional deep cleaning and restoration for your favorite footwear. We treat every pair with the care they deserve.
            </p>
            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 flex items-center justify-center gap-2 group">
                Book a Cleaning
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                View Services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="hero-image relative z-10 p-10">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000"
                alt="Premium Sneaker"
                className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 glass p-5 rounded-2xl shadow-xl animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Status</p>
                    <p className="font-bold text-slate-900">100% Cleaned</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-200/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="gsap-reveal">
              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
                alt="Cleaning Process"
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="gsap-reveal">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Expert Care for Your <span className="text-brand-600">Valued Footwear</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At SneakerWash, we believe every shoe tells a story. Our team of dedicated technicians uses specialized tools and eco-friendly solutions to restore your sneakers, boots, and formal shoes to their former glory.
              </p>
              <div className="space-y-4">
                {[
                  "Eco-friendly cleaning solutions",
                  "Expert material knowledge (Suede, Leather, Mesh)",
                  "Hand-cleaning process for maximum detail",
                  "Fast 48-hour turnaround available"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 gsap-reveal">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Choose the perfect treatment for your shoes. From basic refreshes to full restorations.</p>
          </div>

          <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            {services.map((service, i) => (
              <div key={i} className="service-card group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 gsap-reveal">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-slate-600">Getting your shoes cleaned has never been easier.</p>
          </div>

          <div className="steps-container grid md:grid-cols-4 gap-8 relative">
            {/* Connector line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-100 -translate-y-1/2 z-0"></div>

            {steps.map((step, i) => (
              <div key={i} className="step-item relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-brand-50 shadow-lg flex items-center justify-center text-brand-600 mb-6 group hover:border-brand-600 transition-colors duration-300">
                  {React.cloneElement(step.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 gsap-reveal">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-slate-400">Transparent rates for every type of footwear.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: "Kids Wear", price: "5000", features: ["Exterior Cleaning", "Lace Wash", "Deodorizing", "3-Day Period"] },
              { type: "Adult Wear", price: "7000", features: ["Deep Interior Clean", "Stain Removal", "Sole Whitening", "2-Day Period"], popular: true },
              { type: "Express Clean", price: "12000", features: ["Deep Interior Clean", "Suede Revive", "Deep Stain Removal", "24-hour period" ] }
            ].map((plan, i) => (
              <div key={i} className={cn(
                "p-10 rounded-3xl border transition-all duration-300 gsap-reveal",
                plan.popular ? "bg-brand-600 border-brand-500 scale-105 shadow-2xl shadow-brand-900/50" : "bg-slate-800 border-slate-700"
              )}>
                <h3 className="text-xl font-bold mb-2">{plan.type}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold">{plan.price} UGX/=</span>
                  <span className="text-slate-400">/pair</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-300" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 gsap-reveal">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <div className="flex justify-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="gsap-reveal bg-slate-50 p-8 rounded-3xl border border-slate-100 italic">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-700 mb-6">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center font-bold text-brand-700">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 not-italic">{t.name}</p>
                    <p className="text-sm text-slate-500 not-italic">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="gsap-reveal bg-brand-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Ready to Refresh Your Shoes?</h2>
              <p className="text-xl text-brand-100 mb-12 max-w-2xl mx-auto">Join thousands of happy customers and give your favorite pair the professional care they deserve.</p>
              <a href="#contact" className="inline-flex items-center gap-3 bg-white text-brand-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-50 transition-all shadow-2xl">
                Book Your Cleaning Now
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-900/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="gsap-reveal">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-10">Have questions about our process or a specific pair of shoes? We're here to help.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Call Us</p>
                    <p className="text-lg font-bold text-slate-900"><a href="tel:0778335647">0778335647</a></p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email Us</p>
                    <p className="text-lg font-bold text-slate-900"><a href="mailto:angelinajune60@gmail.com">angelinajune60@gmail.com</a></p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Visit Us</p>
                    <p className="text-lg font-bold text-slate-900">Kasule Courts Nsambya, Behind Joint Medical Stores</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="#" className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-600 hover:text-brand-600 transition-colors"><Instagram /></a>
                <a href="#" className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-600 hover:text-brand-600 transition-colors"><Facebook /></a>
                <a href="#" className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-600 hover:text-brand-600 transition-colors"><Twitter /></a>
              </div>
            </div>
            <div className="gsap-reveal bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
              <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service Type</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                  >
                    <option>Deep Cleaning</option>
                    <option>Odor Removal</option>
                    <option>Express Clean</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your shoes..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-200">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center gap-2">

            <img
              src={foot}
              alt="Shoe Icon"
              className="h-1/4 px-5 object-fit-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-xl tracking-tight text-brand-900">SneakerWash &#128536;</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 SneakerWash Premium Shoe Care. All rights reserved.</p>
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
