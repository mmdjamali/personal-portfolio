import React from 'react'
import Input from '../inputs/Input'
import Textarea from '../inputs/Textarea'
import CallToAction from '../buttons/CallToAction'

const Contact = () => {
  return (
    <div
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
            <h2
            className='
            flex
            flex-wrap
            gap-2
            text-[40px]
            font-bold
            text-neutral-800'
            >
                Let's <span className='text-red-500'>Chat</span>
            </h2>

            <p>
                Let's talk about your project, I am excited to bring my skills and experience to a new project or collaborative effort.
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
                    Send me email
                </CallToAction>
            </a>
        </div>

    </div>
  )
}

export default Contact