"use client"

import Crown from '@/svg/Crown'
import Question from '@/svg/Question'
import React , { useRef , useCallback } from 'react'

type props = {
  changeCurrent : (value : string) => void
}

const AboutMe : React.FC<props> = ({
  changeCurrent
}) => {
  const observer = useRef<IntersectionObserver | null>(null)
  
  const handle =  useCallback((node : HTMLElement) => {

    if(observer.current) observer.current.disconnect()
    
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        changeCurrent && changeCurrent("About me")
      }
    },{
      rootMargin:"-200px"
    })

    if(node) observer.current.observe(node)

  },[])

  return (
    <section
    ref={handle}
    className={`
    flex
    lg:flex-row
    flex-col-reverse
    py-16
    lg:items-start
    items-center
    gap-y-8
    `}>

        <div
        className='
        relative
        '>
          <Question
          className='
          lg:w-[30vw]
          w-[50vw]
          aspect-square
          '
          backdropColor="fill-neutral-900"
          color="fill-neutral-800"
          />

          <Question
          className='
          absolute
          w-[20%]
          top-[55%]
          left-[10%]
          rotate-[-18deg]
          aspect-square
          '
          backdropColor="fill-yellow-600"
          color="fill-yellow-400"
          />

          <Question
          className='
          absolute
          w-[22%]
          top-[50%]
          right-[10%]
          rotate-[15deg]
          aspect-square
          '
          backdropColor="fill-cyan-600"
          color="fill-cyan-500"
          />

        </div>

        <div
        className='
        flex
        flex-col
        gap-3
        '>
            <h2
            id="about"
            className={`
            text-[40px]
            font-bold
            text-neutral-800
            `}>
                Who is <span className='text-cyan-500'>MmD</span>?
            </h2>

            <p>
                My name is Mohammad Jamali and I was born on July 6 of 2004, in Tabriz, a city in South Azerbaijan. I am a highly motivated and passionate self-taught front-end developer with experience building websites and web applications using frameworks such as React, Preact, and Next.
            </p>

            <p>
                Additionally, I am a self-taught polyglot who speaks English, Turkish, Azeri, and Persian fluently. 
            </p>

            <p>
              here are few technologies I've worked with recently:
            </p>
            
            <div
            className={`
            grid
            place-items-start
            gap-2
            grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))]
            `}>

              {technologies.map((item , idx) => {
                return(
                  <span
                  className={`
                  flex 
                  items-center
                  justify-center
                  gap-2
                  `}>
                    <Crown
                    className='
                    w-[30px]
                    aspect-square
                    '
                    color="fill-neutral-700"
                    backdropColor="fill-neutral-800"
                    />

                    <span>
                      {item}
                    </span>

                  </span>
                )
              })}

            </div>

        </div>

    </section>
  )
}

export default AboutMe

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "Tailwind",
  "Node",
]