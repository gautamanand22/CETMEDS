import React, { useEffect, useRef } from 'react'
import NavBar from './components/NavBar'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const products = [
    {
        id: 1,
        title: "OpticClear Professional",
        category: "Eye Care",
        subtitle: "Premium preservative-free eye drops",
        description: "Clinically engineered eye drops for soothing hydration, clarity, and all-day protection. Formulated with advanced lubricants for digital eye strain.",
        features: ["Preservative-free formula", "Long-lasting hydration", "FDA approved", "Safe for contact lenses"],
        image: "/images/olpat.png",
    },
    {
        id: 2,
        title: "EarGuard Advanced",
        category: "Ear Care",
        subtitle: "Safe and effective ear hygiene",
        description: "Doctor-trusted formulations for wax removal, comfort, and infection prevention. Gentle yet effective solution for all ages.",
        features: ["Clinically tested", "Pain-free application", "Natural ingredients", "Pediatric safe"],
        image: "/images/tobran.png",
    },
    {
        id: 3,
        title: "WoundCare+ Defense",
        category: "Wound Care",
        subtitle: "Rapid healing and protection",
        description: "Advanced antiseptic blends for faster recovery and scar reduction, designed for sensitive skin with antimicrobial properties.",
        features: ["Accelerated healing", "Scar reduction", "Antimicrobial shield", "Dermatologist tested"],
        image: "/images/olpat.png",
    },
    {
        id: 4,
        title: "NasalPure Relief",
        category: "Nasal Care",
        subtitle: "Clear, gentle breathing",
        description: "Saline-powered nasal care that keeps airways clear, balanced, and comfortable. Perfect for allergies and congestion.",
        features: ["Isotonic solution", "Non-addictive", "Drug-free relief", "All-natural formula"],
        image: "/images/moxel.png",
    },
    {
        id: 5,
        title: "VisionClear Plus",
        category: "Eye Care",
        subtitle: "Enhanced visual comfort",
        description: "Advanced formula for dry eye relief with extended moisture retention and reduced eye fatigue for screen users.",
        features: ["12-hour protection", "Blue light defense", "Instant relief", "Ophthalmologist approved"],
        image: "/images/moxel.png",
    },
    {
        id: 6,
        title: "AudiGuard Pro",
        category: "Ear Care",
        subtitle: "Professional ear protection",
        description: "Premium ear care solution designed for musicians and professionals. Provides superior cleaning and protection.",
        features: ["Professional grade", "pH balanced", "Gentle formula", "Musician approved"],
        image: "/images/tobran.png",
    },
    {
        id: 7,
        title: "HealFast Gel",
        category: "Wound Care",
        subtitle: "Advanced wound treatment",
        description: "Quick-absorbing gel that promotes faster healing while minimizing scarring. Suitable for cuts, burns, and abrasions.",
        features: ["Fast absorption", "Minimal scarring", "Waterproof seal", "Pain relief"],
        image: "/images/olpat.png",
    },
    {
        id: 8,
        title: "SinusClear Max",
        category: "Nasal Care",
        subtitle: "Maximum sinus relief",
        description: "Powerful yet gentle nasal spray for severe congestion and sinus pressure. Provides instant relief without rebound effect.",
        features: ["Maximum strength", "No rebound", "Fast acting", "Long-lasting relief"],
        image: "/images/moxel.png",
    },
    {
        id: 9,
        title: "OptiMoist Ultra",
        category: "Eye Care",
        subtitle: "Ultra-hydrating eye care",
        description: "Ultra-concentrated formula for severe dry eye conditions. Provides intensive moisture therapy and corneal protection.",
        features: ["Ultra-hydrating", "Corneal protection", "Extended wear", "Clinical strength"],
        image: "/images/olpat.png",
    },
    {
        id: 10,
        title: "EarSafe Daily",
        category: "Ear Care",
        subtitle: "Daily ear maintenance",
        description: "Gentle daily ear care solution for hygiene and comfort. Perfect for routine maintenance and prevention.",
        features: ["Daily use safe", "Gentle cleansing", "Prevents buildup", "Family friendly"],
        image: "/images/tobran.png",
    },
    {
        id: 11,
        title: "SkinGuard Antiseptic",
        category: "Wound Care",
        subtitle: "Powerful antiseptic protection",
        description: "Hospital-grade antiseptic solution for wound cleaning and infection prevention. Trusted by healthcare professionals.",
        features: ["Hospital grade", "Broad spectrum", "Fast acting", "No sting formula"],
        image: "/images/moxel.png",
    },
    {
        id: 12,
        title: "AllergyShield Nasal",
        category: "Nasal Care",
        subtitle: "Allergy season defense",
        description: "Specialized nasal spray for allergy sufferers. Creates a protective barrier against allergens while providing relief.",
        features: ["Allergy barrier", "Seasonal relief", "Non-drowsy", "Natural defense"],
        image: "/images/olpat.png",
    },
    {
        id: 13,
        title: "NightVision Drops",
        category: "Eye Care",
        subtitle: "Nighttime eye comfort",
        description: "Specially formulated for nighttime use. Provides long-lasting moisture and reduces morning eye discomfort.",
        features: ["Night formula", "Morning comfort", "Extra viscosity", "Sleep friendly"],
        image: "/images/tobran.png",
    },
    {
        id: 14,
        title: "TinnitusRelief Ear",
        category: "Ear Care",
        subtitle: "Tinnitus management",
        description: "Innovative solution for tinnitus relief. Reduces ear ringing and provides soothing comfort for chronic sufferers.",
        features: ["Tinnitus relief", "Soothing comfort", "Natural ingredients", "Audiologist recommended"],
        image: "/images/moxel.png",
    },
    {
        id: 15,
        title: "BurnCare Advanced",
        category: "Wound Care",
        subtitle: "Specialized burn treatment",
        description: "Advanced burn care gel with cooling effect and accelerated healing properties. Suitable for minor to moderate burns.",
        features: ["Cooling relief", "Burn specialist", "Reduces pain", "Prevents infection"],
        image: "/images/olpat.png",
    },
    {
        id: 16,
        title: "DecongestMax Pro",
        category: "Nasal Care",
        subtitle: "Professional decongestant",
        description: "Professional-strength nasal decongestant for severe stuffiness. Fast-acting formula provides instant breathing relief.",
        features: ["Professional strength", "Instant relief", "No drowsiness", "Safe for travel"],
        image: "/images/tobran.png",
    },
    {
        id: 17,
        title: "ContactComfort Plus",
        category: "Eye Care",
        subtitle: "Contact lens solution",
        description: "Complete contact lens care solution with enhanced comfort formula. Cleans, disinfects, and moisturizes in one step.",
        features: ["All-in-one solution", "Enhanced comfort", "Protein removal", "Multi-purpose"],
        image: "/images/moxel.png",
    },
    {
        id: 18,
        title: "SwimEar Protection",
        category: "Ear Care",
        subtitle: "Swimmer's ear prevention",
        description: "Protective ear drops for swimmers. Prevents swimmer's ear and removes trapped water efficiently.",
        features: ["Swimmer's defense", "Water removal", "Infection prevention", "Pool safe"],
        image: "/images/olpat.png",
    },
    {
        id: 19,
        title: "ScarFade Pro",
        category: "Wound Care",
        subtitle: "Scar reduction therapy",
        description: "Advanced scar reduction treatment for both old and new scars. Clinically proven to improve appearance over time.",
        features: ["Scar reduction", "Clinical proven", "Works on old scars", "Silicone-based"],
        image: "/images/tobran.png",
    },
    {
        id: 20,
        title: "NasalMoist Daily",
        category: "Nasal Care",
        subtitle: "Daily nasal moisture",
        description: "Gentle saline mist for daily nasal moisture. Prevents dryness and keeps nasal passages healthy all day.",
        features: ["Daily moisture", "Prevents dryness", "Gentle mist", "Travel size"],
        image: "/images/moxel.png",
    }
]

const CataloguePage = () => {
    const timelineRef = useRef(null)

    useEffect(() => {
        const items = gsap.utils.toArray('.timeline-item')
        
        items.forEach((item, index) => {
            const image = item.querySelector('.product-image')
            const content = item.querySelector('.product-content')
            
            gsap.fromTo(image, 
                { 
                    opacity: 0,
                    scale: 0.8,
                    rotation: index % 2 === 0 ? -15 : 15
                },
                {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 70%',
                        end: 'top 30%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            gsap.fromTo(content,
                {
                    opacity: 0,
                    x: index % 2 === 0 ? 50 : -50
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 70%',
                        end: 'top 30%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
            <NavBar />

            {/* Hero Header */}
            <header className="pt-32 pb-20 text-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#ff9933]/20 via-white to-transparent" />
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                }} />
                
                <div className="relative max-w-5xl mx-auto space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/98 backdrop-blur-2xl border border-slate-200/60 rounded-full shadow-lg shadow-slate-900/10"
                    >
                        <span className="text-xs font-bold bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent uppercase tracking-wider">Complete Product Range</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 leading-tight tracking-tight"
                        style={{
                            textShadow: '0 2px 20px rgba(255, 255, 255, 0.4)'
                        }}
                    >
                        Our Product Catalogue
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto"
                    >
                        Discover our comprehensive range of 20+ medical formulations, each crafted with precision and care for optimal patient outcomes.
                    </motion.p>
                </div>
            </header>

            {/* Timeline Section */}
            <main ref={timelineRef} className="relative w-full pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Center Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-[#ff9933] via-[#2563eb] to-[#138808] opacity-30 hidden lg:block" />
                    
                    {/* Timeline Items */}
                    <div className="space-y-24">
                        {products.map((product, index) => {
                            const isEven = index % 2 === 0
                            
                            return (
                                <div key={product.id} className="timeline-item relative">
                                    {/* Center Dot */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block z-20">
                                        <div className="relative">
                                            <div className="w-6 h-6 rounded-full bg-white border-4 border-[#2563eb] shadow-lg shadow-blue-500/50" />
                                            <div className="absolute inset-0 w-6 h-6 rounded-full bg-[#2563eb] animate-ping opacity-75" />
                                        </div>
                                    </div>

                                    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:direction-rtl'}`}>
                                        {/* Product Image */}
                                        <motion.div 
                                            className={`product-image ${isEven ? 'lg:justify-self-end' : 'lg:justify-self-start lg:order-2'}`}
                                        >
                                            <div className="relative w-full max-w-md mx-auto lg:mx-0">
                                                {/* Glow effect */}
                                                <div className="absolute -inset-8 bg-gradient-to-br from-[#ff9933]/20 via-[#2563eb]/20 to-[#138808]/20 rounded-[3rem] blur-3xl opacity-60" />
                                                
                                                {/* Image container */}
                                                <div className="relative aspect-[4/5] bg-gradient-to-br from-white/90 via-white/70 to-white/60 backdrop-blur-xl rounded-3xl border border-white/40 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] overflow-hidden p-8">
                                                    <img 
                                                        src={product.image} 
                                                        alt={product.title}
                                                        className="w-full h-full object-contain drop-shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
                                                    />
                                                    
                                                    {/* Category badge */}
                                                    <div className="absolute top-4 left-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-lg">
                                                        <span className="text-xs font-bold bg-gradient-to-r from-[#ff9933] to-[#138808] bg-clip-text text-transparent">{product.category}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Product Content */}
                                        <motion.div 
                                            className={`product-content space-y-6 ${isEven ? '' : 'lg:order-1'}`}
                                        >
                                            <div className="space-y-3">
                                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/98 border border-slate-200/60 rounded-full shadow-md">
                                                    <span className="text-xs font-bold text-slate-600">Product #{String(index + 1).padStart(2, '0')}</span>
                                                </div>
                                                
                                                <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
                                                    {product.title}
                                                </h2>
                                                
                                                <p className="text-lg font-semibold text-slate-700">
                                                    {product.subtitle}
                                                </p>
                                            </div>

                                            <p className="text-base text-slate-600 leading-relaxed">
                                                {product.description}
                                            </p>

                                            {/* Features */}
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {product.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <svg className="w-5 h-5 text-[#138808] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-sm text-slate-700 font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA Buttons */}
                                            <div className="flex flex-wrap gap-3 pt-2">
                                                <button className="px-6 py-3 bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                                    View Details
                                                </button>
                                                <button className="px-6 py-3 bg-white text-slate-900 font-bold text-sm rounded-full border-2 border-slate-900 shadow-lg hover:bg-slate-900 hover:text-white hover:scale-105 transition-all duration-300">
                                                    Request Sample
                                                </button>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CataloguePage
