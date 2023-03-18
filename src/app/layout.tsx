import Navbar from '@/components/sections/Navbar'
import './globals.css'
import SocialMedia from '@/components/others/SocialMedia'
import FixedPageLocation from '@/components/others/FixedPageLocation'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
      className='
      xl:px-[128px]
      sm:px-[64px]
      px-[32px]
      '>
        <FixedPageLocation/>
        <SocialMedia/>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
