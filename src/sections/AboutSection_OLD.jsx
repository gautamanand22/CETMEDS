import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const AboutSection = () => {
    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 1], [0, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3])

    return (
        <section
            id="about"
            className="relative h-screen overflow-hidden section-blend snap-start flex items-center"
        >
            {/* Animated Background */}
            <motion.div 
                className="absolute inset-0 z-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
                style={{ y, opacity }}
            >
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{
                        backgroundImage: 'url("/images/landing eye.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                {/* Geometric patterns */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                }} />
            </motion.div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header - Compact */}
                <div className="text-center mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/98 backdrop-blur-2xl border border-slate-200/60 rounded-full shadow-lg shadow-slate-900/10 mb-3"
                    >
                        <span className="text-xs font-bold bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent uppercase tracking-wider">About Cetmeds Opal</span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-tight tracking-tight max-w-4xl mx-auto mb-3"
                        style={{
                            textShadow: '0 2px 20px rgba(255, 255, 255, 0.4)'
                        }}
                    >
                        Science-led care with a <span className="bg-gradient-to-r from-[#ff9933] via-[#2563eb] to-[#138808] bg-clip-text text-transparent">human touch</span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto"
                    >
                        We craft eye, ear, and ENT solutions that marry rigorous research with empathetic design.
                    </motion.p>
                </div>

                {/* Main Content Grid - Single Row */}
                <div className="grid lg:grid-cols-3 gap-4 mb-5">
                    {/* Stats Cards - Compact */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-3"
                    >
                        {[
                            { label: 'R&D Hours', value: '120k+', gradient: 'from-orange-500 to-red-500' },
                            { label: 'Audits Passed', value: '45+', gradient: 'from-blue-500 to-cyan-500' },
                            { label: 'Hospitals', value: '220+', gradient: 'from-green-500 to-emerald-500' },
                            { label: 'Initiatives', value: '12', gradient: 'from-purple-500 to-pink-500' }
                        ].map((item, idx) => (
                            <motion.div 
                                key={item.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 + idx * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="relative rounded-2xl bg-white p-4 shadow-md border border-slate-200/60 hover:shadow-lg transition-all duration-300"
                            >
                                <div className={`text-2xl font-black bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent mb-1`}>
                                    {item.value}
                                </div>
                                <div className="text-xs font-semibold text-slate-600">
                                    {item.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Quality Systems Card - Compact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl bg-gradient-to-br from-white/90 via-white/70 to-white/60 backdrop-blur-xl border border-white/40 shadow-lg p-5 overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff9933]/10 via-[#2563eb]/10 to-[#138808]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="text-xl">🏆</span>
                                <h3 className="text-lg font-black text-slate-950">Quality Systems</h3>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Automated lines with inline QC and full lot-level traceability.
                            </p>
                            <div className="flex gap-2 flex-wrap pt-1">
                                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold border border-emerald-500/20">
                                    Audit Ready
                                </span>
                                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 text-xs font-bold border border-blue-500/20">
                                    GMP Certified
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Principles Card - Dark Theme */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-5 shadow-lg relative overflow-hidden"
                    >
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#ff9933] to-[#138808] rounded-full blur-3xl opacity-20" />
                        
                        <div className="relative space-y-3">
                            <h3 className="text-lg font-black">Our Principles</h3>
                            <div className="space-y-2">
                                {['Patient-first', 'Evidence-backed', 'Transparent', 'Clinician feedback'].map((item, idx) => (
                                    <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                                        <svg className="w-4 h-4 text-[#138808] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section - Certifications & CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        {['GMP Certified', 'ISO 13485', 'Cold-chain', 'Eco-conscious'].map((tag, idx) => (
                            <span 
                                key={tag}
                                className="px-3 py-1.5 rounded-full bg-white/98 border border-slate-200/60 text-xs font-bold text-slate-900 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        <button className="btn-primary group flex items-center gap-2 text-sm px-5 py-2.5">
                            Meet our team
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                        <button className="btn-secondary group flex items-center gap-2 text-sm px-5 py-2.5">
                            Company profile
                            <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutSection
