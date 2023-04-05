"use client"

import Crown from '@/svg/Crown'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import ThemeButton from '../others/theme-button';
import LanguageButton from '../others/language-button';
import { BiMenuAltRight } from "react-icons/bi"

const Navbar = () => {
    const [show, setShow] = useState<boolean>(true)
    const [showNavbar, setShowNavbar] = useState<boolean>(false)
    
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
    },[setShow])

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
    xl:px-[128px]
    md:px-[98px]
    sm:px-[32px]
    px-[16px]
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
                key={idx}
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

        <button
        onClick={() => {
            setShowNavbar(prev => !prev)
        }}
        className='
        text-neutral-800
        dark:text-white
        flex
        sm:hidden
        items-center
        justify-center
        text-[2rem]
        '>
            <BiMenuAltRight/>
        </button>

        { showNavbar ?
        <div
        className='
        absolute
        top-[100%]
        right-0
        flex
        sm:hidden
        flex-row
        justify-start
        gap-3
        w-full
        py-4
        h-fit
        text-neutral-800
        dark:text-white
        bg-white
        dark:bg-neutral-800
        xl:px-[128px]
        md:px-[98px]
        sm:px-[32px]
        px-[16px]
        '
        >

            {sections.map((item,idx) => (
                <motion.div
                key={idx}
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
            ))}

        </div>
        :
        <></>
        }

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