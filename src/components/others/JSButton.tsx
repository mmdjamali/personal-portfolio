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
            h-[60px]
            flex
            items-end
            relative
            cursor-pointer
            mr-4
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
                px-4
                -translate-x-[3px]
                -translate-y-[3px]
                active:translate-x-0
                active:translate-y-0
                rounded-full
                text-white
                font-bold
                flex
                ${isJS ? "justify-end bg-yellow-400" : "justify-start bg-blue-500"}
                
                text-[2.5rem]
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
                rounded-full
                ${isJS ? "bg-yellow-500" : "bg-blue-600"}
                `}
                />
            </div>
        </div>
    )
}

export default JSButton