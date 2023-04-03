"use client"

import Crown from '@/svg/Crown'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import ThemeButton from '../others/theme-button';
import LanguageButton from '../others/language-button';

const Navbar = () => {
    const [show, setShow] = useState<boolean>(true)
    
    useEffect(() => {
        let lastY : number = 0;

        document.onscroll = (e) => {
            // get the scrollY position
            let { scrollY } = window;

            // if navbar is hidden keep track of scrollY
            if(!show) {
                lastY = scrollY
            }

            // hide the navbar if it's visible and user scrolled down
            if(window.scrollY > lastY + 100){
                setShow(false)
                lastY = scrollY
            }
            // show the navbar if it's hidden and user scrolled up
            if(window.scrollY < lastY - 100){
                setShow(true)
                lastY = scrollY
            }


        }
    },[])

  if(!show) return <></>

  return (
    <nav
    className={`
    z-[10]
    sticky
    top-0
    bg-white
    dark:bg-neutral-800
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
            color="
            fill-neutral-800
            dark:fill-neutral-50
            "
            backdropColor="
            fill-neutral-900
            dark:fill-neutral-100
            "
            />
        </motion.div>

        <div
        className='
        hidden
        sm:flex
        dark:text-white
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
                    className="
                    relative
                    after:transition-all
                    after:content-['']
                    after:w-full
                    after:max-w-[0px]
                    hover:after:max-w-full
                    after:h-[2px]
                    after:bg-neutral-800
                    dark:after:bg-white
                    after:absolute
                    after:bottom-0
                    after:left-0
                    "
                    key={idx} 
                    onClick={(e) => {
                        e.preventDefault()
                        document.getElementById(item)?.scrollIntoView({
                            behavior : "smooth",
                            block : "start"
                        })
                    }}
                    href={"#" + item}>
                        {item}
                    </Link>
                </motion.div>
            )}
        </div>
        
        <div
        className="
        flex
        items-center
        justify-center
        gap-3
        ">

            <ThemeButton/>

            <LanguageButton/>

        </div>
    </nav>
  )
}

export default Navbar

const sections = [
    "Introduction",
    "About",
    "Projects",
    "Contact"
]