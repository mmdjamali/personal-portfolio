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
      by='Jeff Atwood '
      quote={"Any application that can be written in JavaScript, will eventually be written in JavaScript."}
      />

      <Projects/>

      <Quote
      by='Thomas Edison'
      quote={"I have not failed. I've just found 10,000 ways that won't work."}
      />

      <Contact/>

      <Footer/>

    </main>
  )
}
