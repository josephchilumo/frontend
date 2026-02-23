import react from 'react';
import AboutHero from '../components/about/AboutHero';
import FirmOverview from '../components/about/FirmOverview';
import Experience from '../components/about/Experience';
import Testimonials from '../components/about/Testimonials';
import AboutCTA from '../components/about/AboutCTA';
import Footer from '../components/Footer';
function Aboutpage() {
    return (
        <>
        <AboutHero />
        <FirmOverview />
        <Experience />
        <Testimonials />
        <AboutCTA />
        <Footer />  
        
        </>
    );
}   
export default Aboutpage;