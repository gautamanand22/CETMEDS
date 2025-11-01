import React, { useRef } from 'react'

const ProductsSection = () => {
    const sectionRef = useRef(null)

    const products = [
        {
            id: 1,
            name: "OffTears Eye Drops",
            category: "Eye Care",
            description: "Premium preservative-free eye drops for instant dry eye relief and long-lasting comfort throughout the day",
            features: ["Preservative-free formula", "Instant relief", "Safe for daily use", "Clinically tested"],
            image: "/images/offtears.png",
            bgColor: "from-blue-500 to-cyan-600",
            accentColor: "blue",
            dosage: "10ml",
            certification: "FDA Approved"
        },
        {
            id: 2,
            name: "ClearVision Eye Drops",
            category: "Eye Care",
            description: "Advanced lubricating eye drops designed for contact lens wearers and digital eye strain relief",
            features: ["Contact lens compatible", "Blue light protection", "Extended moisture", "Non-irritating"],
            image: "/images/offtears.png",
            bgColor: "from-indigo-500 to-purple-600",
            accentColor: "indigo",
            dosage: "15ml",
            certification: "Ophthalmologist Tested"
        },
        {
            id: 3,
            name: "AudiCare Ear Drops",
            category: "Ear Care",
            description: "Gentle and effective ear drops for wax removal, infection prevention, and maintaining optimal ear health",
            features: ["Gentle formula", "Quick action", "Doctor recommended", "Anti-bacterial"],
            image: "/images/offtears.png",
            bgColor: "from-emerald-500 to-teal-600",
            accentColor: "emerald",
            dosage: "10ml",
            certification: "ENT Approved"
        }
    ]

    return (
        <section
            id="products"
            ref={sectionRef}
            className="py-32 bg-white relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        Medical Product Range
                    </div>
                    <h2 className="heading-secondary mb-6">
                        Our Medical Product Range
                    </h2>
                    <p className="text-body max-w-3xl mx-auto text-lg">
                        Discover our comprehensive collection of FDA-approved medical solutions,
                        each formulated with precision and backed by clinical research for optimal patient outcomes.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-slate-100"
                        >
                            {/* Product Image Container with Gradient Background */}
                            <div className={`relative h-80 bg-gradient-to-br ${product.bgColor} overflow-hidden`}>
                                {/* Decorative Elements */}
                                <div className="absolute inset-0">
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                                </div>

                                {/* Certification Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-lg">
                                    {product.certification}
                                </div>

                                {/* Dosage Info */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-lg">
                                    {product.dosage}
                                </div>

                                {/* Product Image */}
                                <div className="relative h-full flex items-center justify-center p-8">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
                                    />
                                </div>

                                {/* Animated Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </div>

                            {/* Product Details */}
                            <div className="p-8">
                                {/* Category Badge */}
                                <div className="mb-4">
                                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold text-${product.accentColor}-600 bg-${product.accentColor}-50 px-4 py-1.5 rounded-full`}>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {product.category}
                                    </span>
                                </div>

                                {/* Product Name */}
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {product.name}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                                    {product.description}
                                </p>

                                {/* Features List */}
                                <ul className="space-y-2.5 mb-6">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-slate-700">
                                            <svg className="w-5 h-5 text-green-500 mr-2.5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="flex-1">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group">
                                    <span>View Details</span>
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mb-16">
                    <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 group">
                        <span className="text-lg">View All Products</span>
                        <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 max-w-5xl mx-auto overflow-hidden shadow-2xl">
                        {/* Decorative Elements */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 rounded-full blur-3xl"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                Custom Solutions Available
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Need a Custom Solution?
                            </h3>
                            <p className="text-slate-200 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                                Our team of medical experts can develop customized formulations
                                tailored to your specific healthcare needs and requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    Request Custom Solution
                                </button>
                                <button className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download Catalog
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection