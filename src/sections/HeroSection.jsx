import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const slides = [
        {
            id: 1,
            badge: "Cetmeds Opal Health Care",
            title: "Cetmeds Opal Health Care",
            subtitle: "Integrated eye, ear, and ENT care crafted by specialists.",
            description: "We combine clinical rigor with modern formulations to deliver reliable outcomes for patients and practitioners worldwide.",
            image: "/images/tobran.png",
            bg: "/images/hero-bg.png",
            tone: "from-[#ff9933] via-[#ffffff] to-[#138808]",
            pill: "Global Quality Standards",
            textTheme: "dark" // saffron top, white middle, green bottom
        },
        {
            id: 2,
            badge: "Research-led formulations",
            title: "Trusted by Clinicians",
            subtitle: "FDA-aligned, ISO-certified manufacturing with uncompromised safety.",
            description: "Our portfolio is engineered for efficacy, consistency, and patient comfort, backed by stringent testing protocols.",
            image: "/images/opal.png",
            bg: "/images/hero-bg.png",
            tone: "from-[#ff9933] via-[#ffffff] to-[#138808]",
            pill: "Clinically Proven",
            textTheme: "dark"
        },
        {
            id: 3,
            badge: "Patient-first design",
            title: "Precision in Every Drop",
            subtitle: "Adaptive solutions for modern lifestyles and digital fatigue.",
            description: "Ergonomic packaging, preservative-free options, and advanced soothing agents ensure comfort from the first use.",
            image: "/images/opal.png",
            bg: "/images/hero-bg.png",
            tone: "from-[#ff9933] via-[#ffffff] to-[#138808]",
            pill: "Comfort Optimized",
            textTheme: "dark"
        }
    ]

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, [slides.length])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }, [slides.length])

    const goToSlide = useCallback((index) => {
        setCurrentSlide(index)
    }, [])

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(nextSlide, 6000)
            return () => clearInterval(timer)
        }
    }, [isPaused, nextSlide])

    const scrollToSection = useCallback((sectionId) => {
        const el = document.getElementById(sectionId)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [])

    return (
        <section
            id="home"
            className="relative h-screen w-full overflow-hidden bg-white section-blend"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50">
                        {/* Subtle tricolor gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].tone} opacity-35`} style={{ backgroundSize: '120% 120%' }} />
                        {/* Mesh gradient for depth */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,153,51,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(19,136,8,0.08),transparent_50%)]" />
                        {/* Subtle noise texture */}
                        <div className="absolute inset-0 opacity-[0.015]" style={{ 
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
                            backgroundSize: '200px 200px'
                        }} />
                    </div>

                    <div className="relative h-full w-full px-6 sm:px-8 lg:px-16 xl:px-20 pt-20 pb-12">
                        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 xl:gap-16 items-center h-full max-w-[1600px] mx-auto">
                            <div className="space-y-6 max-w-4xl">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/98 backdrop-blur-2xl border border-slate-200/60 rounded-full shadow-lg shadow-slate-900/10 hover:shadow-xl hover:scale-105 transition-all duration-300"
                                >
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#138808] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#138808]"></span>
                                    </span>
                                    <span className="text-xs font-bold tracking-[0.15em] uppercase text-slate-900">{slides[currentSlide].badge}</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] text-slate-950 tracking-tight"
                                    style={{
                                        textShadow: '0 2px 20px rgba(255, 255, 255, 0.4), 0 1px 3px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    {slides[currentSlide].title}
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="text-lg lg:text-xl xl:text-2xl text-slate-700 max-w-3xl font-semibold leading-relaxed"
                                    style={{
                                        textShadow: '0 1px 10px rgba(255, 255, 255, 0.3)'
                                    }}
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="text-base lg:text-lg text-slate-600 max-w-2xl leading-relaxed font-medium"
                                >
                                    {slides[currentSlide].description}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="flex flex-wrap gap-2.5 pt-1"
                                >
                                    {[slides[currentSlide].pill, 'ISO Certified', 'Clinician Trusted'].map((pill, idx) => (
                                        <motion.span
                                            key={pill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: 0.7 + idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                                            className="group px-4 py-2 rounded-full bg-white/98 border border-slate-200/60 text-xs font-bold shadow-md shadow-slate-900/10 text-slate-900 hover:shadow-lg hover:scale-105 hover:border-slate-300 transition-all duration-300 cursor-default backdrop-blur-sm"
                                        >
                                            <span className="bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">{pill}</span>
                                        </motion.span>
                                    ))}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.9, delay: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="flex flex-col sm:flex-row gap-4 pt-3"
                                >
                                    <button
                                        onClick={() => scrollToSection('products')}
                                        className="btn-primary group"
                                    >
                                        <span>Explore Portfolio</span>
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="btn-secondary group"
                                    >
                                        <span>Contact Us</span>
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.05, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="flex flex-wrap gap-8 pt-4 items-center"
                                >
                                    <div className="group">
                                        <div className="text-3xl font-black bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">25+</div>
                                        <div className="text-xs text-slate-600 font-semibold mt-1">Years Excellence</div>
                                    </div>
                                    <div className="h-10 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                                    <div className="group">
                                        <div className="text-3xl font-black bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">50K+</div>
                                        <div className="text-xs text-slate-600 font-semibold mt-1">Patients Served</div>
                                    </div>
                                    <div className="h-10 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                                    <div className="group">
                                        <div className="text-3xl font-black bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">120+</div>
                                        <div className="text-xs text-slate-600 font-semibold mt-1">Healthcare Partners</div>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 30, scale: 0.95 }}
                                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
                                className="relative h-full flex items-center justify-center"
                            >
                                <div className="relative w-full max-w-lg xl:max-w-xl aspect-[4/5] max-h-[70vh]">
                                    {/* Glow effect */}
                                    <div className="absolute -inset-8 bg-gradient-to-br from-[#ff9933]/20 via-[#2563eb]/20 to-[#138808]/20 rounded-[3rem] blur-3xl opacity-60" />
                                    
                                    {/* Glass card */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] overflow-hidden">
                                        {/* Shimmer effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" 
                                             style={{ animation: 'shimmer 3s infinite' }} />
                                    </div>
                                    
                                    {/* Product image */}
                                    <motion.img
                                        key={slides[currentSlide].image}
                                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                                        src={slides[currentSlide].image}
                                        alt={slides[currentSlide].title}
                                        className="relative z-10 w-full h-full object-contain p-8 drop-shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
                                    />
                                    
                                    {/* Floating badges */}
                                    <motion.div
                                        initial={{ opacity: 0, y: -20, x: -10 }}
                                        animate={{ opacity: 1, y: 0, x: 0 }}
                                        transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                                        className="absolute -top-3 -left-3 px-4 py-2.5 rounded-2xl bg-white/95 border border-slate-200/60 shadow-xl shadow-slate-900/10 backdrop-blur-sm"
                                    >
                                        <div className="text-xs font-bold bg-gradient-to-r from-[#ff9933] to-[#138808] bg-clip-text text-transparent">Premium Quality</div>
                                    </motion.div>
                                    
                                    <motion.div
                                        initial={{ opacity: 0, y: 20, x: 10 }}
                                        animate={{ opacity: 1, y: 0, x: 0 }}
                                        transition={{ duration: 0.7, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
                                        className="absolute -bottom-3 -right-3 px-4 py-2.5 rounded-2xl bg-white/95 border border-slate-200/60 shadow-xl shadow-slate-900/10 backdrop-blur-sm"
                                    >
                                        <div className="text-xs font-bold bg-gradient-to-r from-[#2563eb] to-[#138808] bg-clip-text text-transparent">FDA Approved</div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>


            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 bg-white/95 backdrop-blur-xl px-4 py-3 rounded-full shadow-lg shadow-slate-900/10 border border-slate-200/60">
                {slides.map((slide, idx) => (
                    <button
                        key={slide.id}
                        onClick={() => goToSlide(idx)}
                        className={`w-3 h-3 rounded-full border border-white/40 transition pointer-events-auto ${currentSlide === idx ? 'bg-white shadow-lg shadow-white/30 scale-110' : 'bg-white/20'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default HeroSection