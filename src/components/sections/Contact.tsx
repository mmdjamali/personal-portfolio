import React, { useCallback, useRef } from 'react'
import CallToAction from '../buttons/CallToAction'
import { contact } from '@/content/contact'
import Header2 from '../shared/Header2'
import { useAppState } from '@/stores/store'
import { useChangeSection } from '@/hooks/change-section'

const Contact = () => {
  const { language } = useAppState()

  const json = contact[language]
  
  const ref =  useChangeSection("Contact")

  return (
    <section
    id="Contact"
    ref={ref}
    className={`
    flex
    flex-col
    lg:flex-row
    py-16
    gap-8
    `}>
        <div
        className={`
        relative
        flex
        flex-col
        gap-2
        max-w-[500px]
        `}>
            <Header2
            text={json.header.text}
            colored_text={json.header.colored}
            color={"text-red-500"}
            />

            <p
            className='
            text-neutral-800
            dark:text-white
            '>
              {json.description}
            </p>

            <a
            href="mailto:mmdjamalimt@gmail.com"
            className='
            relative
            w-fit
            mt-4
            '>
                <CallToAction
                secondary={false}
                >
                    {json.cta}
                </CallToAction>
            </a>
        </div>

    </section>
  )
}

export default Contact