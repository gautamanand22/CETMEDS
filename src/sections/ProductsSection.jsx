import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProductCard = ({ product, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full"
        >
            <div className="w-full h-full bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl overflow-hidden">
                <div className={`relative h-full overflow-hidden bg-gradient-to-br ${product.gradient} backdrop-blur-xl`}>
                    <div className="grid lg:grid-cols-2 gap-6 p-6 lg:p-8 items-center h-full max-w-7xl mx-auto">
                            <div className="space-y-3">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg">
                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.color}`} />
                                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">{product.category}</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-tight tracking-tight">
                                    {product.title}
                                </h3>

                                <p className="text-base md:text-lg font-bold bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">
                                    {product.subtitle}
                                </p>

                                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="grid grid-cols-2 gap-2 pt-2">
                                    {product.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-800">
                                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#138808] to-[#2563eb] flex items-center justify-center flex-shrink-0">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="font-semibold">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 pt-3">
                                    <button
                                        onClick={() => window.location.assign('/catalogue')}
                                        className="px-6 py-2.5 bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] text-white font-bold text-xs rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                                    >
                                        <span>View Details</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                    <button className="px-6 py-2.5 bg-white/90 backdrop-blur-xl border border-slate-200 text-slate-900 font-bold text-xs rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
                                        Request Sample
                                    </button>
                                </div>
                            </div>

                            <div className="relative h-full flex items-center justify-center">
                                <div className="relative w-full aspect-[3/4] max-h-[500px]">
                                    <div className={`absolute -inset-8 bg-gradient-to-br ${product.color} rounded-3xl blur-3xl opacity-30 animate-pulse`} />
                                    <div className="relative h-full bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-6 overflow-hidden">
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} rounded-full blur-3xl opacity-20`} />
                                        <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${product.color} rounded-full blur-2xl opacity-20`} />
                                        <img 
                                            src={product.image}
                                            alt={product.title}
                                            className="relative w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                                        />
                                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full border border-white/40 shadow-lg">
                                            <span className="text-[10px] font-bold bg-gradient-to-r from-[#ff9933] to-[#138808] bg-clip-text text-transparent">Premium Quality</span>
                                        </div>
                                        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full border border-white/40 shadow-lg">
                                            <span className="text-[10px] font-bold text-slate-900">FDA Approved</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm border-2 border-slate-200 shadow-lg flex items-center justify-center">
                        <span className="text-xl font-black bg-gradient-to-r from-[#ff9933] to-[#138808] bg-clip-text text-transparent">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const ProductsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const products = [
        {
            id: 1,
            title: "OpticClear Professional",
            category: "Eye Care",
            subtitle: "Premium eye care solutions",
            description: "Clinically engineered eye drops for soothing hydration, clarity, and all-day protection. Preservative-free formula trusted by ophthalmologists worldwide.",
            features: ["Preservative-free", "Fast-acting relief", "Doctor recommended", "Long-lasting hydration"],
            image: "/images/moxel.png",
            gradient: "from-blue-50/90 via-cyan-50/80 to-teal-50/70",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "EarGuard Advanced",
            category: "Ear Care",
            subtitle: "Safe and effective ear hygiene",
            description: "Doctor-trusted formulations for wax removal, comfort, and infection prevention. Gentle yet effective solution for complete ear health.",
            features: ["Gentle formula", "Pain-free cleansing", "Clinically tested", "Safe for all ages"],
            image: "/images/olpat.png",
            gradient: "from-purple-50/90 via-pink-50/80 to-rose-50/70",
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 3,
            title: "WoundCare+ Defense",
            category: "Wound Care",
            subtitle: "Rapid healing and protection",
            description: "Advanced antiseptic blends for faster recovery and scar reduction. Specially designed for sensitive skin with powerful healing properties.",
            features: ["Antiseptic protection", "Scar reduction", "Fast healing", "Skin-friendly"],
            image: "/images/tobran.png",
            gradient: "from-emerald-50/90 via-green-50/80 to-lime-50/70",
            color: "from-emerald-500 to-green-500"
        },
        {
            id: 4,
            title: "NasalPure Relief",
            category: "Nasal Care",
            subtitle: "Clear, gentle breathing",
            description: "Saline-powered nasal care that keeps airways clear, balanced, and comfortable. Natural relief without dependency or side effects.",
            features: ["Natural saline", "Non-addictive", "Instant relief", "Moisturizing"],
            image: "/images/moxel.png",
            gradient: "from-orange-50/90 via-amber-50/80 to-yellow-50/70",
            color: "from-orange-500 to-amber-500"
        }
    ]

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % products.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [products.length])

    return (
        <section id="products" className="relative h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-24 px-6 pb-6 flex flex-col">
            {/* Featured Products Header */}
            <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-tight tracking-tight">
                    Featured <span className="bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">Products</span>
                </h2>
            </div>

            {/* Full Width Cards Container */}
            <div className="relative flex-1 w-full overflow-hidden rounded-2xl shadow-2xl">
                <AnimatePresence mode="wait">
                    <ProductCard 
                        key={currentIndex} 
                        product={products[currentIndex]} 
                        index={currentIndex}
                    />
                </AnimatePresence>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentIndex 
                                        ? 'w-12 h-3 bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808]' 
                                        : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={() => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg hover:scale-110 transition-transform flex items-center justify-center z-50"
                    >
                        <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setCurrentIndex((prev) => (prev + 1) % products.length)}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg hover:scale-110 transition-transform flex items-center justify-center z-50"
                    >
                        <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
        </section>
    )
}

export default ProductsSection
