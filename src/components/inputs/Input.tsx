import React from 'react'

type props = {
    value : string,
    title : string,
    placeholder ?: string,
    id : string
}
const Input : React.FC<props> = ({
    value,
    id,
    title, 
    placeholder
}) => {
  return (
    <div
    className='
    relative
    flex
    flex-col
    gap-1
    '>
        <label
        className='
        text-white
        text-[1rem]
        '>
            {title}
        </label>

        <input
        placeholder={placeholder}
        className='
        w-full
        px-3
        py-2
        text-[1rem]
        text-white
        bg-neutral-500
        focus:outline-none
        rounded-lg
        font-light
        '
        />
    </div>
  )
}

export default Input