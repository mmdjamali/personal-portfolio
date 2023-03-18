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
    py-8
    items-center
    justify-center
    '>
        <div
        className='
        relative
        '>
            <div
            className='
            relative
            z-[1]
            p-4
            flex
            flex-col
            gap-4
            items-start
            bg-neutral-700
            text-white
            max-w-[min(350px,80vw)]
            '>
                <p>
                    {quote}
                </p>
                <span>- {by}</span>
            </div>

            <div
            className='
            z-[0]
            absolute
            bottom-[-6px]
            right-[-6px]
            w-full
            h-full
            p-4
            flex
            flex-col
            gap-4
            items-start
            bg-neutral-800
            text-white
            max-w-[min(350px,80vw)]
            '/>
        </div>
    </div>
  )
}

export default Quote