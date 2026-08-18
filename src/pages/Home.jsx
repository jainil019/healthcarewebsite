import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import AboutSection from "../components/Aboutsection";
import SkillsSection from "../components/Skillswction";
import Events from "../components/Eventsection";
import News from "../components/newsSection";
import Blogs from "../components/blogsSection";
import PressRelease from "../components/pressrealese";
import Testimonials from "../components/testimonial";
import FAQ from "../components/fqa";
import Footer from "../components/footer";
function Home(){
    return(
 <>
    <TopBar/>
    <Navbar/>
    <Hero/>
    <AboutSection/>
    <SkillsSection/>
    <Events/>
    <News/>
    <Blogs/>
    <PressRelease/>
    <Testimonials/>
    <FAQ/>
    <Footer/>
</>
    );
}
export default Home;