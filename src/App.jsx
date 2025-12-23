import React, { useEffect, useCallback, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import './index.css'

// Sections
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ProductsSection from './sections/ProductsSection'
import DoctorsSection from './sections/DoctorsSection'
import TestimonialsShowcase from './sections/TestimonialsShowcase'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'

// Components
import NavBar from './components/NavBar'
import ScrollProgress from './components/ScrollProgress'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const lenisRef = useRef(null)
  const bgRef = useRef(null)

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    // Animation loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Update ScrollTrigger on scroll
    lenis.on('scroll', ScrollTrigger.update)

    return () => {
      lenis.destroy()
    }
  }, [])

  // Background Parallax Animation
  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 20, // Move background down slightly as we scroll down
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      })
    }
  }, [])

  // Initialize GSAP ScrollTrigger animations
  useEffect(() => {
    // GSAP configuration
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    })

    ScrollTrigger.config({
      ignoreMobileResize: true,
    })

    // Animate sections on scroll
    const sections = gsap.utils.toArray('section')
    
    sections.forEach((section, index) => {
      // Skip hero section from fade animation
      if (index === 0) return

      // Skip products section to avoid breaking sticky positioning
      if (section.id === 'products') return

      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-slate-50">
      {/* Fixed Global Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Tricolor Gradient Base */}
        <div 
          ref={bgRef}
          className="absolute -inset-[20%] w-[140%] h-[140%] bg-gradient-to-br from-[#ff9933]/20 via-white to-[#138808]/20"
        />
        
        {/* Optional: Texture/Noise for professional feel */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
            backgroundSize: '200px 200px'
        }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.05]" />
      </div>

      {/* Navigation */}
      <NavBar />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Main Content - Continuous Smooth Scrolling */}
      <main className="relative main-container z-10">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <DoctorsSection />
        <TestimonialsShowcase />
        <ContactSection />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

export default App