import React from 'react'

type props = {
    secondary : boolean,
    children : React.ReactNode
}

const CallToAction : React.FC<props> = ({
    secondary,
    children
}) => {
  return (
    <div
    className='
    flex
    items-end
    relative
    min-h-[50px]
    '>
        <button
        className={`
        relative
        z-[5]
        -translate-x-[3px]
        -translate-y-[3px]
        active:-translate-y-[0]
        active:-translate-x-[0]
       ${!secondary ? "bg-neutral-800  text-white" : "bg-white text-neutral-800"}
        border-[2px]
        border-neutral-800
       
        font-medium
        text-[20px]
        px-8
        py-2
        rounded-full
        `}>
            {children}
        </button>

        <span
        className='
        z-[2]
        inline
        absolute
        w-full
        h-[calc(100%)]
        bg-neutral-900
        border-[2px]
        border-neutral-900
        rounded-full
        bottom-0
        left-0
        '
        />
    </div>
  )
}

export default CallToAction