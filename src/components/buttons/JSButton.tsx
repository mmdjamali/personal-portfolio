"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

type props = {
    
}

const JSButton : React.FC<props> = ({

}) => {
    const [isJS , setIsJS] = useState<boolean>(true)
    return(
        <div
        className="
        flex
        items-center
        ">
            <div
            className="
            select-none
            sm:h-[60px]
            h-[52px]
            flex
            items-end
            relative
            cursor-pointer
            "> 
                <div
                onClick={() => {
                    setIsJS(prev => !prev)
                }}
                className={`
                transition-all
                z-[5]
                w-[150px]
                h-fit
                px-5
                py-2.5
                -translate-x-[3px]
                -translate-y-[3px]
                active:translate-x-0
                active:translate-y-0
                text-white
                font-bold
                flex
                leading-none
                ${isJS ? "justify-end bg-yellow-400" : "justify-start bg-blue-500"}
                
                sm:text-[2.5rem]
                text-[2rem]
                `}>
                    <motion.div layout>{ isJS ? "JS" : "TS" }</motion.div>
                </div> 

                <span
                className={`
                z-[3]
                absolute
                bottom-0
                right-0
                w-full
                h-full
                ${isJS ? "bg-yellow-500" : "bg-blue-600"}
                `}
                />
            </div>
        </div>
    )
}

export default JSButton