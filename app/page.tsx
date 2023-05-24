import Image from 'next/image'
import Header from './components/Headers'
import Hero from './components/Hero'
import About from './components/About'

export default function Home() {
  return (
    <main>
      <div className="text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        {/*skills*/}
        {/*projects*/}
        {/*contact me*/}
      </div>
    </main>
  )
}
