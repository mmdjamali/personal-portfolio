import React from 'react'
import { motion } from "framer-motion"
import { useAppState } from '@/stores/store'

const FixedPageLocation = () => {
  const { section } = useAppState()
  return (
    <div
    className={`
    bottom-[50%]
    translate-y-[50%]
    fixed
    h-[65%]
    flex-col
    items-center
    gap-1
    xl:left-[128px]
    md:left-[64px]
    left-[32px]
    hidden
    sm:flex
    `}>
        {section.split("").map((latter , idx) =>
            <motion.div
            key={latter + Math.random()}
            transition={{
              delay : ((idx + 1) * .05)
            }}
            initial={{
              y : -60,
              opacity : 0,
              display : "none"
            }}
            
            animate={{
              y : 0,
              opacity : 1,
              display: "inline-block"
            }}
            className={`
            uppercase
            text-neutral-800
            dark:text-white
            text-[1rem]
            font-semibold
            `}>
                {latter}
            </motion.div>
        )}

        <span
        className='
        flex-grow
        inline-block
        w-[4px]
        bg-neutral-800
        dark:bg-white
        '
        />
    </div>
  )
}

export default FixedPageLocation