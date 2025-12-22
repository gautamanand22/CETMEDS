import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, useAnimationFrame } from 'framer-motion'

const DEFAULT_USER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23cbd5e1'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E"

const testimonials = [
    {
        name: 'Dr. A K Rai (Madhubani)',
        role: 'Ophthalmologist',
        text: 'Cetmed provides delivers consistent clarity for post-op patients. Packaging is intuitive and reduces chair time.',
        rating: 5,
        image: DEFAULT_USER_IMAGE
    },
    {
        name: 'Dr. B K Jha (Benipur)',
        role: 'ENT Surgeon, Clinica Vida',
        text: 'EarGuard Advanced is now our default for wax management—patients report less irritation and quicker relief.',
        rating: 5,
        image: DEFAULT_USER_IMAGE
    },
    {
        name: 'Dr. B K Yadav (Simrahi)',
        role: 'Procurement Lead',
        text: 'WoundCare+ Defense gives us reliable outcomes with fewer dressing changes—nursing teams love the workflow fit.',
        rating: 4,
        image: DEFAULT_USER_IMAGE
    },
    {
        name: 'Dr. Raju Bhagat (Madhubani, K S Hospital)',
        role: 'Cornea Specialist, Hua Care',
        text: 'Comfort-first drops that stay consistent across batches—patients notice the difference.',
        rating: 5,
        image: DEFAULT_USER_IMAGE
    },
    {
        name: 'Dr. R N Singh And Dr. Nitish Kumar(Red cross hospital)',
        role: 'Cornea Specialist, Hua Care',
        text: 'Comfort-first drops that stay consistent across batches—patients notice the difference.',
        rating: 5,
        image: DEFAULT_USER_IMAGE
    },
    {
        name: 'Dr. Jai Shree (Astha Eye Care, Hajipur)',
        role: 'Cornea Specialist, Hua Care',
        text: 'Comfort-first drops that stay consistent across batches—patients notice the difference.',
        rating: 5,
        image: DEFAULT_USER_IMAGE
    },
    {
        name: 'Dr. Aniket Kumar (Pragya Netralaya, Hajipur)',
        role: 'Cornea Specialist, Hua Care',
        text: 'Comfort-first drops that stay consistent across batches—patients notice the difference.',
        rating: 5,
        image: DEFAULT_USER_IMAGE
    },
    {
        name: 'Dr. Anil Kumar (Maa Mundeswari Medical Hall, Bhabhua)',
        role: 'Cornea Specialist, Hua Care',
        text: 'Comfort-first drops that stay consistent across batches—patients notice the difference.',
        rating: 5,
        image: DEFAULT_USER_IMAGE
    },
    {
        name: 'Dr. Sachin Kumar ANd Aniket patel (Bhabhua, Gandhikust Niwaran)',
        role: 'Cornea Specialist, Hua Care',
        text: 'Comfort-first drops that stay consistent across batches—patients notice the difference.',
        rating: 5,
        image: DEFAULT_USER_IMAGE
    },
    {
        name: 'Dr. Chandrasekhar (Chainipur)',
        role: 'Cornea Specialist, Hua Care',
        text: 'Comfort-first drops that stay consistent across batches—patients notice the difference.',
        rating: 5,
        image: DEFAULT_USER_IMAGE
    },
    {
        name: 'Dr. Prem Prakash Sinha (Khagaul, Prakash Chasma Ghar)',
        role: 'Cornea Specialist, Hua Care',
        text: 'Comfort-first drops that stay consistent across batches—patients notice the difference.',
        rating: 5,
        image: DEFAULT_USER_IMAGE
    },
    {
        name: 'Dr. Pradeep Kumar (Eyecare, Anishabad)',
        role: 'Cornea Specialist, Hua Care',
        text: 'Comfort-first drops that stay consistent across batches—patients notice the difference.',
        rating: 5,
        image: DEFAULT_USER_IMAGE
    }
]

const duplicated = [...testimonials, ...testimonials]

const wrap = (min, max, v) => {
    const rangeSize = max - min
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const MarqueeRow = ({ children, mouseX, direction = 1, isHovered }) => {
    const baseX = useMotionValue(0)
    const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`)

    useAnimationFrame((t, delta) => {
        if (typeof window === 'undefined') return

        const windowWidth = window.innerWidth
        const center = windowWidth / 2
        const currentMouseX = mouseX.get()
        
        // Calculate distance from center (-1 to 1)
        const relativePos = (currentMouseX - center) / center
        
        let moveBy = 0
        
        if (isHovered) {
            // When hovering, move based on cursor position relative to center
            // Speed increases as you move away from center
            const hoverSpeed = 2.5
            moveBy = relativePos * hoverSpeed * (delta / 1000) * 5
        } else {
            // Default very slow movement in the specified direction
            const baseSpeed = 0.1
            moveBy = direction * baseSpeed * (delta / 1000) * 5
        }

        baseX.set(baseX.get() + moveBy)
    })

    return (
        <motion.div className="flex items-stretch gap-3 md:gap-4 w-max" style={{ x }}>
            {children}
        </motion.div>
    )
}

const TestimonialCard = ({ item }) => (
    <div className="shrink-0 w-[420px] md:w-[520px] rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-lg">
        <div className="flex items-start gap-4 md:gap-5">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 border-blue-100 bg-blue-50 flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <div className="text-sm font-semibold text-blue-600 leading-tight">{item.role}</div>
                        <div className="text-xl font-bold text-slate-900 leading-tight">{item.name}</div>
                    </div>
                    <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < item.rating ? 'text-amber-400' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                        ))}
                    </div>
                </div>
                <p className="text-slate-700 leading-relaxed">"{item.text}"</p>
            </div>
        </div>
    </div>
)

const TestimonialsShowcase = () => {
    const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0)
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e) => {
        mouseX.set(e.clientX)
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        if (typeof window !== 'undefined') {
            mouseX.set(window.innerWidth / 2)
        }
    }

    return (
        <section 
            id="testimonials-highlight" 
            className="relative min-h-screen section-blend overflow-hidden snap-start bg-transparent"
        >
            
            <div className="relative w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 py-14 lg:py-16">
                <div className="text-center space-y-3 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-[0_10px_30px_rgba(6,182,212,0.25)] text-slate-900">
                        Trusted outcomes, real-world feedback
                    </h2>
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                        From surgical suites to outpatient care, here's how Cetmeds Opal performs in the field.
                    </p>
                </div>

                <div 
                    className="relative mt-10 space-y-6"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white via-white/70 to-transparent blur-lg z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white via-white/70 to-transparent blur-lg z-10" />

                    <div className="overflow-hidden">
                        <MarqueeRow mouseX={mouseX} direction={-1} isHovered={isHovered}>
                            {duplicated.map((item, idx) => (
                                <TestimonialCard key={`row1-${idx}-${item.name}`} item={item} />
                            ))}
                        </MarqueeRow>
                    </div>

                    <div className="overflow-hidden">
                        <MarqueeRow mouseX={mouseX} direction={1} isHovered={isHovered}>
                            {duplicated.map((item, idx) => (
                                <TestimonialCard key={`row2-${idx}-${item.name}`} item={item} />
                            ))}
                        </MarqueeRow>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsShowcase
