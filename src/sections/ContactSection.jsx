import React, { useRef, useState } from 'react'

const ContactSection = () => {
    const sectionRef = useRef(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Add form submission logic here
    }

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="py-20 relative overflow-hidden bg-transparent"
        >
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />

            <div className="container-custom relative z-10 mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-slate-200 text-blue-700 rounded-full text-sm font-medium mb-6 shadow-sm">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Get in Touch
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Contact Us & <span className="text-blue-600">Book Bulk Orders</span>
                    </h2>
                    <p className="text-body text-slate-700 max-w-3xl mx-auto text-lg">
                        Ready to experience the CETMEDS difference? Contact us today
                        for more information about our products and services.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
                        <h3 className="heading-tertiary text-slate-900 mb-6">Send us a message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-slate-700 text-sm font-medium mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-slate-700 text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-slate-700 text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                                    placeholder="Tell us how we can help you"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary text-lg py-4"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
                            <h3 className="heading-tertiary text-slate-900 mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-semibold mb-1">Address</h4>
                                        <p className="text-slate-600">House No- 10, Ground Floor, Block-D, Burari, Delhi - 110084</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-semibold mb-1">Phone</h4>
                                        <p className="text-slate-600">011-33311082 / +91 7256938383</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-semibold mb-1">Email</h4>
                                        <p className="text-slate-600">contact@cetmeds.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
                            <h3 className="heading-tertiary text-slate-900 mb-4">Business Hours</h3>
                            <div className="space-y-3 text-slate-700">
                                <div className="flex justify-between items-center py-2 border-b border-slate-200/60">
                                    <span className="font-medium">Monday - Friday</span>
                                    <span className="text-slate-600">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-200/60">
                                    <span className="font-medium">Saturday</span>
                                    <span className="text-slate-600">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="font-medium">Sunday</span>
                                    <span className="text-red-600 font-medium">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection