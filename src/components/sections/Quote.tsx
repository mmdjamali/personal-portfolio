import React from 'react'

type props = {
    quote : string,
    by : string
}

const Quote : React.FC<props> = ({
    quote,
    by
}) => {
  return (
    <div
    className='
    w-full
    flex
    py-6
    items-center
    justify-center
    bg-neutral-100
    '>
        <div
        className='
        flex
        flex-col
        gap-3
        items-start
        text-neutral-800
        max-w-[350px]
        '>
            <p>
                {quote}
            </p>
            <span>- {by}</span>
        </div>
    </div>
  )
}

export default Quote