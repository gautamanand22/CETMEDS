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
            className="pt-32 pb-0 relative overflow-hidden bg-white"
        >


            <div className="container-custom relative z-10">
                {/* Title */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact Us
                    </div>
                    <h2 className="heading-secondary text-slate-900 mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-body text-slate-700 max-w-3xl mx-auto text-lg">
                        Ready to experience the CETMEDS difference? Contact us today
                        for more information about our products and services.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-white backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-slate-200">
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
                        <div className="bg-white backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-slate-200">
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
                        <div className="bg-white backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-slate-200">
                            <h3 className="heading-tertiary text-slate-900 mb-4">Business Hours</h3>
                            <div className="space-y-3 text-slate-700">
                                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                                    <span className="font-medium">Monday - Friday</span>
                                    <span className="text-slate-600">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-slate-200">
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

            {/* Professional Footer */}
            <footer className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 pb-8 border-b border-slate-700">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                                        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <span className="text-white font-bold text-2xl">CETMEDS</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Leading provider of premium medical solutions, dedicated to improving health outcomes through innovative pharmaceutical products.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                                    <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 group">
                                    <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 group">
                                    <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                                    <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#home" className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#products" className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#benefits" className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        Benefits
                                    </a>
                                </li>
                                <li>
                                    <a href="#testimonials" className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        Testimonials
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Products */}
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Our Products</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        Eye Drops
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        Ear Drops
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        Medical Solutions
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        Healthcare Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        View All Products
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Get in Touch</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-slate-400 text-sm">House No- 10, Ground Floor, Block-D, Burari, Delhi - 110084</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <a href="tel:+15551234567" className="text-slate-400 hover:text-white transition-colors text-sm">011-33311082 / +91 7256938383 </a>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <a href="mailto:contact@cetmeds.com" className="text-slate-400 hover:text-white transition-colors text-sm">contact@cetmeds.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="py-4">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-slate-400 text-sm">
                                &copy; {new Date().getFullYear()} CETMEDS. All rights reserved.
                            </p>
                            <div className="flex items-center space-x-6">
                                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                                    Privacy Policy
                                </a>
                                <span className="text-slate-700">|</span>
                                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                                    Terms of Service
                                </a>
                                <span className="text-slate-700">|</span>
                                <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                                    Cookie Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default ContactSection
