import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn , FaTelegramPlane} from "react-icons/fa";

import { motion } from 'framer-motion';

const SocialMedia = ({

}) => {
  return (
    <div
    className='
    fixed
    xl:right-[128px]
    md:right-[64px]
    right-[32px]
    bottom-[50%]
    translate-y-[50%]
    text-neutral-800
    dark:text-white
    sm:flex
    hidden
    h-fit
    flex-col
    items-center
    justify-center
    gap-3
    '>
        {platform.map(({link , Icon , name} , idx) => 
            <motion.a
            key={idx}
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
            text-[1.5rem]
            `}
            href={link}>
                <Icon/>
            </motion.a>
        )}
    </div>
  )
}

export default SocialMedia

const platform = [
    {
        name : "github",
        link : "https://github.com/1stMmD",
        Icon : AiFillGithub
    },
    {
        name : "linkedin",
        link : "https://www.linkedin.com/in/mmdjamali/",
        Icon : FaLinkedinIn
    },
    {
        name : "telegram",
        link : "https://t.me/x1stMmD",
        Icon : FaTelegramPlane
    },
]

