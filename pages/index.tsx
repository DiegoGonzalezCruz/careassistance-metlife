import Head from 'next/head'
import { Chanels } from '../components/chanels/Chanels'
import { Footer } from '../components/laylout/Footer'
import { Navigation } from '../components/laylout/Navigation'
import { ProgramSlider } from '../components/programs/ProgramSlider'
import { Explore } from '../components/slider/Explore'
import { MainSlider } from '../components/slider/MainSlider'
import { SecondarySlider } from '../components/slider/SecondarySlider'

export default function Home() {
  return (
    <div className={''}>
      <Head>
        <title>Care Assistance</title>
        <meta name="description" content="Care assistance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-full">
        <Navigation />
        <MainSlider />
        <ProgramSlider />
        <Chanels />
        <SecondarySlider />
        <Explore />
        <Footer />
      </main>

      <footer></footer>
    </div>
  )
}
