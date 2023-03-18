import FixedPageLocation from '@/components/others/FixedPageLocation'
import SocialMedia from '@/components/others/SocialMedia'
import Introduction from '@/components/sections/Introduction'
import Navbar from '@/components/sections/Navbar'
import Quote from '@/components/sections/Quote'
import AboutMe from '@/components/sections/AboutMe'
import Projects from '@/components/sections/Projects'

export default function Home() {
  return (
    <main className={`
    flex
    flex-col
    sm:px-[64px]
    px-[16px]
    `}>
      <Introduction/>

      <Quote
      by='Carl rogers'
      quote={"\"The only person who is educated is the one who learned how to learn and change\""}
      />

      <AboutMe/>

      <Quote
      by='Carl rogers'
      quote={"\"The only person who is educated is the one who learned how to learn and change\""}
      />

      <Projects/>

    </main>
  )
}
