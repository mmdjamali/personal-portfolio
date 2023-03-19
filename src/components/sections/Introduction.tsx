"use client"

import Crown from '@/svg/Crown'
import React , { useRef , useCallback } from 'react'
import CallToAction from '../buttons/CallToAction'
import JSButton from '../buttons/JSButton'

type props = {
  changeCurrent : (value : string) => void
}

const Introduction : React.FC<props> = ({
  changeCurrent
}) => {

  const observer = useRef<IntersectionObserver | null>(null)
  
  const handle =  useCallback((node : HTMLElement) => {

    if(observer.current) observer.current.disconnect()
    
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        changeCurrent && changeCurrent("Home")
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
    flex-col
    py-16
    items-center
    gap-y-8
    `}>
        <div
        className='
        flex
        flex-col
        gap-3
        '>
            <h1
            className={`
            max-w-[500px]
            xl:text-[64px]
            sm:text-[56px]
            text-[44px]
            font-bold
            text-neutral-800
            flex
            flex-wrap
            `}>
                Hi I'm <span className='text-violet-500'>MmD</span>
                a self-taught
                <JSButton/> developer
            </h1>

            <p>
            Let me help take your startup's ideas to life with engaging and interactive frontend development.
            </p>

            <div
            className='
            pt-8
            flex
            flex-wrap
            gap-4
            '>

              <CallToAction
              secondary={false}
              >
                Hire me
              </CallToAction>

              <CallToAction
              secondary
              >
                Download CV
              </CallToAction>
            </div>
        </div>

        <div
        className='
        relative
        '>
          <Crown
          className='
          w-[50vw]
          lg:w-[30vw]
          aspect-square
          '
          color="fill-neutral-900"
          backdropColor="fill-neutral-800"
          />

          <Crown
          className='
          absolute
          bottom-[5%]
          left-[5%]
          w-[10%]
          aspect-square
          '
          color="fill-violet-600"
          backdropColor="fill-violet-500"
          />

          <Crown
          className='
          absolute
          top-[15%]
          left-[5%]
          w-[15%]
          aspect-square
          '
          color="fill-yellow-600"
          backdropColor="fill-yellow-400"
          />
        </div>
    </section>
  )
}

export default Introduction