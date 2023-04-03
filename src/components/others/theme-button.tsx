import { useAppState } from '@/stores/store';
import React from 'react'
import { MdDarkMode, MdWbSunny } from "react-icons/md";

const ThemeButton = () => {
    const { theme, changeTheme } = useAppState()
  return (
    <button
    onClick={() => {
        changeTheme()
    }}
    className='
    flex
    items-center
    justify-center
    '>
        {
            theme === "light" ? 
            <span
            className='
            text-neutral-800
            text-[1.5rem]
            '>
                <MdWbSunny/>
            </span>
            :
            <span
            className='
            text-white
            text-[1.5rem]
            '>
                <MdDarkMode/>
            </span>
        }
    </button>
  )
}

export default ThemeButton