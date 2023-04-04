import React from 'react'

type props = {
    secondary : boolean,
    children : React.ReactNode,
    onClick? : (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const CallToAction : React.FC<props> = ({
    secondary,
    children,
    onClick
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
        onClick={onClick}
        className={`
        relative
        z-[5]
        -translate-x-[3px]
        -translate-y-[3px]
        active:-translate-y-[0]
        active:-translate-x-[0]
       ${!secondary ? 
        "bg-neutral-800 dark:bg-white text-white dark:text-neutral-800" : 
        "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-white"}
        border-[2px]
        border-neutral-800
       dark:border-white
        font-medium
        text-[20px]
        px-8
        py-2
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
        dark:bg-neutral-200
        border-[2px]
        border-neutral-900
        dark:border-neutral-200
        bottom-0
        left-0
        '
        />
    </div>
  )
}

export default CallToAction