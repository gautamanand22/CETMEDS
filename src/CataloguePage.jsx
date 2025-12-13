import React from 'react'
import NavBar from './components/NavBar'
import { motion } from 'framer-motion'

const slides = [
    {
        id: 1,
        title: "OpticClear Professional",
        subtitle: "Premium eye care solutions",
        description: "Clinically engineered eye drops for soothing hydration, clarity, and all-day protection.",
        image: "/images/olpat.png",
        gradient: "from-[#5a3319]/92 via-[#9b5c2a]/88 to-[#d8863c]/85"
    },
    {
        id: 2,
        title: "EarGuard Advanced",
        subtitle: "Safe and effective ear hygiene",
        description: "Doctor-trusted formulations for wax removal, comfort, and infection prevention.",
        image: "/images/tobran.png",
        gradient: "from-[#1a2947]/92 via-[#28456f]/88 to-[#3b6ba4]/85"
    },
    {
        id: 3,
        title: "WoundCare+ Defense",
        subtitle: "Rapid healing and protection",
        description: "Advanced antiseptic blends for faster recovery and scar reduction, designed for sensitive skin.",
        image: "/images/olpat.png",
        gradient: "from-[#1b2b44]/90 via-[#224160]/86 to-[#2e5678]/82"
    },
    {
        id: 4,
        title: "NasalPure Relief",
        subtitle: "Clear, gentle breathing",
        description: "Saline-powered nasal care that keeps airways clear, balanced, and comfortable.",
        image: "/images/moxel.png",
        gradient: "from-[#0c1c30]/90 via-[#153151]/85 to-[#1f4163]/90"
    }
]

const CataloguePage = () => {
    return (
    <div className="min-h-screen bg-slate-900 text-white">
            <NavBar />

            <header className="pt-28 pb-16 text-center px-6">
                <div className="max-w-4xl mx-auto space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Explore our wide range of products</h1>
                    <p className="text-lg md:text-xl text-white/85 leading-relaxed">
                        Discover Cetmeds Opal's flagship formulations crafted for eye, ear, ENT, and wound care—engineered for clinicians, trusted by patients.
                    </p>
                </div>
            </header>

            <main className="relative w-full pb-24">
                <div className="relative">
                    {slides.map((slide, idx) => {
                        const isEven = idx % 2 === 0
                        return (
                            <motion.section
                                key={slide.id}
                                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.45 }}
                                transition={{ duration: 0.75, ease: 'easeOut' }}
                                className={`relative w-full bg-gradient-to-br ${slide.gradient} overflow-hidden min-h-0 py-0`}
                                style={{ zIndex: slides.length - idx }}
                            >
                                <div className="grid md:grid-cols-2 items-center max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-8 md:py-10 gap-0 md:gap-10 relative">
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.45 }}
                                        transition={{ duration: 0.7, ease: 'easeOut' }}
                                        className={`${isEven ? 'order-1' : 'order-2'} space-y-4`}
                                    >
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full text-sm font-semibold">
                                            {slide.subtitle}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">{slide.title}</h2>
                                        <p className="text-lg text-white/90 leading-relaxed max-w-xl">{slide.description}</p>
                                        <div className="flex flex-wrap gap-3 pt-2">
                                            {['Clinically Tested', 'Patient Preferred', 'Quality Assured'].map(tag => (
                                                <span key={tag} className="px-4 py-2 rounded-full bg-white/12 border border-white/25 text-sm font-medium backdrop-blur-sm">{tag}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.45 }}
                                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
                                        className={`${isEven ? 'order-2' : 'order-1'} relative flex justify-center`}
                                    >
                                        <div className="relative w-full max-w-md aspect-[3/4]">
                                            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/15 rounded-3xl shadow-2xl shadow-black/25" />
                                            <motion.img
                                                key={slide.image}
                                                initial={{ scale: 0.98, opacity: 0.9 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                                src={slide.image}
                                                alt={slide.title}
                                                className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.section>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default CataloguePage
