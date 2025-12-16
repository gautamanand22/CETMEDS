import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
    {
        name: 'Dr. Anika Rao',
        role: 'Ophthalmologist, Fortis',
        text: 'OpticClear delivers consistent clarity for post-op patients. Packaging is intuitive and reduces chair time.',
        rating: 5,
        image: '/images/blue-drink.webp'
    },
    {
        name: 'Dr. Miguel Santos',
        role: 'ENT Surgeon, Clinica Vida',
        text: 'EarGuard Advanced is now our default for wax management—patients report less irritation and quicker relief.',
        rating: 5,
        image: '/images/orange-drink.webp'
    },
    {
        name: 'St. Mary Hospital',
        role: 'Procurement Lead',
        text: 'WoundCare+ Defense gives us reliable outcomes with fewer dressing changes—nursing teams love the workflow fit.',
        rating: 4,
        image: '/images/red-drink.webp'
    },
    {
        name: 'Dr. Li Wei',
        role: 'Cornea Specialist, Hua Care',
        text: 'Comfort-first drops that stay consistent across batches—patients notice the difference.',
        rating: 5,
        image: '/images/white-drink.webp'
    }
]

const duplicated = [...testimonials, ...testimonials]

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
    return (
        <section id="testimonials-highlight" className="relative min-h-screen section-blend overflow-hidden snap-start bg-white">

            <div className="relative w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 py-14 lg:py-16">
                <div className="text-center space-y-3 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-[0_10px_30px_rgba(6,182,212,0.25)] text-slate-900">
                        Trusted outcomes, real-world feedback
                    </h2>
                    <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                        From surgical suites to outpatient care, here's how Cetmeds Opal performs in the field.
                    </p>
                </div>

                <div className="relative mt-10 space-y-6">
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white via-white/70 to-transparent blur-lg" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white via-white/70 to-transparent blur-lg" />

                    <div className="overflow-hidden">
                        <div className="marquee-row marquee-left gap-3 md:gap-4">
                            {duplicated.map((item, idx) => (
                                <TestimonialCard key={`row1-${idx}-${item.name}`} item={item} />
                            ))}
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <div className="marquee-row marquee-right gap-3 md:gap-4">
                            {duplicated.map((item, idx) => (
                                <TestimonialCard key={`row2-${idx}-${item.name}`} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsShowcase
