import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const ProductsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [direction, setDirection] = useState(0)
    const scrollLockRef = useRef(0)
    const touchStartY = useRef(0)
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

    const slides = [
        {
            id: 1,
            title: "OpticClear Professional",
            category: "Eye Care",
            subtitle: "Premium eye care solutions",
            description: "Clinically engineered eye drops for soothing hydration, clarity, and all-day protection.",
            features: ["Preservative-free", "Fast-acting relief", "Doctor recommended", "Long-lasting hydration"],
            image: "/images/moxel.png",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "EarGuard Advanced",
            category: "Ear Care",
            subtitle: "Safe and effective ear hygiene",
            description: "Doctor-trusted formulations for wax removal, comfort, and infection prevention.",
            features: ["Gentle formula", "Pain-free cleansing", "Clinically tested", "Safe for all ages"],
            image: "/images/olpat.png",
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 3,
            title: "WoundCare+ Defense",
            category: "Wound Care",
            subtitle: "Rapid healing and protection",
            description: "Advanced antiseptic blends for faster recovery and scar reduction, designed for sensitive skin.",
            features: ["Antiseptic protection", "Scar reduction", "Fast healing", "Skin-friendly"],
            image: "/images/tobran.png",
            color: "from-green-500 to-emerald-500"
        },
        {
            id: 4,
            title: "NasalPure Relief",
            category: "Nasal Care",
            subtitle: "Clear, gentle breathing",
            description: "Saline-powered nasal care that keeps airways clear, balanced, and comfortable.",
            features: ["Natural saline", "Non-addictive", "Instant relief", "Moisturizing"],
            image: "/images/moxel.png",
            color: "from-orange-500 to-red-500"
        }
    ]

    const nextSlide = useCallback(() => {
        setDirection(1)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, [slides.length])

    const prevSlide = useCallback(() => {
        setDirection(-1)
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

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            scale: 0.9
        })
    }

    return (
        <section
            ref={sectionRef}
            id="products"
            className="relative h-screen overflow-hidden snap-start section-blend flex items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Animated background */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/20"
                style={{ y, opacity }}
            >
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                }} />
            </motion.div>

            <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header - Compact */}
                <div className="text-center mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/98 backdrop-blur-2xl border border-slate-200/60 rounded-full shadow-lg shadow-slate-900/10 mb-2"
                    >
                        <span className="text-xs font-bold bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent uppercase tracking-wider">Our Product Range</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-tight tracking-tight mb-2"
                        style={{
                            textShadow: '0 2px 20px rgba(255, 255, 255, 0.4)'
                        }}
                    >
                        Featured <span className="bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">Products</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto"
                    >
                        Explore our flagship formulations designed for optimal patient outcomes
                    </motion.p>
                </div>

                {/* Product Carousel */}
                <div className="relative">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentSlide}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                                scale: { duration: 0.4 }
                            }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            {/* Product Content - Compact */}
                            <div className="space-y-4">
                                {/* Category Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/98 backdrop-blur-2xl border border-slate-200/60 rounded-full shadow-md">
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${slides[currentSlide].color}`} />
                                    <span className="text-xs font-bold text-slate-900">{slides[currentSlide].category}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-950 leading-tight tracking-tight">
                                    {slides[currentSlide].title}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-lg font-semibold bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">
                                    {slides[currentSlide].subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {slides[currentSlide].description}
                                </p>

                                {/* Features - Compact */}
                                <div className="grid grid-cols-2 gap-2">
                                    {slides[currentSlide].features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                                            <svg className="w-4 h-4 text-[#138808] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons - Compact */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    <button
                                        onClick={() => window.location.assign('/catalogue')}
                                        className="btn-primary group text-sm px-5 py-2.5"
                                    >
                                        <span>View Details</span>
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                    <button className="btn-secondary group text-sm px-5 py-2.5">
                                        <span>Sample</span>
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Product Image - Compact */}
                            <div className="relative">
                                {/* Gradient glow effect */}
                                <div className={`absolute -inset-6 bg-gradient-to-br ${slides[currentSlide].color} rounded-[2.5rem] blur-3xl opacity-20`} />
                                
                                {/* Product card */}
                                <div className="relative aspect-[4/5] max-h-[500px] bg-gradient-to-br from-white/90 via-white/70 to-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl shadow-slate-900/10 p-6 overflow-hidden">
                                    {/* Decorative elements */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${slides[currentSlide].color} rounded-full blur-3xl opacity-20`} />
                                    <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br ${slides[currentSlide].color} rounded-full blur-2xl opacity-20`} />
                                    
                                    {/* Product image */}
                                    <img 
                                        src={slides[currentSlide].image}
                                        alt={slides[currentSlide].title}
                                        className="relative w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                                    />

                                    {/* Floating badge */}
                                    <div className="absolute top-3 right-3 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-lg">
                                        <span className="text-xs font-bold text-slate-900">Best Seller</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls - Compact */}
                    <div className="flex items-center justify-between mt-6">
                        {/* Navigation Arrows */}
                        <div className="flex gap-2">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full bg-white/98 border border-slate-200/60 text-slate-900 shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                                aria-label="Previous"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] text-white shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
                                aria-label="Next"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Slide Indicators */}
                        <div className="flex gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentSlide ? 1 : -1)
                                        setCurrentSlide(index)
                                    }}
                                    className={`transition-all duration-300 rounded-full ${
                                        index === currentSlide
                                            ? 'w-10 h-2.5 bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808]'
                                            : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Counter */}
                        <div className="px-3 py-1.5 bg-white/98 border border-slate-200/60 rounded-full shadow-md backdrop-blur-sm">
                            <span className="text-xs font-bold text-slate-900">
                                {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection