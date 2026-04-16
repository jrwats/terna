import "./App.css"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Products } from "./components/Products"
import { HowItWorks } from "./components/HowItWorks"
import { Plans } from "./components/Plans"
import { Testimonials } from "./components/Testimonials"
import { Features } from "./components/Features"
import { DoctorSection } from "./components/DoctorSection"
import { FAQ } from "./components/FAQ"
import { Footer } from "./components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <HowItWorks />
        <Plans />
        <Testimonials />
        <Features />
        <DoctorSection />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
