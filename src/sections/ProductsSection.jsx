import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProductsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const scrollLockRef = useRef(0)
    const touchStartY = useRef(0)

    const slides = [
        {
            id: 1,
            title: "OpticClear Professional",
            subtitle: "Premium eye care solutions",
            description: "Clinically engineered eye drops for soothing hydration, clarity, and all-day protection.",
            image: "/images/moxel.png",
            bgImage: "/images/blue-bg.svg",
            elements: "/images/blue-elements.webp",
                gradient: "from-blue-500/85 via-sky-600/80 to-indigo-800/85"
        },
        {
            id: 2,
            title: "EarGuard Advanced",
            subtitle: "Safe and effective ear hygiene",
            description: "Doctor-trusted formulations for wax removal, comfort, and infection prevention.",
            image: "/images/olpat.png",
            bgImage: "/images/orange-bg.svg",
            elements: "/images/orange-elements.webp",
                gradient: "from-amber-500/85 via-orange-600/80 to-rose-800/85"
        },
        {
            id: 3,
            title: "WoundCare+ Defense",
            subtitle: "Rapid healing and protection",
            description: "Advanced antiseptic blends for faster recovery and scar reduction, designed for sensitive skin.",
            image: "/images/tobran.png",
            bgImage: "/images/brown-bg.svg",
            elements: "/images/brown-elements.webp",
                gradient: "from-whte-500/85 via-green-600/80 to-white-800/85"
        },
        {
            id: 4,
            title: "NasalPure Relief",
            subtitle: "Clear, gentle breathing",
            description: "Saline-powered nasal care that keeps airways clear, balanced, and comfortable.",
            image: "/images/moxel.png",
            bgImage: "/images/red-bg.svg",
            elements: "/images/red-elements.webp",
                gradient: "from-rose-500/85 via-pink-600/80 to-purple-800/85"
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

    const handleWheel = useCallback((event) => {
        const now = performance.now()
        if (now - scrollLockRef.current < 600) return
        if (Math.abs(event.deltaY) < 20) return

        scrollLockRef.current = now
        setIsPaused(true)
        setTimeout(() => setIsPaused(false), 1400)

        if (event.deltaY > 0) {
            nextSlide()
        } else {
            prevSlide()
        }
    }, [nextSlide, prevSlide])

    const handleTouchStart = useCallback((event) => {
        touchStartY.current = event.touches[0].clientY
    }, [])

    const handleTouchEnd = useCallback((event) => {
        const deltaY = event.changedTouches[0].clientY - touchStartY.current
        if (Math.abs(deltaY) < 45) return

        setIsPaused(true)
        setTimeout(() => setIsPaused(false), 1800)
        if (deltaY > 0) {
            prevSlide()
        } else {
            nextSlide()
        }
    }, [nextSlide, prevSlide])

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(nextSlide, 5500)
            return () => clearInterval(timer)
        }
    }, [isPaused, nextSlide])

    return (
        <section
            id="products"
            className="relative min-h-screen overflow-hidden bg-slate-900 snap-start section-blend"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
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
                        <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient}`} />
                        <motion.img
                            initial={{ scale: 1.08 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 6, ease: "easeOut" }}
                            src={slides[currentSlide].bgImage}
                            alt="Background"
                            className="w-full h-full object-cover opacity-15"
                        />
                        <motion.img
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 0.35, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            src={slides[currentSlide].elements}
                            alt="Decor"
                            className="absolute left-0 top-0 h-full object-contain"
                        />
                    </div>

                    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-18 lg:py-20">
                        <div className="flex flex-col gap-12 lg:gap-14">
                            <div className="flex justify-center">
                                <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold text-white shadow-lg shadow-black/10">
                                    Our Medical Product Range
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.25 }}
                                    className="space-y-6 text-white max-w-2xl lg:pr-6"
                                >
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold">
                                        {slides[currentSlide].subtitle}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                                        {slides[currentSlide].title}
                                    </h3>
                                    <p className="text-lg text-white/85 max-w-2xl leading-relaxed">
                                        {slides[currentSlide].description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        {["FDA Approved", "Clinically Tested", "Patient Preferred"].map((item) => (
                                            <span key={item} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium backdrop-blur-sm">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <button
                                            onClick={() => window.location.assign('/catalogue')}
                                            className="group px-7 py-3 rounded-full bg-white text-slate-900 font-semibold text-base flex items-center gap-2 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition"
                                        >
                                            View Details
                                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                        <button className="px-7 py-3 rounded-full border border-white/25 bg-white/10 text-white font-semibold text-base backdrop-blur-md hover:bg-white/15 hover:-translate-y-1 transition">
                                            Download Catalog
                                        </button>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.35 }}
                                    className="relative h-full flex items-center justify-center lg:justify-end"
                                >
                                    <div className="relative w-full max-w-xl aspect-[3/4] max-h-[68vh]">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                            className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/15 rounded-3xl shadow-2xl" />

                                        <motion.img
                                            key={slides[currentSlide].image}
                                            initial={{ opacity: 0, y: 30, scale: 0.96 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ duration: 0.9, ease: "easeOut" }}
                                            src={slides[currentSlide].image}
                                            alt={slides[currentSlide].title}
                                            className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                                        />

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.65 }}
                                            className="absolute -top-6 left-6 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-sm backdrop-blur-md"
                                        >
                                            Flagship Series
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.75 }}
                                            className="absolute -bottom-8 right-6 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-sm backdrop-blur-md"
                                        >
                                            Patient Preferred
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 pointer-events-none">
                <div className="flex justify-between items-center h-full px-4 md:px-8 lg:px-12 xl:px-16">
                    <button
                        onClick={prevSlide}
                        className="pointer-events-auto w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15 border border-white/25 text-white backdrop-blur-md hover:bg-white/25 transition"
                        aria-label="Previous"
                    >
                        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="pointer-events-auto w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15 border border-white/25 text-white backdrop-blur-md hover:bg-white/25 transition"
                        aria-label="Next"
                    >
                        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection