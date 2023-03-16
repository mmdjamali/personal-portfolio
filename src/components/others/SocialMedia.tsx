import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn , FaTelegramPlane} from "react-icons/fa";

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
    sm:flex
    hidden
    h-fit
    flex-col
    items-center
    justify-center
    gap-3
    '>
        {platform.map(({link , Icon , name} , idx) => 
            <a
            key={idx}
            className={`
            text-[1.5rem]
            `}
            href={link}>
                <Icon/>
            </a>
        )}
    </div>
  )
}

export default SocialMedia

const platform = [
    {
        name : "github",
        link : "",
        Icon : AiFillGithub
    },
    {
        name : "linkedin",
        link : "",
        Icon : FaLinkedinIn
    },
    {
        name : "telegram",
        link : "",
        Icon : FaTelegramPlane
    },
]