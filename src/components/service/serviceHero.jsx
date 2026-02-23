import React from "react";  


function ServiceHero() {
    return (
        <div className= "bg-gray-100">
            <section className="bg-[#0B1C2D] text-white py-28 px-6 lg:px-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-5xl font-serif font-semibold leading-tight">
                        Strategic Legal for Complex and High-Stakes Matters
                    </h1>
                    <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                        We provide precision-driven legal represtation to corporations, institutions, and private clients across Kenya, delivering clarity, descretion, and decisive results in complex and high-stakes matters. Our team of experienced lawyers is dedicated to understanding our clients' unique needs and providing tailored legal solutions that align with their business objectives. We pride ourselves on our ability to navigate the intricacies of the legal landscape, offering strategic advice and representation that empowers our clients to achieve their goals with confidence.
                    </p>
                    <div className="mt-10">
                        <button onClick={()=>{
                            const section = document.getElementById("services");
                            section?.scrollIntoView({ behavior: "smooth"})
                        }} className="bg-[#C6A75E] text-gray-900 px-8 py-4 font-mediumn hover:bg-white transition duration-300"> Explore Our Services</button>
                    </div>
                </div>
               

            </section>
        </div>
    );
}

export default ServiceHero;