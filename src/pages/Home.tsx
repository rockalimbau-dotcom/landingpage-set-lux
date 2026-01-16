import Hero from '../components/Hero'
import WhatIs from '../components/WhatIs'
import Benefits from '../components/Benefits'
import UseCases from '../components/UseCases'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Home = ({ introCompleted }: { introCompleted: boolean }) => {
  return (
    <>
      <Hero introCompleted={introCompleted} />
      <WhatIs />
      <Benefits />
      <UseCases />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
