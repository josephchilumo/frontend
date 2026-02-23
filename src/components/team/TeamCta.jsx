import React from "react";

const TeamCta = () => {
  return (
    <div className="bg-gray-900 text-white py-20 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">
        Ready to Work with Our Experts?
      </h2>
      <p className="text-gray-300 mb-8 max-w-2xl text-center">
        Contact our team today for a consultation and experience world-class legal expertise.
      </p>
      <a
        href="/contactpage" // link to your contact page or form
        className="px-8 py-4 bg-[#C6A75E] text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-colors"
      >
        Schedule a Consultation
      </a>
    </div>
  );
};

export default TeamCta;
