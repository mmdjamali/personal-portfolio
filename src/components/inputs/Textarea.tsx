import React from 'react'

type props = {
    value : string,
    title : string,
    placeholder ?: string,
    id : string
}
const Textarea : React.FC<props> = ({
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

        <textarea
        rows={8}
        placeholder={placeholder}
        className='
        w-full
        px-3
        py-2
        text-[1rem]
        text-white
        font-light
        focus:outline-none
        bg-neutral-500
        rounded-lg
        '
        />
    </div>
  )
}

export default Textarea