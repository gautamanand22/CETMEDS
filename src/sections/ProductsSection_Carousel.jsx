import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ProductCard = ({ product, index, totalCards }) => {
    const cardRef = useRef(null)
    
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "start start"]
    })

    // Calculate scale and opacity based on scroll position
    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [0.9, 1]
    )

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0, 0.5, 1]
    )

    // Sticky positioning offset for stacking effect
    const stickyTop = index * 20 // Each card sticks 20px lower than the previous one

    return (
        <motion.div
            ref={cardRef}
            style={{
                scale,
                opacity,
                top: `${stickyTop}px`,
                zIndex: totalCards - index
            }}
            className="sticky mb-8"
        >
            <div className="relative h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12">
                <div className="w-full max-w-7xl mx-auto">
                    {/* Card Background with Gradient */}
                    <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${product.gradient} backdrop-blur-xl border border-white/30 shadow-2xl`}>
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-16 items-center">
                            {/* Left Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                {/* Category Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg">
                                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.color}`} />
                                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">{product.category}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                                    {product.title}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">
                                    {product.subtitle}
                                </p>

                                {/* Description */}
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Features Grid */}
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    {product.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-sm text-slate-800">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#138808] to-[#2563eb] flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="font-semibold">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap gap-4 pt-6">
                                    <button
                                        onClick={() => window.location.assign('/catalogue')}
                                        className="px-8 py-4 bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] text-white font-bold text-sm rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                                    >
                                        <span>View Details</span>
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                    <button className="px-8 py-4 bg-white/90 backdrop-blur-xl border border-slate-200 text-slate-900 font-bold text-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
                                        Request Sample
                                    </button>
                                </div>
                            </motion.div>

                            {/* Right - Product Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="relative aspect-[4/5] max-h-[600px]">
                                    {/* Glow effect */}
                                    <div className={`absolute -inset-10 bg-gradient-to-br ${product.color} rounded-3xl blur-3xl opacity-30 animate-pulse`} />
                                    
                                    {/* Product card */}
                                    <div className="relative h-full bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-8 overflow-hidden">
                                        {/* Decorative elements */}
                                        <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${product.color} rounded-full blur-3xl opacity-20`} />
                                        <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${product.color} rounded-full blur-2xl opacity-20`} />
                                        
                                        {/* Product image */}
                                        <img 
                                            src={product.image}
                                            alt={product.title}
                                            className="relative w-full h-full object-contain drop-shadow-[0_25px_70px_rgba(0,0,0,0.2)]"
                                        />

                                        {/* Floating badges */}
                                        <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full border border-white/40 shadow-lg">
                                            <span className="text-xs font-bold bg-gradient-to-r from-[#ff9933] to-[#138808] bg-clip-text text-transparent">Premium Quality</span>
                                        </div>
                                        <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full border border-white/40 shadow-lg">
                                            <span className="text-xs font-bold text-slate-900">FDA Approved</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Card number indicator */}
                        <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 shadow-lg flex items-center justify-center">
                            <span className="text-lg font-black bg-gradient-to-r from-[#ff9933] to-[#138808] bg-clip-text text-transparent">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const ProductsSection = () => {
    const sectionRef = useRef(null)

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

    return (
        <section
            ref={sectionRef}
            id="products"
            className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
        >
            {/* Section Header - Fixed at top */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 py-8">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/98 backdrop-blur-2xl border border-slate-200/60 rounded-full shadow-lg shadow-slate-900/10 mb-3"
                        >
                            <span className="text-xs font-bold bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent uppercase tracking-wider">Our Product Range</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-tight tracking-tight mb-3"
                        >
                            Featured <span className="bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">Products</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto"
                        >
                            Scroll down to explore our flagship formulations designed for optimal patient outcomes
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Stacking Cards */}
            <div className="relative pt-8 pb-32">
                {products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        index={index}
                        totalCards={products.length}
                    />
                ))}
            </div>

            {/* Bottom spacing */}
            <div className="h-32" />
        </section>
    )
}

export default ProductsSection
