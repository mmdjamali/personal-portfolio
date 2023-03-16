import Question from '@/svg/Question'
import React from 'react'

const SecondPage = () => {
  return (
    <section
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
                My name is Mohammad Jamali and I was born on July 6 of 2004, in Tabriz, a city in South Azerbaijan. I am a highly motivated and passionate self-taught front-end developer with experience building websites and web applications using frameworks such as React, Preact, and Next. Additionally, I am a self-taught polyglot who speaks English, Turkish, Azeri, and Persian fluently. 
                I enjoy reading books and playing video games when I am not coding or focusing on learning new languages or technologies. With my strong beliefs in self-learning and continuously growing skillset, I strive to continue my development journey and build user-friendly web applications!
            </p>

        </div>

        

    </section>
  )
}

export default SecondPage