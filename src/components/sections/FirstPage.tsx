import Crown from '@/svg/Crown'
import React from 'react'
import CallToAction from '../buttons/CallToAction'

const FirstPage = () => {
  return (
    <section
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
            xl:text-[64px]
            text-[56px]
            font-bold
            text-neutral-800
            `}>
                Hi I'm <span className='text-violet-500'>MmD</span><br/>
                a self-taught<br/>
                developer
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
          w-[3vw]
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
          w-[5vw]
          aspect-square
          '
          color="fill-yellow-600"
          backdropColor="fill-yellow-400"
          />
        </div>
    </section>
  )
}

export default FirstPage