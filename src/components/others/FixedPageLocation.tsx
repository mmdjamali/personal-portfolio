import React from 'react'
import { motion } from "framer-motion"
type props = {
  current : string
}

const FixedPageLocation : React.FC<props> = ({
  current
}) => {
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
        {current.split("").map((latter , idx) =>
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
        '
        />
    </div>
  )
}

export default FixedPageLocation