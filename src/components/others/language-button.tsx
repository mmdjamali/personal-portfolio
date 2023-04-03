import { useAppState } from '@/stores/store';
import { Flags } from '@/svg/flags';
import React from 'react'

const LanguageButton = () => {
    const { language, changeLanguage } = useAppState();
    const Flag = Flags[language];
  return (
    <button
    onClick={() => {
        changeLanguage()
    }}
    className='
    flex
    items-center
    justify-center
    '>
        <Flag
        className='
        w-[30px]'
        />
    </button>
  )
}

export default LanguageButton