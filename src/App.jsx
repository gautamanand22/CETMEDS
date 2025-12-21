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
import TestimonialsShowcase from './sections/TestimonialsShowcase'
import ParallaxSection from './sections/ParallaxSection'
import BenefitsSection from './sections/BenefitsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import ContactSection from './sections/ContactSection'

// Components
import NavBar from './components/NavBar'
import ScrollProgress from './components/ScrollProgress'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const lenisRef = useRef(null)

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
    <div className="relative bg-white">
      {/* Navigation */}
      <NavBar />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Main Content - Continuous Smooth Scrolling */}
      <main className="relative main-container">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <TestimonialsShowcase />
        <ParallaxSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App