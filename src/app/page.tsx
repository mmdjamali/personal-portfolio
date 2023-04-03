"use client"

import FixedPageLocation from '@/components/others/FixedPageLocation'
import SocialMedia from '@/components/others/SocialMedia'
import Introduction from '@/components/sections/Introduction'
import Quote from '@/components/sections/Quote'
import AboutMe from '@/components/sections/AboutMe'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import { useEffect, useState } from 'react'

export default function Home() {
  const [currentSection , setCurrentSection] = useState("Home")

  const handleChange = (value : string) => {
    setCurrentSection(value)
  }

  return (
    <main className={`
    flex
    flex-col
    sm:px-[64px]
    px-[0]
    `}>

      <FixedPageLocation
      current={currentSection}
      />

      <Introduction
      changeCurrent={handleChange}/>

      <Quote
      by='Carl rogers'
      quote={"The only person who is educated is the one who learned how to learn and change"}
      />

      <AboutMe
      changeCurrent={handleChange}/>

      <Quote
      by='Carl rogers'
      quote={"The only person who is educated is the one who learned how to learn and change"}
      />

      <Projects
      changeCurrent={handleChange}/>

      <Quote
      by='Carl rogers'
      quote={"The only person who is educated is the one who learned how to learn and change"}
      />

      <Contact
      changeCurrent={handleChange}/>

      <Footer/>

    </main>
  )
}
