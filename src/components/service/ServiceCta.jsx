import React from "react";
function ServiceCta() {
    return (
       <section className="bg-[#0B1C2D] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-serif font-semibold mb-6">
          Ready to Discuss Your Matter?
        </h2>

        <p className="text-gray-300 mb-8">
          Schedule a confidential consultation with our legal team today.
        </p>

        <button className="bg-[#C6A75E] text-black px-8 py-4 font-medium hover:bg-white transition duration-300">
          Book Consultation
        </button>
      </section>
    )
}
export default ServiceCta;