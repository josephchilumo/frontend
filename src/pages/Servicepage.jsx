import react from "react";
import ServiceHero from "../components/service/serviceHero";
import PracticeAreas from "../components/service/PracticeAreas";    
import Process from "../components/service/Process";
import ServiceCta from "../components/service/ServiceCta";
import Footer from "../components/Footer";

function Servicepage() {
    return (
        <div >
           <ServiceHero />
           <PracticeAreas />
           <Process />
           <ServiceCta/>
           <Footer/>
        </div>
    );
}   
export default Servicepage;