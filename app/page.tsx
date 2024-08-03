import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/NavBar'
import { WavyBackground } from '@/components/ui/wavy-background'

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div>
        <WavyBackground
        children={"Welcome to"}
        className='font-semibold'
        children2 ={"TechSavvy Solutions"}
        children3 ={"your trusted partner in IT consulting and digital transformation."}
        className2='font-bold text-6xl'
        className3='py-2 font-semibold'
        containerClassName='relative py-60'
        backgroundFill='white'
        blur={10}
        speed='slow'

        />
      </div>
      <section id="contacts">

      </section>
    </main>
  )
}
