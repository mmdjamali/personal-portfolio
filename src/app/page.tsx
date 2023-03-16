import FixedPageLocation from '@/components/others/FixedPageLocation'
import SocialMedia from '@/components/others/SocialMedia'
import FirstPage from '@/components/sections/FirstPage'
import Navbar from '@/components/sections/Navbar'
import Quote from '@/components/sections/Quote'
import SecondPage from '@/components/sections/SecondPage'
import { Poppins } from 'next/font/google'

export default function Home() {
  return (
    <main className={`
    flex
    flex-col
    px-[64px]
    `}>
      <FirstPage/>

      <Quote
      by='Carl rogers'
      quote={"\"The only person who is educated is the one who learned how to learn and change\""}
      />

      <SecondPage/>

      <Quote
      by='Carl rogers'
      quote={"\"The only person who is educated is the one who learned how to learn and change\""}
      />

    </main>
  )
}
