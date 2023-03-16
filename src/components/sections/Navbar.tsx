import Crown from '@/svg/Crown'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav
    className={`
    z-[10]
    sticky
    top-0
    bg-white
    flex
    items-center
    justify-between
    py-3
    `}>
        <div>
            <Crown
            className='
            w-[30px]
            aspect-square
            '
            color="fill-neutral-800"
            backdropColor="fill-neutral-900"
            />
        </div>

        <div
        className='
        flex
        items-center
        justify-center
        gap-6
        text-neutral-800
        '>
            {sections.map((item, idx) => 
                <Link
                key={idx} 
                href={`#` + item.toLocaleLowerCase()}>
                    {item}
                </Link>
            )}
        </div>
    </nav>
  )
}

export default Navbar

const sections = [
    "Home",
    "About",
    "Projects",
    "Expertise"
]