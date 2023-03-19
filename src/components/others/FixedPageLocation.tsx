import React from 'react'

type props = {
  current : string
}

const FixedPageLocation : React.FC<props> = ({
  current
}) => {
  return (
    <div
    className={`
    bottom-[50%]
    translate-y-[50%]
    fixed
    h-[65%]
    flex-col
    items-center
    gap-1
    xl:left-[128px]
    md:left-[64px]
    left-[32px]
    hidden
    sm:flex
    `}>
        {current.split("").map((latter , idx) =>
            <span
            className={`
            uppercase
            text-neutral-800
            text-[1rem]
            font-semibold
            `}>
                {latter}
            </span>
        )}

        <span
        className='
        flex-grow
        inline-block
        w-[4px]
        bg-neutral-800
        '
        />
    </div>
  )
}

export default FixedPageLocation