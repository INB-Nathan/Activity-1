import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/NavBar'
import React from 'react';
import Footer from '@/components/Footer';
import { WavyBackground } from '@/components/ui/wavy-background'

export default function Home() {
  return (
    <main className='relative justify-center align-center'>
        <Navbar />
        <WavyBackground
        children={"Welcome to"}
        className='font-semibold'
        children2 ={"TechSavvy Solutions"}
        children3 ={"your trusted partner in IT consulting and digital transformation."}
        className2='font-bold text-6xl text-blue-600'
        className3='py-2 font-semibold'
        containerClassName='relative py-60'
        backgroundFill='white'
        blur={10}
        speed='fast'
        />
        
      <Footer/>
    </main>
  )
}
