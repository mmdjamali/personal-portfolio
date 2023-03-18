"use client"

import Crown from '@/svg/Crown'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav
    className={`
    z-[10]
    sticky
    top-0
    bg-white
    flex
    items-center
    justify-between
    py-3
    `}>
        
        <motion.div
        className=''
        initial={{
            y : -60,
            opacity : 0
        }}
        animate={{
            y : 0,
            opacity : 1
        }}
        >
            <Crown
            className='
            w-[30px]
            aspect-square
            '
            color="fill-neutral-800"
            backdropColor="fill-neutral-900"
            />
        </motion.div>

        <div
        className='
        flex
        items-center
        justify-center
        gap-6
        text-neutral-800
        '>
            {sections.map((item, idx) => 
                <motion.div
                transition={{
                    delay : ((idx + 1) * .05)
                }}
                initial={{
                    y : -60,
                    opacity : 0
                }}
                animate={{
                    y : 0,
                    opacity : 1
                }}
                >
                    <Link
                    key={idx} 
                    href={`#` + item.toLocaleLowerCase()}>
                        {item}
                    </Link>
                </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar

const sections = [
    "Home",
    "About",
    "Projects",
]