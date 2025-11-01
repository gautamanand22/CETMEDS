import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ParallaxSection = () => {
    const sectionRef = useRef(null)
    const backgroundRef = useRef(null)
    const contentRef = useRef(null)
    const statsRef = useRef([])
    const certificationsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Simplified parallax background effect
            let parallaxTween = gsap.to(backgroundRef.current, {
                yPercent: -20, // Reduced movement
                ease: "none",
                paused: true
            })

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                onUpdate: (self) => {
                    parallaxTween.progress(self.progress)
                }
            })

            // Optimized content animation with intersection observer
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }

            const contentObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(entry.target.children,
                            { y: 40, opacity: 0 }, // Reduced movement
                            {
                                y: 0,
                                opacity: 1,
                                duration: 0.8,
                                stagger: 0.1, // Reduced stagger
                                ease: "power2.out"
                            }
                        )
                        contentObserver.unobserve(entry.target)
                    }
                })
            }, observerOptions)

            if (contentRef.current) {
                contentObserver.observe(contentRef.current)
            }

            // Simplified stats animation
            statsRef.current.forEach((stat, index) => {
                if (stat) {
                    const numberElement = stat.querySelector('.stat-number')
                    if (numberElement) {
                        const finalNumber = numberElement.textContent
                        const numericValue = parseInt(finalNumber.replace(/[^\d]/g, ''))

                        ScrollTrigger.create({
                            trigger: stat,
                            start: "top 80%",
                            onEnter: () => {
                                gsap.fromTo(stat,
                                    { scale: 0.9, opacity: 0 },
                                    {
                                        scale: 1,
                                        opacity: 1,
                                        duration: 0.5,
                                        delay: index * 0.05,
                                        ease: "power2.out"
                                    }
                                )

                                // Optimized counter animation
                                if (numericValue > 0) {
                                    let counter = { value: 0 }
                                    gsap.to(counter, {
                                        value: numericValue,
                                        duration: 1.5, // Reduced duration
                                        ease: "power2.out",
                                        onUpdate: () => {
                                            const suffix = finalNumber.includes('K+') ? 'K+' :
                                                finalNumber.includes('M+') ? 'M+' :
                                                    finalNumber.includes('%') ? '%' : '+'
                                            numberElement.textContent = Math.round(counter.value) + suffix
                                        }
                                    })
                                }
                            }
                        })
                    }
                }
            })

            // Simplified certifications animation
            certificationsRef.current.forEach((cert, index) => {
                if (cert) {
                    ScrollTrigger.create({
                        trigger: cert,
                        start: "top 85%",
                        onEnter: () => {
                            gsap.fromTo(cert,
                                { y: 30, opacity: 0 }, // Reduced movement
                                {
                                    y: 0,
                                    opacity: 1,
                                    duration: 0.6,
                                    delay: index * 0.05, // Reduced delay
                                    ease: "power2.out"
                                }
                            )
                        }
                    })
                }
            })

            return () => {
                contentObserver.disconnect()
            }

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const certifications = [
        { name: "FDA Approved", icon: "✓", description: "Food and Drug Administration certified" },
        { name: "ISO 9001", icon: "🏆", description: "Quality management systems" },
        { name: "GMP Certified", icon: "⚕️", description: "Good Manufacturing Practice" },
        { name: "WHO Listed", icon: "🌍", description: "World Health Organization recognized" }
    ]

    return (
        <section
            ref={sectionRef}
            className="section bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden snap-start"
        >
            {/* Parallax Background Elements */}
            <div
                ref={backgroundRef}
                className="absolute inset-0 opacity-20"
            >
                <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-400/30 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-indigo-400/30 rounded-full filter blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/20 rounded-full filter blur-3xl"></div>
            </div>

            {/* Medical Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '40px 40px'
                    }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container-custom">
                <motion.div
                    className="max-w-4xl mx-auto text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-block mb-4 px-4 py-2 bg-white backdrop-blur-sm border border-blue-200 rounded-full shadow-sm"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-blue-600 font-medium">Excellence in Healthcare</span>
                    </motion.div>
                    <h2 className="heading-gradient text-slate-900 mb-6">
                        Trusted by Healthcare Professionals Worldwide
                    </h2>
                    <p className="text-slate-700 text-lg max-w-2xl mx-auto">
                        Setting new standards in pharmaceutical excellence with cutting-edge research
                        and unwavering commitment to patient care.
                    </p>
                </motion.div>

                {/* Trust Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {[
                        { number: "500+", label: "Partner Hospitals", icon: "🏥" },
                        { number: "2000+", label: "Medical Clinics", icon: "🏢" },
                        { number: "50K+", label: "Healthcare Professionals", icon: "👨‍⚕️" },
                        { number: "99.8%", label: "Patient Satisfaction", icon: "❤️" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            ref={(el) => statsRef.current[index] = el}
                            className="text-center bg-white backdrop-blur-lg rounded-2xl p-6 border border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-3xl mb-3">{stat.icon}</div>
                            <div className="stat-number text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-slate-600 font-medium text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
                        Quality Certifications & Standards
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                ref={(el) => certificationsRef.current[index] = el}
                                className="bg-white backdrop-blur-lg rounded-2xl p-6 text-center border border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">{cert.icon}</div>
                                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                                    {cert.name}
                                </h4>
                                <p className="text-slate-600 text-sm">
                                    {cert.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <button className="btn-primary bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl">
                        Partner With Us
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ParallaxSection