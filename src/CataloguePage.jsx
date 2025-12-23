import React, { useEffect, useRef } from 'react'
import NavBar from './components/NavBar'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
    },
    {
        id: 2,
        title: "Vital-O",
        category: "Eye Care",
        subtitle: "In Macular Degeneration & Diabetic Retinopathy",
        description: "Vital-O offers the convenience of a small size soft gelatin capsule for Increased bio-availability Ease of Swallowing",
        features: ["Lutein (3.2 mg.)", "Zeaxanthin (256 mcg)", "L-glutathione (5 mg)", "Beta-carotene (6000 I.U.)", "Zinc, Copper, Maganese & Selenium"],
        image: "/images/vital-o.png",
    },
    {
        id: 3,
        title: "ROTOWAX",
        category: "Ear Care",
        subtitle: "To remove hard impacted wax",
        description: "(Paradichlorobenze,Benzocain, Chlorbutol&T urpentineOil)EarDrop. The impacted wax softener to remove excessimpacted wax",
        features: ["Benzocaine- For local pain relief", "Tuprentine Oil - For lubrication", "Paradichlorobenzene - For softening &dispering impactedwax", "Chlorbutol - For anti-bacterial &Anti-fungalactivity"],
        image: "/images/rotowax.png",
    },
    {
        id: 4,
        title: "OFF TEAR",
        category: "Eye Care",
        subtitle: "To retain & provide the required lubrication. The better way to wet eyes dry",
        description: "The better way to wet eyes dry",
        features: ["Carboxymethylcellulose in OFF TEAR. Mimicsthe mucinlayer in natural tears1", "Providesbetter lubrication, protection & clinical efficacyfor longer period unlike other polymers2", "Provides better lubrication, protection & clinical efficacy for longer period unlike other polymers2", "In dryness associated with Contact lens wear Old age CVS Post LASIK"],
        image: "/images/.jpg",
    },
    {
        id: 5,
        title: "CLOTIC",
        category: "Ear Care",
        subtitle: "Bacterial & Fungi in Mixed otic infection. Keep mixed otic infections under control",
        description: "(Ofloxacin0.3% w/v+ Clotrimazole1% w/v+ Lignocaine 2% w/v+ Beclomethasone0.025% w/v)EarDrops",
        features: ["Ofloxacin shows higher susceptibility against P. aeruginosa & S. aureus1", "Ofloxacin shows no ototoxicity2", "Clotic also offers advantage ofcombining Clotrimazole - For anti-fungal action", "Lignocaine - For relieving pain Beclomethasone- For relieving inflamation"],
        image: "/images/clotic.png",
    },
    {
        id: 6,
        title: "OFF TEAR PLUS",
        category: "Eye Care",
        subtitle: "In Servere dry eye syndrome. Keep sever dry eye wetted deeply",
        description: "Improve degree of corneal surface wettability and the tear intergrity with higher % improvement in CMC1. In dryness associated with",
        features: ["Post Catract Surgery", "Post LASIK", "Computer Vision Syndrome", "SOC in OFF TEAR PLUS"],
        image: "/images/offtearplus.png",
    },
    {
        id: 7,
        title: "MOXEL",
        category: "Antibiotic Care",
        subtitle: "For BETTER COVERAGE against ocular pathogens. Wide Coverage ocular antibiotic",
        description: "Offer wide coverage Ofloxacin (Flox-O) is protent against wide range of gram-positive gram-negative & obligate anaerobes1 Effective in conjunctivitis & corneal ulcers Ofloxacin (Flox-O) achieves concentration well above the MIC90 of majority of bacteria responsible for conjunctivitis & corneal ulceration2",
        features: ["Conjunctivitis", "Corneal Ulcers", "Waterproof seal", "Pain relief"],
        image: "/images/moxel.png",
    },
    {
        id: 8,
        title: "MOXEL-LP",
        category: "Nasal Care",
        subtitle: "Up against infections & inflammation",
        description: "Causes less significantelevation in IOPthan prednisolone1, Lowrisk of cataractogenesis2, Good ocularpermeation properties3",
        features: ["MOXIFLOXACIN - The smart Antibiotic", "LOTEPREDNOL - Safer than Prednisolone", "Fast acting", "Long-lasting relief"],
        image: "/images/moxellp.png",
    },
    {
        id: 9,
        title: "MOXEL-K",
        category: "Eye Care",
        subtitle: "For Outstanding result in treatment of Infections & Inflammation",
        description: "Better penetration into ocular tissues 'Better mutant prevention characteristics' Low risk of recognized fluoroquinolone-related toxicity'",
        features: ["OXIFLOXACIN Better than older fluoroquinolones", "KETOROLAC A safe & effective alternative to steroids", "© Pre & Post-operative conditions", "Conjunctivitis"],
        image: "/images/moxelk.png",
    },
    {
        id: 10,
        title: "TOBRAN",
        category: "Ear Care",
        subtitle: "The anti-infective that issuitable for all age",
        description: "Gentle daily ear care solution for hygiene and comfort. Perfect for routine maintenance and prevention.",
        features: ["Daily use safe", "Gentle cleansing", "Prevents buildup", "Family friendly"],
        image: "/images/tobran.png",
    },
    {
        id: 11,
        title: "MOXEL-D",
        category: "Wound Care",
        subtitle: "Powerful antiseptic protection",
        description: "The touch yet gentle antibiotic the well tolerated Aminoglyloside",
        features: ["Hospital grade", "Broad spectrum", "Fast acting", "No sting formula"],
        image: "/images/moxeld.png",
    },
    {
        id: 12,
        title: "OFF TEAR ULTRA",
        category: "Eye Care",
        subtitle: "Allergy season defense",
        description: "Specialized nasal spray for allergy sufferers. Creates a protective barrier against allergens while providing relief.",
        features: ["Allergy barrier", "Seasonal relief", "Non-drowsy", "Natural defense"],
        image: "/images/offtearultra.png",
    },
    {
        id: 13,
        title: "TOBRAN-F",
        category: "Eye Care",
        subtitle: "Nighttime eye comfort",
        description: "Specially formulated for nighttime use. Provides long-lasting moisture and reduces morning eye discomfort.",
        features: ["Night formula", "Morning comfort", "Extra viscosity", "Sleep friendly"],
        image: "/images/tobranf.png",
    },
    {
        id: 14,
        title: "MOXEL-BF",
        category: "Eye Care",
        subtitle: "Tinnitus management",
        description: "Innovative solution for tinnitus relief. Reduces ear ringing and provides soothing comfort for chronic sufferers.",
        features: ["Tinnitus relief", "Soothing comfort", "Natural ingredients", "Audiologist recommended"],
        image: "/images/moxelbf.png",
    },
    {
        id: 15,
        title: "OLPAT-KT",
        category: "Eye Care",
        subtitle: "Specialized burn treatment",
        description: "Advanced burn care gel with cooling effect and accelerated healing properties. Suitable for minor to moderate burns.",
        features: ["Cooling relief", "Burn specialist", "Reduces pain", "Prevents infection"],
        image: "/images/olpatkt.png",
    },
    {
        id: 16,
        title: "OFFTEAR-HYLO",
        category: "Eye Care",
        subtitle: "Professional decongestant",
        description: "Professional-strength nasal decongestant for severe stuffiness. Fast-acting formula provides instant breathing relief.",
        features: ["Professional strength", "Instant relief", "No drowsiness", "Safe for travel"],
        image: "/images/offtearhylo.png",
    },
    {
        id: 17,
        title: "MOXEL-TM",
        category: "Eye Care",
        subtitle: "Contact lens solution",
        description: "Complete contact lens care solution with enhanced comfort formula. Cleans, disinfects, and moisturizes in one step.",
        features: ["All-in-one solution", "Enhanced comfort", "Protein removal", "Multi-purpose"],
        image: "/images/moxeltm.png",
    },
    {
        id: 18,
        title: "NOPHINE",
        category: "Eye Care",
        subtitle: "Swimmer's ear prevention",
        description: "Protective ear drops for swimmers. Prevents swimmer's ear and removes trapped water efficiently.",
        features: ["Swimmer's defense", "Water removal", "Infection prevention", "Pool safe"],
        image: "/images/nophine.png",
    },
    {
        id: 19,
        title: "NENAC",
        category: "Wound Care",
        subtitle: "Scar reduction therapy",
        description: "Advanced scar reduction treatment for both old and new scars. Clinically proven to improve appearance over time.",
        features: ["Scar reduction", "Clinical proven", "Works on old scars", "Silicone-based"],
        image: "/images/nenac.png",
    },
    {
        id: 20,
        title: "OPIDO",
        category: "Nasal Care",
        subtitle: "Daily nasal moisture",
        description: "Gentle saline mist for daily nasal moisture. Prevents dryness and keeps nasal passages healthy all day.",
        features: ["Daily moisture", "Prevents dryness", "Gentle mist", "Travel size"],
        image: "/images/opido.png",
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
