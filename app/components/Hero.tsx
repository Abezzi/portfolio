'use client'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Image from 'next/image'
import Avatar from '../../public/avatar.jpg'
import Link from 'next/link'

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hello, my name is Alex",
      "option 2",
      "option 3",
    ],
    loop: true,
    delaySpeed: 1000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />

      {/*avatar picture*/}
      <Image
        className="relative rounded-full h-32 w-32 mx-auto"
        src={Avatar}
        width={500}
        height={500}
        alt="avatar picture"
      />

      <div className="z-20">
        {/*subtitle*/}
        <h2 className="text-sm uppercase text-[#e4f0fb] tracking-[15px]">Software Engineer</h2>

        {/*title*/}
        <h1 className="text-5xl lg:text-6xl text-[#5de4c7] font-semibold scroll-px-10">
          <span>{text}</span>
          <Cursor cursorColor="#89ddff" />
        </h1>

        {/*buttons*/}
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
