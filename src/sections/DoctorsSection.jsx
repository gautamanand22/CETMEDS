import React from 'react'

const doctors = [
    {
        id: 1,
        name: "Dr. A K Rai",
        hospital: "Madhubani Eye Hospital",
        location: "Madhubani",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
        quote: "Cetmeds has consistently delivered quality products that my patients trust. Their commitment to excellence is evident."
    },
    {
        id: 2,
        name: "Dr. B K Jha",
        hospital: "Clinica Vida",
        location: "Benipur",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300",
        quote: "The efficacy of their ear care range is remarkable. It's rare to find such a perfect balance of gentle care and powerful results."
    },
    {
        id: 3,
        name: "Dr. Raju Bhagat",
        hospital: "K S Hospital",
        location: "Madhubani",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
        quote: "I've been prescribing their ophthalmic solutions for years. The feedback from patients has been overwhelmingly positive."
    },
    {
        id: 4,
        name: "Dr. Aniket Kumar",
        hospital: "Pragya Netralaya",
        location: "Hajipur",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
        quote: "Reliability is key in our field, and Cetmeds never disappoints. Their supply chain and product quality are top-notch."
    }
]

const DoctorsSection = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container-custom mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Trusted by Leading <span className="text-blue-600">Medical Professionals</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We are proud to partner with distinguished doctors and hospitals who share our commitment to patient care and medical excellence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {doctors.map((doc) => (
                        <div key={doc.id} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-t-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100 shrink-0">
                                    <img 
                                        src={doc.image} 
                                        alt={doc.name} 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 leading-tight">{doc.name}</h3>
                                    <p className="text-sm text-blue-600 font-medium">{doc.hospital}</p>
                                    <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {doc.location}
                                    </p>
                                </div>
                            </div>

                            <blockquote className="relative">
                                <svg className="absolute -top-2 -left-2 w-8 h-8 text-blue-100 -z-10 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.0547 15.3738 14.5547 17.2305 14.0547C16.9029 13.0703 16.6842 12.0859 16.5748 11.1016L16.5748 2.99998L21.9824 2.99998L21.9824 11.1016C21.9824 16.5703 18.4108 21 14.017 21ZM5.01694 21L5.01694 18C5.01694 16.0547 6.37379 14.5547 8.23047 14.0547C7.90285 13.0703 7.68413 12.0859 7.57475 11.1016L7.57475 2.99998L12.9824 2.99998L12.9824 11.1016C12.9824 16.5703 9.41078 21 5.01694 21Z" />
                                </svg>
                                <p className="text-slate-600 text-sm leading-relaxed italic relative z-10">
                                    "{doc.quote}"
                                </p>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DoctorsSection
