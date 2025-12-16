import React, { useEffect, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'

// Sections - Lazy import for better performance
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

  const initializeGSAP = useCallback(() => {
    // Ultra-lightweight GSAP configuration for maximum performance
    gsap.config({
      autoSleep: 10,
      force3D: false, // Disable 3D transforms to reduce GPU load
      nullTargetWarn: false,
      units: { rotation: "deg" }
    })

    // Minimal ScrollTrigger configuration
    ScrollTrigger.config({
      autoRefreshEvents: "none", // Disable auto-refresh for performance
      ignoreMobileResize: true
    })

    // DISABLE ALL SCROLL ANIMATIONS TO ELIMINATE LAG
    // Only use simple fade-in on initial load, no scroll-based animations
    const elements = document.querySelectorAll('.animate-on-scroll')

    if (elements.length > 0) {
      // Simple one-time fade in, no scroll triggers
      gsap.fromTo(elements,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: "none"
        }
      )
    }

  }, [])

  useEffect(() => {
    // Immediate initialization
    initializeGSAP()

    return () => {
      // Clean up all ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      ScrollTrigger.clearScrollMemory()
    }
  }, [initializeGSAP])

  // Ultra-smooth snap scroll control with awesome transitions
  useEffect(() => {
    const container = document.querySelector('.snap-container')
    if (!container) return

    const sections = Array.from(container.querySelectorAll('section'))
    let currentIndex = 0
    let isLocked = false
    let touchStartY = 0
    const duration = 800 // Increased for smoother feel

    const scrollToIndex = (idx) => {
      if (!sections[idx]) return
      isLocked = true
      
      // Add transition classes
      sections.forEach((section, i) => {
        if (i === idx) {
          section.classList.add('section-in')
          section.classList.remove('section-out')
        } else if (i === currentIndex) {
          section.classList.add('section-out')
          section.classList.remove('section-in')
        }
      })
      
      currentIndex = idx
      sections[idx].scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.setTimeout(() => { isLocked = false }, duration + 100)
    }

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) < 25) return
      e.preventDefault()
      if (isLocked) return
      const direction = e.deltaY > 0 ? 1 : -1
      const nextIndex = Math.min(Math.max(currentIndex + direction, 0), sections.length - 1)
      if (nextIndex !== currentIndex) {
        scrollToIndex(nextIndex)
      }
    }

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e) => {
      const deltaY = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(deltaY) < 60 || isLocked) return
      const direction = deltaY > 0 ? 1 : -1
      const nextIndex = Math.min(Math.max(currentIndex + direction, 0), sections.length - 1)
      if (nextIndex !== currentIndex) {
        scrollToIndex(nextIndex)
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = sections.findIndex(sec => sec === entry.target)
          if (idx !== -1) currentIndex = idx
        }
      })
    }, { root: container, threshold: 0.55 })

    sections.forEach(sec => observer.observe(sec))

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      observer.disconnect()
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <div className="relative bg-white">
      {/* Lightweight Navigation */}
      <NavBar />

      {/* Main Content - No scroll progress to reduce scroll events */}
      {/* Main Content */}
      <main className="relative snap-container">
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