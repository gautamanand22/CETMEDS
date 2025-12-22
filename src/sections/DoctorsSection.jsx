import React from 'react'

const doctors = [
    // Bihar
    { 
        id: 1, 
        name: "Dr. Satyendra Kumar", 
        hospital: "Dhristi Netralaya", 
        location: "Islampur, Bihar",
        color: "bg-yellow-50",
        rotate: "-rotate-2",
        quote: "Cetmeds' ophthalmic range has significantly improved our post-operative recovery rates. Their quality is unmatched."
    },
    { 
        id: 2, 
        name: "Dr. Satyendra Kumar", 
        hospital: "Dhristi Eye Care", 
        location: "Hilsa, Bihar",
        color: "bg-blue-50",
        rotate: "rotate-1",
        quote: "Reliable, effective, and patient-friendly. I trust Cetmeds for my daily clinical practice."
    },
    { 
        id: 3, 
        name: "Dr. Shabhnam Bharti & Dr. Abhimanyu Sinha", 
        hospital: "Ankh Aspatal", 
        location: "Hilsa, Bihar",
        color: "bg-pink-50",
        rotate: "rotate-3",
        quote: "The consistency in their product formulations gives us the confidence to prescribe them to our most sensitive patients."
    },
    { 
        id: 4, 
        name: "Dr. Dirjesh Kumar & Dr. Mukesh Kumar", 
        hospital: "Navdristi Nidan Hospital", 
        location: "Islampur, Bihar",
        color: "bg-green-50",
        rotate: "-rotate-1",
        quote: "Excellent service and top-tier medical products. Cetmeds understands the needs of modern healthcare."
    },
    { 
        id: 5, 
        name: "Dr. Nitish Kumar", 
        hospital: "Savitri Netralaya", 
        location: "Rahui, Bihar",
        color: "bg-purple-50",
        rotate: "rotate-2",
        quote: "Their commitment to quality control is evident in every batch. A trusted partner in eye care."
    },
    { 
        id: 6, 
        name: "Dr. Santosh Kumar", 
        hospital: "Narayan Netralaya", 
        location: "Mokama, Bihar",
        color: "bg-orange-50",
        rotate: "-rotate-3",
        quote: "We've seen remarkable patient satisfaction with Cetmeds products. Highly recommended for fellow ophthalmologists."
    },
    { 
        id: 7, 
        name: "Dr. Priyanka Sharma", 
        hospital: "Sudiksha Mind & Eye Hospital", 
        location: "Patna, Bihar",
        color: "bg-teal-50",
        rotate: "rotate-1",
        quote: "Innovative solutions that truly address patient needs. Cetmeds is setting a new standard in the industry."
    },
    // Jharkhand
    { 
        id: 8, 
        name: "Dr. Suryakant", 
        hospital: "Lions Club", 
        location: "Chirkunda, Jharkhand",
        color: "bg-red-50",
        rotate: "-rotate-2",
        quote: "Affordable yet premium quality. Cetmeds helps us serve our community better."
    },
    { 
        id: 9, 
        name: "Dr. Bhadrapriya", 
        hospital: "Navdristi Lahan Netralaya", 
        location: "Dhanbad, Jharkhand",
        color: "bg-indigo-50",
        rotate: "rotate-2",
        quote: "The efficacy of their eye drops is impressive. Fast relief and happy patients are what we aim for."
    },
    { 
        id: 10, 
        name: "Dr. Ankit Gupta, Dr. Madhubala Gupta & Dr. B N Gupta", 
        hospital: "Navjyot Netralaya", 
        location: "Dhanbad, Jharkhand",
        color: "bg-lime-50",
        rotate: "-rotate-1",
        quote: "A comprehensive range of products that covers all our clinical requirements. Simply outstanding."
    },
    { 
        id: 11, 
        name: "Dr. Samiran Karmakar & Dr. Swapna Bala", 
        hospital: "Madhupur Eye Hospital", 
        location: "Madhupur, Jharkhand",
        color: "bg-cyan-50",
        rotate: "rotate-3",
        quote: "Professional team and superior products. Our partnership with Cetmeds has been incredibly beneficial."
    },
    { 
        id: 12, 
        name: "Dr. Ajeet Kumar", 
        hospital: "Dhristi Eye Clinic", 
        location: "Madhupur, Jharkhand",
        color: "bg-rose-50",
        rotate: "-rotate-3",
        quote: "I appreciate their focus on safety and sterility. It gives me peace of mind knowing my patients are safe."
    },
    { 
        id: 13, 
        name: "Dr. D K Gupta", 
        hospital: "Nayansukh Netralaya", 
        location: "Bokaro, Jharkhand",
        color: "bg-amber-50",
        rotate: "rotate-1",
        quote: "Cetmeds delivers on their promises. Timely supplies and excellent product efficacy."
    },
    { 
        id: 14, 
        name: "Dr. Keertivas", 
        hospital: "Dhristi Eye Clinic", 
        location: "Bokaro, Jharkhand",
        color: "bg-emerald-50",
        rotate: "-rotate-2",
        quote: "The feedback from my patients regarding their comfort and relief has been consistently positive."
    },
    { 
        id: 15, 
        name: "Dr. Ravi Ranjan", 
        hospital: "Eye 2 Eye Vision Center", 
        location: "Bokaro, Jharkhand",
        color: "bg-violet-50",
        rotate: "rotate-2",
        quote: "A brand that stands for trust and quality. I'm proud to be associated with Cetmeds."
    },
    { 
        id: 16, 
        name: "Dr. P K Chaturvedi", 
        hospital: "Chaturvedi Eye Clinic", 
        location: "Dhanbad, Jharkhand",
        color: "bg-fuchsia-50",
        rotate: "-rotate-1",
        quote: "Their dedication to advancing eye care solutions is commendable. A valuable asset to the medical community."
    }
]

const DoctorsSection = () => {
    return (
        <section className="py-12 bg-transparent relative overflow-hidden w-full">
            <div className="w-full px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Trusted by Leading <span className="text-blue-600">Medical Professionals</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We are proud to partner with distinguished doctors and hospitals across Bihar and Jharkhand who share our commitment to patient care.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 p-4 w-full">
                    {doctors.map((doc) => (
                        <div 
                            key={doc.id} 
                            className={`
                                relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(20%-1.5rem)]
                                ${doc.color} p-6 shadow-lg hover:shadow-2xl transition-all duration-300 
                                hover:scale-105 hover:z-10 hover:rotate-0 cursor-pointer
                                ${doc.rotate}
                                border border-slate-200/60
                            `}
                            style={{
                                borderRadius: '2px 2px 255px 25px / 255px 25px 2px 2px' // Hand-drawn paper effect
                            }}
                        >
                            {/* Pin/Tape effect */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-yellow-200/80 shadow-sm rotate-1" />

                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-slate-400 shadow-sm">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white/50 px-2 py-1 rounded-md">
                                            {doc.location.split(',')[1]}
                                        </span>
                                    </div>
                                    
                                    <h3 className="font-black text-slate-900 text-xl leading-tight mb-2 font-handwriting">
                                        {doc.name}
                                    </h3>
                                    <p className="text-slate-700 font-medium text-sm mb-4">
                                        {doc.hospital}
                                    </p>

                                    <blockquote className="relative">
                                        <svg className="absolute -top-2 -left-2 w-6 h-6 text-slate-400/20 -z-10 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21L14.017 18C14.017 16.0547 15.3738 14.5547 17.2305 14.0547C16.9029 13.0703 16.6842 12.0859 16.5748 11.1016L16.5748 2.99998L21.9824 2.99998L21.9824 11.1016C21.9824 16.5703 18.4108 21 14.017 21ZM5.01694 21L5.01694 18C5.01694 16.0547 6.37379 14.5547 8.23047 14.0547C7.90285 13.0703 7.68413 12.0859 7.57475 11.1016L7.57475 2.99998L12.9824 2.99998L12.9824 11.1016C12.9824 16.5703 9.41078 21 5.01694 21Z" />
                                        </svg>
                                        <p className="text-slate-600 text-sm leading-relaxed italic relative z-10">
                                            "{doc.quote}"
                                        </p>
                                    </blockquote>
                                </div>
                                
                                <div className="mt-4 pt-4 border-t border-slate-900/5 flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {doc.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DoctorsSection
