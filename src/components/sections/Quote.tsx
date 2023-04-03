import React from 'react'
import { motion } from "framer-motion"
type props = {
    quote : string,
    by : string
}

const Quote : React.FC<props> = ({
    quote,
    by
}) => {
  return (
    <div
    className='
    w-full
    flex
    py-8
    items-center
    justify-center
    '>
        <div
        className='
        relative
        '>
            <motion.div
            initial={{
                y : 0,
                x : 0,
            }}
            whileInView={{
                y : -6,
                x : -6,
            }}
            viewport={{
                once : true,
                margin : "0px 0px -50% 0px"
            }}
            className='
            relative
            z-[1]
            p-4
            flex
            flex-col
            gap-4
            items-start
            bg-neutral-700
            dark:bg-white
            dark:text-neutral-700
            text-white
            max-w-[min(350px,80vw)]
            '>
                <p>
                    {quote}
                </p>
                <span>- {by}</span>
            </motion.div>

            <div
            className='
            z-[0]
            absolute
            bottom-[0px]
            right-[0px]
            w-full
            h-full
            p-4
            flex
            flex-col
            gap-4
            items-start
            bg-neutral-800
            dark:bg-neutral-200
            max-w-[min(350px,80vw)]
            '/>
        </div>
    </div>
  )
}

export default Quote