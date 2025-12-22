import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
    return (
        <section
            id="about"
            className="relative min-h-screen overflow-hidden section-blend bg-transparent flex items-center py-20"
        >
            <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
                <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm border border-white/50">
                    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 xl:gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-semibold shadow-sm text-blue-700">
                            About Cetmeds Opal
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-[0_10px_32px_rgba(6,182,212,0.25)] text-slate-900">
                            Science-led care with a human touch
                        </h2>
                        <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-4xl">
                            We craft eye, ear, and ENT solutions that marry rigorous research with empathetic design. From preservative-free comfort to clinician-first packaging, every detail is built for safer, clearer, more confident care.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 pt-1">
                            {[
                                { label: 'Clinical R&D Hours', value: '120k+' },
                                { label: 'Regulatory Audits Passed', value: '45+' },
                                { label: 'Partner Hospitals', value: '220+' },
                                { label: 'Sustainability Initiatives', value: '12 active' }
                            ].map((item) => (
                                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
                                    <div className="text-sm uppercase tracking-wide text-slate-600">{item.label}</div>
                                    <div className="text-2xl font-bold text-blue-600 mt-2">{item.value}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2.5 pt-2">
                            {['GMP Certified', 'ISO 13485', 'Cold-chain compliant', 'Eco-conscious packaging'].map(tag => (
                                <span key={tag} className="px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-sm font-medium text-blue-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-3 pt-3">
                            <button className="btn-primary group flex items-center gap-2">
                                Meet our team
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="btn-outline">
                                Download company profile
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-lg">
                            <div className="grid gap-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm uppercase tracking-wide text-slate-600">Quality Systems</div>
                                        <p className="text-lg text-slate-900 mt-2 font-semibold">Built for compliance and consistency</p>
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold border border-emerald-200">Audit Ready</div>
                                </div>
                                <div className="h-px bg-slate-200" />
                                <div className="grid sm:grid-cols-2 gap-3.5">
                                    {[
                                        { title: 'Precision Batches', desc: 'Automated lines with inline QC to keep every vial consistent.' },
                                        { title: 'Traceability', desc: 'Lot-level visibility from raw ingredient to final pack.' }
                                    ].map(card => (
                                        <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                            <div className="text-slate-900 font-semibold">{card.title}</div>
                                            <p className="text-sm text-slate-700 mt-2 leading-relaxed">{card.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="h-px bg-slate-200" />
                                <div className="flex flex-col gap-3">
                                    <div className="text-sm uppercase tracking-wide text-slate-600">Leadership Principles</div>
                                    <div className="grid sm:grid-cols-2 gap-2.5">
                                        {[ 'Patient-first decisions', 'Evidence-backed launches', 'Transparent supply chain', 'Continuous clinician feedback' ].map(item => (
                                            <div key={item} className="flex items-start gap-2 text-slate-700">
                                                <span className="mt-1 w-2 h-2 rounded-full bg-cyan-500" />
                                                <span className="leading-relaxed">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
