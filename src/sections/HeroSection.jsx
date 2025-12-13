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
            image: "/images/hero-img.png",
            bg: "/images/hero-bg.png",
            tone: "from-slate-700 via-sky-700 to-cyan-700",
            pill: "Global Quality Standards"
        },
        {
            id: 2,
            badge: "Research-led formulations",
            title: "Trusted by Clinicians",
            subtitle: "FDA-aligned, ISO-certified manufacturing with uncompromised safety.",
            description: "Our portfolio is engineered for efficacy, consistency, and patient comfort, backed by stringent testing protocols.",
            image: "/images/static-img.png",
            bg: "/images/hero-bg.png",
            tone: "from-slate-700 via-sky-800 to-blue-700",
            pill: "Clinically Proven"
        },
        {
            id: 3,
            badge: "Patient-first design",
            title: "Precision in Every Drop",
            subtitle: "Adaptive solutions for modern lifestyles and digital fatigue.",
            description: "Ergonomic packaging, preservative-free options, and advanced soothing agents ensure comfort from the first use.",
            image: "/images/Final.png",
            bg: "/images/hero-bg.png",
            tone: "from-slate-700 via-emerald-700 to-sky-800",
            pill: "Comfort Optimized"
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
            className="relative h-screen w-full overflow-hidden bg-slate-900 section-blend"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0">
                        <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].tone}`} />
                        <motion.img
                            key={slides[currentSlide].bg}
                            initial={{ scale: 1.06 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 7, ease: "easeOut" }}
                            src={slides[currentSlide].bg}
                            alt="Background"
                            className="w-full h-full object-cover opacity-25"
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.05),transparent_35%)]" />
                    </div>

                    <div className="relative h-full w-full px-6 sm:px-8 lg:px-14 xl:px-18 pt-24 pb-18">
                        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center h-full">
                            <div className="space-y-8 text-white max-w-5xl">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full"
                                >
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                    <span className="text-sm font-semibold tracking-[0.12em] uppercase">{slides[currentSlide].badge}</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.35 }}
                                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]"
                                >
                                    {slides[currentSlide].title}
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="text-xl lg:text-2xl text-white/85 max-w-3xl"
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.75, delay: 0.65 }}
                                    className="text-base md:text-lg text-slate-200/90 max-w-3xl leading-relaxed"
                                >
                                    {slides[currentSlide].description}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.8 }}
                                    className="flex flex-wrap gap-3"
                                >
                                    {[slides[currentSlide].pill, 'ISO Certified Facilities', 'Clinician Trusted'].map((pill, idx) => (
                                        <span
                                            key={pill}
                                            className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-sm"
                                            style={{ animationDelay: `${idx * 0.05}s` }}
                                        >
                                            {pill}
                                        </span>
                                    ))}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.95 }}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <button
                                        onClick={() => scrollToSection('products')}
                                        className="group px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg flex items-center gap-2 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition"
                                    >
                                        Explore Portfolio
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="px-8 py-4 rounded-full border border-white/25 bg-white/10 text-white font-semibold text-lg backdrop-blur-md hover:bg-white/15 hover:-translate-y-1 transition"
                                    >
                                        Partner With Us
                                    </button>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 1.45 }}
                                    className="flex flex-wrap gap-8 pt-2 text-white/85"
                                >
                                    <div>
                                        <div className="text-3xl font-bold text-white">25+</div>
                                        <div className="text-sm">Years of pharmaceutical expertise</div>
                                    </div>
                                    <div className="h-12 w-px bg-white/20" />
                                    <div>
                                        <div className="text-3xl font-bold text-white">50K+</div>
                                        <div className="text-sm">Patients served globally</div>
                                    </div>
                                    <div className="h-12 w-px bg-white/20" />
                                    <div>
                                        <div className="text-3xl font-bold text-white">120+</div>
                                        <div className="text-sm">Healthcare partners</div>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.85, ease: "easeOut", delay: 0.35 }}
                                className="relative h-full flex items-center justify-center"
                            >
                                <div className="relative w-full max-w-xl xl:max-w-2xl aspect-[4/5] max-h-[72vh]">
                                    <div className="absolute -inset-4 md:-inset-6 rounded-3xl bg-gradient-to-tr from-white/15 via-cyan-200/10 to-emerald-200/12 blur-3xl" />
                                    <div className="absolute inset-0 bg-white/12 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl" />
                                    <motion.img
                                        key={slides[currentSlide].image}
                                        initial={{ opacity: 0, y: 24, scale: 0.96 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 24, scale: 0.96 }}
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                        src={slides[currentSlide].image}
                                        alt={slides[currentSlide].title}
                                        className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                        className="absolute -top-5 left-4 px-4 py-2 rounded-full bg-white/18 border border-white/25 text-white text-sm backdrop-blur-md"
                                    >
                                        Flagship Visual
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.7 }}
                                        className="absolute -bottom-7 right-4 px-4 py-2 rounded-full bg-white/18 border border-white/25 text-white text-sm backdrop-blur-md"
                                    >
                                        Replace with product shot
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>


            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
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