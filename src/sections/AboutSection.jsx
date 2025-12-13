import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
    return (
        <section
            id="about"
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-800 via-sky-800 to-cyan-800 text-white section-blend"
        >
            <div className="absolute inset-0 opacity-65">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.16),transparent_40%),radial-gradient(circle_at_80%_12%,rgba(56,189,248,0.2),transparent_38%),radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.18),transparent_44%)]" />
            </div>

            <div className="relative w-full max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-14">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 xl:gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-lg border border-white/20 rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/10">
                            About Cetmeds Opal
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-[0_10px_32px_rgba(6,182,212,0.25)]">
                            Science-led care with a human touch
                        </h2>
                        <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-4xl">
                            We craft eye, ear, and ENT solutions that marry rigorous research with empathetic design. From preservative-free comfort to clinician-first packaging, every detail is built for safer, clearer, more confident care.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 pt-1">
                            {[
                                { label: 'Clinical R&D Hours', value: '120k+' },
                                { label: 'Regulatory Audits Passed', value: '45+' },
                                { label: 'Partner Hospitals', value: '220+' },
                                { label: 'Sustainability Initiatives', value: '12 active' }
                            ].map((item) => (
                                <div key={item.label} className="rounded-2xl border border-white/15 bg-white/12 backdrop-blur-md p-5 shadow-xl shadow-black/15">
                                    <div className="text-sm uppercase tracking-wide text-white/65">{item.label}</div>
                                    <div className="text-2xl font-bold text-white mt-2">{item.value}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2.5 pt-2">
                            {['GMP Certified', 'ISO 13485', 'Cold-chain compliant', 'Eco-conscious packaging'].map(tag => (
                                <span key={tag} className="px-4 py-2 rounded-full bg-white/12 border border-white/20 text-sm font-medium backdrop-blur-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-3 pt-3">
                            <button className="group px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-base flex items-center gap-2 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition">
                                Meet our team
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="px-6 py-3 rounded-full border border-white/25 bg-white/16 text-white font-semibold text-base backdrop-blur-md hover:bg-white/22 hover:-translate-y-1 transition">
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
                        <div className="absolute -inset-10 rounded-3xl bg-gradient-to-tr from-cyan-300/22 via-blue-400/18 to-emerald-300/20 blur-3xl" />
                        <div className="relative rounded-3xl border border-white/18 bg-white/14 backdrop-blur-2xl p-7 shadow-2xl shadow-black/20">
                            <div className="grid gap-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm uppercase tracking-wide text-white/60">Quality Systems</div>
                                        <p className="text-lg text-white mt-2 font-semibold">Built for compliance and consistency</p>
                                    </div>
                                    <div className="px-4 py-2 rounded-full bg-emerald-400/25 text-emerald-50 text-sm font-semibold border border-emerald-200/50">Audit Ready</div>
                                </div>
                                <div className="h-px bg-white/10" />
                                <div className="grid sm:grid-cols-2 gap-3.5">
                                    {[
                                        { title: 'Precision Batches', desc: 'Automated lines with inline QC to keep every vial consistent.' },
                                        { title: 'Traceability', desc: 'Lot-level visibility from raw ingredient to final pack.' }
                                    ].map(card => (
                                        <div key={card.title} className="rounded-2xl border border-white/15 bg-white/12 p-4 backdrop-blur-lg">
                                            <div className="text-white font-semibold">{card.title}</div>
                                            <p className="text-sm text-white/75 mt-2 leading-relaxed">{card.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="h-px bg-white/10" />
                                <div className="flex flex-col gap-3">
                                    <div className="text-sm uppercase tracking-wide text-white/60">Leadership Principles</div>
                                    <div className="grid sm:grid-cols-2 gap-2.5">
                                        {[ 'Patient-first decisions', 'Evidence-backed launches', 'Transparent supply chain', 'Continuous clinician feedback' ].map(item => (
                                            <div key={item} className="flex items-start gap-2 text-white/80">
                                                <span className="mt-1 w-2 h-2 rounded-full bg-cyan-300" />
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
        </section>
    )
}

export default AboutSection
