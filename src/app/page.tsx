"use client"
import Introduction from '@/components/sections/Introduction'
import Quote from '@/components/sections/Quote'
import AboutMe from '@/components/sections/AboutMe'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {

  return (
    <main className={`
    flex
    flex-col
    sm:px-[64px]
    px-[0]
    `}>

      <Introduction/>

      <Quote
      by='Carl rogers'
      quote={"The only person who is educated is the one who learned how to learn and change"}
      />

      <AboutMe/>

      <Quote
      by='Carl rogers'
      quote={"The only person who is educated is the one who learned how to learn and change"}
      />

      <Projects/>

      <Quote
      by='Carl rogers'
      quote={"The only person who is educated is the one who learned how to learn and change"}
      />

      <Contact/>

      <Footer/>

    </main>
  )
}
