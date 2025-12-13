import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ParallaxSection = () => {
    const sectionRef = useRef(null)
    const backgroundRef = useRef(null)
    const statsRef = useRef([])
    const certificationsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (backgroundRef.current) {
                gsap.to(backgroundRef.current, {
                    yPercent: -15,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    }
                })
            }

            statsRef.current.forEach((stat, index) => {
                if (stat) {
                    const numberElement = stat.querySelector('.stat-number')
                    const finalNumber = numberElement?.textContent || ''
                    const numericValue = parseInt(finalNumber.replace(/[^\d]/g, '')) || 0

                    gsap.fromTo(stat,
                        { y: 20, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            delay: index * 0.05,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: stat,
                                start: 'top 85%'
                            },
                            onStart: () => {
                                if (numericValue > 0 && numberElement) {
                                    let counter = { value: 0 }
                                    gsap.to(counter, {
                                        value: numericValue,
                                        duration: 1,
                                        ease: 'power2.out',
                                        onUpdate: () => {
                                            const suffix = finalNumber.includes('K+') ? 'K+' :
                                                finalNumber.includes('M+') ? 'M+' :
                                                    finalNumber.includes('%') ? '%' : '+'
                                            numberElement.textContent = Math.round(counter.value) + suffix
                                        }
                                    })
                                }
                            }
                        }
                    )
                }
            })

            certificationsRef.current.forEach((cert, index) => {
                if (cert) {
                    gsap.fromTo(cert,
                        { y: 20, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            delay: index * 0.04,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: cert,
                                start: 'top 90%'
                            }
                        }
                    )
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const certifications = [
        { name: 'FDA Approved', icon: '✓', description: 'Food and Drug Administration certified' },
        { name: 'ISO 9001', icon: '🏆', description: 'Quality management systems' },
        { name: 'GMP Certified', icon: '⚕️', description: 'Good Manufacturing Practice' },
        { name: 'WHO Listed', icon: '🌍', description: 'World Health Organization recognized' }
    ]

    return (
        <section
            ref={sectionRef}
            className="section bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden snap-start min-h-screen flex items-center"
        >
            {/* Parallax Background Elements */}
            <div
                ref={backgroundRef}
                className="absolute inset-0 opacity-20"
            >
                <div className="absolute top-1/4 left-1/6 w-80 h-80 md:w-96 md:h-96 bg-blue-400/30 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/6 w-72 h-72 md:w-80 md:h-80 bg-indigo-400/30 rounded-full filter blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-64 md:h-64 bg-purple-400/20 rounded-full filter blur-3xl"></div>
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
            <div className="relative z-10 container-custom py-10 lg:py-12 flex flex-col gap-10 lg:gap-12 max-w-6xl mx-auto">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-block mb-3 px-4 py-2 bg-white backdrop-blur-sm border border-blue-200 rounded-full shadow-sm"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-blue-600 font-medium">Excellence in Healthcare</span>
                    </motion.div>
                    <h2 className="heading-gradient text-slate-900 mb-4">
                        Trusted by Healthcare Professionals Worldwide
                    </h2>
                    <p className="text-slate-700 text-base md:text-lg max-w-2xl mx-auto">
                        Setting new standards in pharmaceutical excellence with cutting-edge research
                        and unwavering commitment to patient care.
                    </p>
                </motion.div>

                {/* Trust Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { number: '500+', label: 'Partner Hospitals', icon: '🏥' },
                        { number: '2000+', label: 'Medical Clinics', icon: '🏢' },
                        { number: '50K+', label: 'Healthcare Professionals', icon: '👨‍⚕️' },
                        { number: '99.8%', label: 'Patient Satisfaction', icon: '❤️' }
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

                <div className="flex flex-col gap-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">
                        Quality Certifications & Standards
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                ref={(el) => certificationsRef.current[index] = el}
                                className="bg-white backdrop-blur-lg rounded-2xl p-5 text-center border border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-3xl mb-3">{cert.icon}</div>
                                <h4 className="text-base md:text-lg font-semibold text-slate-900 mb-1">
                                    {cert.name}
                                </h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {cert.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-strong px-8 py-10 text-white"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_0%,white,transparent_30%)]" />
                    <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                        <div className="flex-1 space-y-3">
                            <div className="inline-flex items-center gap-3 px-3 py-2 bg-white/10 rounded-full border border-white/20 text-sm">
                                <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
                                <span className="font-medium">Committed to quality and innovation</span>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold leading-tight">Partner with CETMEDS for clinician-backed formulations</h3>
                            <p className="text-white/80 max-w-2xl text-sm md:text-base">Join a global network of healthcare professionals who trust our products to deliver consistent, reliable outcomes for patients every day.</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <button className="px-6 py-3 bg-white text-blue-700 rounded-full font-semibold shadow-lg hover:-translate-y-1 transition">Download Product Brochure</button>
                            <button className="px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition">Schedule a Call</button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default ParallaxSection