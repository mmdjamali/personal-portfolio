"use client"

import React from 'react'
import Crown from '@/svg/Crown'

const Technologies = () => {
  return (
    <div
    className='
    flex
    flex-wrap
    items-center
    justify-center
    gap-3
    '>

    </div>
  )
}

export default Technologies

const Technology = ({
    Icon,
    color,
    backdropColor
} : {
    Icon : React.FC;
    color : string;
    backdropColor : string;
}) => {
    return(
        <div
        className='
        flex
        items-start
        relative
        '>
            <span
            className={`
            flex
            items-center
            justify-center
            ${color}
            `}>
                <Icon/>
            </span>

            <span
            className={`
            absolute
            bottom-[-3px]
            right-[-3px]
            w-full
            h-full
            `}
            />
        </div>
    )
}