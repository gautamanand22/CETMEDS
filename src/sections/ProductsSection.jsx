import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const products = [
    {
        id: 1,
        title: "XYLONA",
        category: "Eye Care",
        subtitle: "In nasal congestion, make breathing easy",
        description: "Clinically engineered eye drops for soothing hydration, clarity, and all-day protection. Preservative-free formula trusted by ophthalmologists worldwide.",
        features: ["Gives relief within minutes & lasts upto 10 hrs1", "No rebound swelling recorded after 10 days of using Xylometazoline2", "Does not show signs of rebound swelling", "Provides fast & long-lasting relief"],
        image: "/images/xylona.png",
        gradient: "from-blue-50 via-cyan-50 to-teal-50",
        color: "from-blue-500 to-cyan-500",
        accentColor: "#3b82f6"
    },
    {
        id: 2,
        title: "Vital-O",
        category: "Eye Care",
        subtitle: "In Macular Degeneration & Diabetic Retinopathy",
        description: "Vital-O offers the convenience of a small size soft gelatin capsule for Increased bio-availability Ease of Swallowing",
        features: ["Lutein (3.2 mg.)", "Zeaxanthin (256 mcg)", "L-glutathione (5 mg)", "Beta-carotene (6000 I.U.)", "Zinc, Copper, Maganese & Selenium"],
        image: "/images/olpat.png",
        gradient: "from-purple-50 via-pink-50 to-rose-50",
        color: "from-purple-500 to-pink-500",
        accentColor: "#a855f7"
    },
    {
        id: 3,
        title: "ROTOWAX",
        category: "Ear Care",
        subtitle: "To remove hard impacted wax",
        description: "(Paradichlorobenze,Benzocain, Chlorbutol&T urpentineOil)EarDrop. The impacted wax softener to remove excessimpacted wax",
        features: ["Benzocaine- For local pain relief", "Tuprentine Oil - For lubrication", "Paradichlorobenzene - For softening &dispering impactedwax", "Chlorbutol - For anti-bacterial &Anti-fungalactivity"],
        image: "/images/rotowax.png",
        gradient: "from-emerald-50 via-green-50 to-lime-50",
        color: "from-emerald-500 to-green-500",
        accentColor: "#10b981"
    },
    {
        id: 4,
        title: "OFF TEAR",
        category: "Eye Care",
        subtitle: "To retain & provide the required lubrication. The better way to wet eyes dry",
        description: "The better way to wet eyes dry",
        features: ["Carboxymethylcellulose in OFF TEAR. Mimicsthe mucinlayer in natural tears1", "Providesbetter lubrication, protection & clinical efficacyfor longer period unlike other polymers2", "Provides better lubrication, protection & clinical efficacy for longer period unlike other polymers2", "In dryness associated with Contact lens wear Old age CVS Post LASIK"],
        image: "/images/offtearplus.png",
        gradient: "from-orange-50 via-amber-50 to-yellow-50",
        color: "from-orange-500 to-amber-500",
        accentColor: "#f97316"
    }
]

const ProductCard = ({ product }) => {
    return (
        <div className="w-full h-full">
            <div 
                className={`w-full h-full bg-gradient-to-br ${product.gradient} relative`}
            >
                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center h-full max-w-[1920px] mx-auto">
                    <div className="space-y-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg">
                            <div className="w-2 h-2 rounded-full" style={{ background: product.accentColor }} />
                            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">{product.category}</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                            {product.title}
                        </h3>

                        <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">
                            {product.subtitle}
                        </p>

                        <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 pt-4">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm text-slate-800">
                                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(135deg, ${product.accentColor}, #138808)` }}>
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="font-semibold">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6">
                            <button
                                onClick={() => {
                                    if (window.location.hostname === 'cetmeds.com' || window.location.hostname.includes('github.io')) {
                                        window.location.assign('/?/catalogue')
                                    } else {
                                        window.location.assign('/catalogue')
                                    }
                                }}
                                className="px-8 py-3 bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] text-white font-bold text-sm rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                            >
                                <span>View Details</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="px-8 py-3 bg-white/90 backdrop-blur-xl border-2 border-slate-300 text-slate-900 font-bold text-sm rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
                                Request Sample
                            </button>
                        </div>
                    </div>

                    <div className="relative h-full flex items-center justify-center">
                        <div className="relative w-full aspect-square max-h-[500px] mx-auto">
                            <div className="absolute -inset-12 rounded-full blur-3xl opacity-30 animate-pulse" style={{ background: `linear-gradient(135deg, ${product.accentColor}, #138808)` }} />

                            <div className="relative h-full bg-white/80 backdrop-blur-2xl border-2 border-white/60 rounded-3xl shadow-2xl p-8 overflow-hidden flex items-center justify-center">
                                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ background: `linear-gradient(135deg, ${product.accentColor}, transparent)` }} />
                                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl opacity-20" style={{ background: `linear-gradient(225deg, ${product.accentColor}, transparent)` }} />

                                <img src={product.image} alt={product.title} className="relative w-full h-full object-contain drop-shadow-2xl" />

                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full border border-white/40 shadow-lg">
                                    <span className="text-xs font-bold bg-gradient-to-r from-[#ff9933] to-[#138808] bg-clip-text text-transparent">Premium Quality</span>
                                </div>
                                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full border border-white/40 shadow-lg">
                                    <span className="text-xs font-bold text-slate-900">FDA Approved</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProductsSection = () => {
    const containerRef = useRef(null)
    const cardsRef = useRef([])

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current
            const totalScroll = (cards.length - 1) * 100 // Total scroll distance in percentage

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalScroll}%`,
                    pin: true,
                    scrub: 1,
                }
            })

            cards.forEach((card, index) => {
                if (index === 0) return
                
                tl.fromTo(card, 
                    { yPercent: 100 },
                    { yPercent: 0, ease: "none" }
                )
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section id="products" className="relative bg-gray-50">
            <div className="relative z-10 pt-20 pb-8 text-center bg-gray-50/95 backdrop-blur-sm">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 leading-tight tracking-tight">
                    Featured <span className="bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">Products</span>
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto px-4">
                    Discover our range of clinically proven healthcare solutions
                </p>
            </div>

            <div ref={containerRef} className="h-screen w-full relative overflow-hidden">
                {products.map((product, index) => (
                    <div 
                        key={product.id}
                        ref={el => cardsRef.current[index] = el}
                        className="absolute top-0 left-0 w-full h-full will-change-transform"
                        style={{ zIndex: index + 1 }}
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductsSection
