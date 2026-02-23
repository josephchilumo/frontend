import React from "react";
import {NavLink} from "react-router-dom";
function PracticeAreas() {
    return (
        <section id="services" className="py-24 px-6 lg:px-20 font-serif">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-center mb-12">
                    Our Practice Areas
                </h2>
                <p className="text-gray-600 text-lg mt-6 text-center max-w-3xl mx-auto leading-relaxed">
                    We offer a comprehensive range of legal services tailored to meet the diverse needs of our clients across various industries and sectors.
                </p>
                <div className="grid md:grid-cols-2 gap-14 mt-4">
                    <div className="border border-gray-200 p-10 hover:shadow-2xl transition duration-500">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Corporate & Commercial Law</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We advise corporate entities and investors on sophisticated transactions, governance structures, and regulatory frameworks.
                        </p>
                        <ul className="space-y-3 text-gray-700 mb-8">
                            <li>• Corporate structuring & governance</li>
                            <li>• Mergers & acquisitions</li>
                            <li>• Joint ventures & strategic alliances</li>
                            <li>• Commercial Contract Drafting</li>
                            <li>• Regulatory Compliance Advisory </li>
                        </ul>
                        <NavLink to="/contactpage" className="text-sm uppercase tracking-wider border-b border-black pb-1 hover:text-gray-600 transition">
                            Engage Our Corporate Team
                        </NavLink>
                    </div>
                    <div className="border border-gray-200 p-10 hover:shadow-2xl transition duration-500">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Litigation & Dispute Resolution</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">  
                            We provide expert legal representation in complex litigation matters and alternative dispute resolution mechanisms, ensuring our clients' interests are protected and resolved effectively.
                        </p>
                        <ul className="space-y-3 text-gray-700 mb-8">
                            <li>• Civil Litigation</li>
                            <li>• Commercial Disputes</li>
                            <li>• Arbitration & Mediation</li>
                            <li>• Regulatory Enforcement</li>
                        </ul>
                        <NavLink to="/contactpage" className="text-sm uppercase tracking-wider border-b border-black pb-1 hover:text-gray-600 transition">
                            Engage Our Litigation Team
                        </NavLink>
                    </div>
                    <div className="border border-gray-200 p-10 hover:shadow-2xl transition duration-500">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Intellectual Property Law</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">      
                            We offer comprehensive intellectual property services including trademark, copyright, and patent protection, helping clients safeguard their valuable intangible assets. 
                        </p>
                        <ul className="space-y-3 text-gray-700 mb-8">
                            <li>• Trademark Registration & Protection</li>
                            <li>• Copyright Registration & Enforcement</li>
                            <li>• Patent Filing & Prosecution</li>
                            <li>• IP Licensing & Commercialization</li>
                        </ul>
                        <NavLink to="/contactpage" className="text-sm uppercase tracking-wider border-b border-black pb-1 hover:text-gray-600 transition">
                            Engage Our IP Team
                        </NavLink>
                    </div>
                    <div className="border border-gray-200 p-10 hover:shadow-2xl transition duration-500">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Employment & Labor Law</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We provide expert legal advice and representation in employment and labor law matters, ensuring compliance with statutory requirements and protecting the rights of both employers and employees.
                        </p>
                        <ul className="space-y-3 text-gray-700 mb-8">
                            <li>• Employment Contracts & Agreements</li>
                            <li>• Workplace Disputes & Investigations</li>
                            <li>• Labor Relations & Collective Bargaining</li>
                            <li>• Compliance with Labor Laws</li>
                        </ul>
                        <NavLink to="/contactpage" className="text-sm uppercase tracking-wider border-b border-black pb-1 hover:text-gray-600 transition">
                            Engage Our Employment Team
                        </NavLink>
                    </div>
                    <div className="border border-gray-200 p-10 hover:shadow-2xl transition duration-500">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Real Estate & Property Law</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We offer comprehensive legal services in real estate and property law, including property transactions, landlord-tenant disputes, and regulatory compliance.
                        </p>
                        <ul className="space-y-3 text-gray-700 mb-8">
                            <li>• Property Transactions & Due Diligence</li>
                            <li>• Landlord-Tenant Disputes</li>
                            <li>• Property Development & Zoning</li>
                            <li>• Regulatory Compliance & Enforcement</li>
                        </ul>
                        <NavLink to="/contactpage" className="text-sm uppercase tracking-wider border-b border-black pb-1 hover:text-gray-600 transition">
                            Engage Our Real Estate Team
                        </NavLink>
                    </div>
                    <div className="border border-gray-200 p-10 hover:shadow-2xl transition duration-500">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Family Law</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We provide expert legal services in family law matters, including divorce, custody disputes, and prenuptial agreements.
                        </p>
                        <ul className="space-y-3 text-gray-700 mb-8">
                            <li>• Divorce & Separation</li>
                            <li>• Custody & Child Support</li>
                            <li>• Prenuptial & Postnuptial Agreements</li>
                            <li>• Family Mediation</li>
                        </ul>
                        <NavLink to="/contactpage" className="text-sm uppercase tracking-wider border-b border-black pb-1 hover:text-gray-600 transition">
                            Engage Our Family Law Team
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}       
export default PracticeAreas;