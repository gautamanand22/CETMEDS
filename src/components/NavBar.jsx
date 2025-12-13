import React, { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'

const NavBar = () => {
    const navRef = useRef(null)
    const logoRef = useRef(null)
    const menuRef = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const lastScrollY = useRef(0)

    // Optimized scroll handler with minimal processing
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY
        const newIsScrolled = scrollY > 20

        // Detect direction to hide/show
        if (scrollY > lastScrollY.current + 8 && scrollY > 80) {
            setIsHidden(true)
        } else if (scrollY < lastScrollY.current - 8) {
            setIsHidden(false)
        }

        lastScrollY.current = scrollY

        if (newIsScrolled !== isScrolled) {
            setIsScrolled(newIsScrolled)
        }
    }, [isScrolled])

    useEffect(() => {
        // Minimal initial animation
        gsap.fromTo(navRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
        )

        // Ultra-optimized scroll listener
        let ticking = false
        const onScroll = () => {
            if (!ticking) {
                ticking = true
                requestAnimationFrame(() => {
                    handleScroll()
                    ticking = false
                })
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [handleScroll])

    // Instant navbar background transition (no animation)
    useEffect(() => {
        // Remove this effect since we're handling it inline
    }, [isScrolled])

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Products', href: '#products' },
        { name: 'Benefits', href: '#benefits' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' }
    ]

    const handleNavClick = useCallback((href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
        setIsMenuOpen(false)
    }, [])

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev)
    }, [])

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-[100] border-b transition-all duration-300"
            style={{
                borderBottomWidth: '1px',
                borderBottomStyle: 'solid',
                backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.82)' : 'rgba(15, 23, 42, 0.48)',
                backdropFilter: 'blur(14px)',
                boxShadow: isScrolled ? '0 7px 30px rgba(0, 0, 0, 0.2)' : '0 5px 22px rgba(0, 0, 0, 0.16)',
                borderBottomColor: 'rgba(255,255,255,0.08)',
                transform: isHidden ? 'translateY(-110%)' : 'translateY(0)',
                transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease'
            }}
        >
            <div className="container-custom">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div
                        ref={logoRef}
                        className="flex items-center space-x-3 cursor-pointer transition-transform duration-300 hover:scale-105"
                        onClick={() => handleNavClick('#home')}
                    >
                        <div className="relative w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
                            <img src="/images/nav-logo.svg" alt="Cetmeds Opal" className="w-8 h-8 object-contain" />
                            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="leading-tight">
                            <span className="text-lg font-bold text-white">Cetmeds Opal</span>
                            <div className="text-[11px] text-white/70 font-medium">Health Care</div>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div ref={menuRef} className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleNavClick(item.href)}
                                className={`nav-link transition-all duration-300 text-white/80 hover:text-white ${isScrolled ? '' : ''}`}
                            >
                                {item.name}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavClick('#contact')}
                            className="ml-4 px-5 py-2.5 rounded-full bg-white text-slate-900 font-semibold shadow-md hover:-translate-y-0.5 transition"
                        >
                            Partner With Us
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`lg:hidden p-2 rounded-lg transition-all duration-300 text-white hover:bg-white/10 border border-white/10`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl shadow-2xl border-t border-white/10">
                        <div className="container-custom py-6">
                            <div className="space-y-1">
                                {navItems.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleNavClick(item.href)}
                                        className="block w-full text-left text-white hover:text-emerald-300 hover:bg-white/5 py-3 px-4 rounded-lg font-medium transition-all duration-300"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                                <div className="pt-4 mt-4 border-t border-white/10">
                                    <button
                                        onClick={() => handleNavClick('#contact')}
                                        className="w-full px-5 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-md hover:-translate-y-0.5 transition"
                                    >
                                        Partner With Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar