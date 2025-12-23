import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ProductsSection = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])

    const products = [
        {
            id: 1,
            title: "OpticClear Professional",
            category: "Eye Care",
            subtitle: "Premium eye care solutions",
            description: "Clinically engineered eye drops for soothing hydration, clarity, and all-day protection. Preservative-free formula trusted by ophthalmologists worldwide.",
            features: ["Preservative-free", "Fast-acting relief", "Doctor recommended", "Long-lasting hydration"],
            image: "/images/moxel.png",
            gradient: "from-blue-50 via-cyan-50 to-teal-50",
            color: "from-blue-500 to-cyan-500",
            accentColor: "#3b82f6"
        },
        {
            id: 2,
            title: "EarGuard Advanced",
            category: "Ear Care",
            subtitle: "Safe and effective ear hygiene",
            description: "Doctor-trusted formulations for wax removal, comfort, and infection prevention. Gentle yet effective solution for complete ear health.",
            features: ["Gentle formula", "Pain-free cleansing", "Clinically tested", "Safe for all ages"],
            image: "/images/olpat.png",
            gradient: "from-purple-50 via-pink-50 to-rose-50",
            color: "from-purple-500 to-pink-500",
            accentColor: "#a855f7"
        },
        {
            id: 3,
            title: "WoundCare+ Defense",
            category: "Wound Care",
            subtitle: "Rapid healing and protection",
            description: "Advanced antiseptic blends for faster recovery and scar reduction. Specially designed for sensitive skin with powerful healing properties.",
            features: ["Antiseptic protection", "Scar reduction", "Fast healing", "Skin-friendly"],
            image: "/images/tobran.png",
            gradient: "from-emerald-50 via-green-50 to-lime-50",
            color: "from-emerald-500 to-green-500",
            accentColor: "#10b981"
        },
        {
            id: 4,
            title: "NasalPure Relief",
            category: "Nasal Care",
            subtitle: "Clear, gentle breathing",
            description: "Saline-powered nasal care that keeps airways clear, balanced, and comfortable. Natural relief without dependency or side effects.",
            features: ["Natural saline", "Non-addictive", "Instant relief", "Moisturizing"],
            image: "/images/moxel.png",
            gradient: "from-orange-50 via-amber-50 to-yellow-50",
            color: "from-orange-500 to-amber-500",
            accentColor: "#f97316"
        }
    ]

    useEffect(() => {
        const cards = cardsRef.current

        // Stacking animation
        cards.forEach((card, index) => {
            const isLast = index === cards.length - 1

            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top top',
                    end: isLast ? '+=0' : '+=100%',
                    pin: !isLast,
                    pinSpacing: false,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
                scale: isLast ? 1 : 0.95,
                opacity: isLast ? 1 : 0.8,
                ease: 'none',
            })
        })

        // Parallax effect for content inside cards
        cards.forEach((card, index) => {
            const content = card.querySelector('.card-content')
            const image = card.querySelector('.card-image')

            if (content) {
                gsap.fromTo(
                    content,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 60%',
                            end: 'top 30%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                )
            }

            if (image) {
                gsap.fromTo(
                    image,
                    { opacity: 0, scale: 0.8, rotation: -5 },
                    {
                        opacity: 1,
                        scale: 1,
                        rotation: 0,
                        duration: 1,
                        ease: 'back.out(1.2)',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 60%',
                            end: 'top 30%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                )
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <section
            id="products"
            ref={sectionRef}
            className="relative py-20 overflow-hidden"
            style={{ minHeight: `${products.length * 100}vh` }}
        >
            {/* Section Header */}
            <div className="sticky top-20 z-10 text-center mb-12 pt-8 pb-4 bg-white/80 backdrop-blur-md">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 leading-tight tracking-tight">
                    Our <span className="bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">Premium Products</span>
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto px-4">
                    Discover our range of clinically proven, professionally trusted healthcare solutions
                </p>
            </div>

            {/* Stacking Cards */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="relative mb-8 h-screen flex items-center justify-center"
                        style={{ zIndex: products.length - index }}
                    >
                        <div className={`w-full max-w-6xl bg-gradient-to-br ${product.gradient} rounded-3xl shadow-2xl overflow-hidden border border-white/20`}>
                            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
                                {/* Content */}
                                <div className="card-content space-y-6">
                                    {/* Category Badge */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg">
                                        <div
                                            className="w-2 h-2 rounded-full"
                                            style={{ background: product.accentColor }}
                                        />
                                        <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                                            {product.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                                        {product.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">
                                        {product.subtitle}
                                    </p>

                                    {/* Description */}
                                    <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                                        {product.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-3 pt-4">
                                        {product.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-slate-800">
                                                <div
                                                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${product.accentColor}, #138808)`,
                                                    }}
                                                >
                                                    <svg
                                                        className="w-3 h-3 text-white"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <span className="font-semibold">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-wrap gap-4 pt-6">
                                        <button
                                            onClick={() => {
                                                if (
                                                    window.location.hostname === 'cetmeds.com' ||
                                                    window.location.hostname.includes('github.io')
                                                ) {
                                                    window.location.assign('/?/catalogue')
                                                } else {
                                                    window.location.assign('/catalogue')
                                                }
                                            }}
                                            className="px-8 py-3 bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] text-white font-bold text-sm rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                                        >
                                            <span>View Details</span>
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2.5}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </button>
                                        <button className="px-8 py-3 bg-white/90 backdrop-blur-xl border-2 border-slate-300 text-slate-900 font-bold text-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
                                            Request Sample
                                        </button>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="relative card-image">
                                    <div className="relative w-full aspect-square max-h-[500px] mx-auto">
                                        {/* Glow effect */}
                                        <div
                                            className="absolute -inset-12 rounded-full blur-3xl opacity-30 animate-pulse"
                                            style={{
                                                background: `linear-gradient(135deg, ${product.accentColor}, #138808)`,
                                            }}
                                        />

                                        {/* Card container */}
                                        <div className="relative h-full bg-white/80 backdrop-blur-2xl border-2 border-white/60 rounded-3xl shadow-2xl p-8 overflow-hidden">
                                            {/* Decorative gradients */}
                                            <div
                                                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                                                style={{
                                                    background: `linear-gradient(135deg, ${product.accentColor}, transparent)`,
                                                }}
                                            />
                                            <div
                                                className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl opacity-20"
                                                style={{
                                                    background: `linear-gradient(225deg, ${product.accentColor}, transparent)`,
                                                }}
                                            />

                                            {/* Product image */}
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="relative w-full h-full object-contain drop-shadow-2xl"
                                            />

                                            {/* Badges */}
                                            <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full border border-white/40 shadow-lg">
                                                <span className="text-xs font-bold bg-gradient-to-r from-[#ff9933] to-[#138808] bg-clip-text text-transparent">
                                                    Premium Quality
                                                </span>
                                            </div>
                                            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full border border-white/40 shadow-lg">
                                                <span className="text-xs font-bold text-slate-900">
                                                    FDA Approved
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Number badge */}
                            <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/95 backdrop-blur-sm border-2 border-slate-200 shadow-lg flex items-center justify-center">
                                <span
                                    className="text-2xl font-black bg-gradient-to-br bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage: `linear-gradient(135deg, ${product.accentColor}, #138808)`,
                                    }}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Products Button */}
            <div className="sticky bottom-8 z-20 text-center mt-12">
                <button
                    onClick={() => {
                        if (
                            window.location.hostname === 'cetmeds.com' ||
                            window.location.hostname.includes('github.io')
                        ) {
                            window.location.assign('/?/catalogue')
                        } else {
                            window.location.assign('/catalogue')
                        }
                    }}
                    className="px-10 py-4 bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center gap-3 mx-auto"
                >
                    <span>View All Products</span>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default ProductsSection
