"use client"

import Navbar from '@/components/sections/Navbar'
import { useState , useEffect } from "react"
import './globals.css'
import SocialMedia from '@/components/others/SocialMedia'
import FixedPageLocation from '@/components/others/FixedPageLocation'
import { useAppState } from '@/stores/store'
import Crown from '@/svg/Crown'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme } = useAppState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },1000)
  }, [])
  
  return (
    <html 
    lang="en"
    className={`
    ${theme}
    `}>
      <head>
        <title>Mohammad Jamali</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://mmdjamali.ir"/>
        <meta property="og:title" content="Mohammad Jamali" />
        <meta property="og:description" content="Personal portfolio of self-taught developer Mohammad Jamali" />
        <meta property="og:image" content="crown.svg" />
        <meta property="og:image:type" content="image/svg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="A black crown" />
      </head>

      <body
      className={`
      xl:px-[128px]
      md:px-[98px]
      sm:px-[32px]
      px-[16px]
      dark:bg-neutral-800
      `}>
        {
          loading ?
          <div
          className='
          absolute
          flex
          items-center
          justify-center
          right-[50%]
          bottom-[50%]
          translate-x-[50%]
          translate-y-[50%]
          '
          >
            <Crown
            className='
            w-[100px]
            aspect-square
            '
            color="
            fill-neutral-800
            dark:fill-neutral-50
            "
            backdropColor="
            fill-neutral-900
            dark:fill-neutral-200
            "
            />
          </div>
          :
          <>
          <FixedPageLocation/>
          <SocialMedia/>
          <Navbar/>
          {children}
          </>
        }
      </body>
    </html>
  )
}
