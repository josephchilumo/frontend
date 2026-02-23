import React from "react";
function Process() {
    return (
         <section className="bg-gray-100 py-24 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-serif font-semibold text-gray-900 mb-16">
            Our Structured Legal Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-left">

            <div>
              <h3 className="text-xl font-semibold mb-4">01 — Strategic Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                We conduct a comprehensive legal and risk analysis to fully
                understand the complexity and exposure of your matter.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">02 — Legal Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                We design a tailored strategy aligned with your objectives,
                ensuring clarity and structured execution.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">03 — Decisive Representation</h3>
              <p className="text-gray-600 leading-relaxed">
                We advocate with precision and confidence, pursuing optimal
                and efficient resolution.
              </p>
            </div>

          </div>
        </div>
      </section>
    )
}
export default Process;