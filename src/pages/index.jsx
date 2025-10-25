import About from "../components/section/About"
import Activities from "../components/section/Activities"
import Contact from "../components/section/Contact"
import CTASection from "../components/section/CTASection"
import GovernanceSection from "../components/section/GovernanceSection"
import Hero from "../components/section/Hero"
import ImpactSection from "../components/section/ImpactSection"
import Principles from "../components/section/PrinciplesSection"
import Products from "../components/section/Products"
import Regions from "../components/section/Regions"
import WhyUs from "../components/section/WhyUs"


export const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Activities />
            <Products />
            <CTASection />
            <Regions />
            <WhyUs />
            <Principles />
            <GovernanceSection />
            <ImpactSection />
            <Contact />
        </>
    )
}