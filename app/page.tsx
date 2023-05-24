import Image from 'next/image'
import Header from './components/Headers'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main>
      <div className="text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Header />

        <section id="hero" className="snap-center">
          <Hero />
        </section>

        {/*about*/}
        {/*experience*/}
        {/*skills*/}
        {/*projects*/}
        {/*contact me*/}
      </div>
    </main>
  )
}
