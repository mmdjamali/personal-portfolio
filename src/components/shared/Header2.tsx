import { FC } from 'react'

type props = {
  text : string,
  colored_text : string,
  color : string
}

const Header2 : FC<props> = ({
  color,
  colored_text,
  text
}) => {
  return (
    <h2
    id="about"
    className={`
    flex
    flex-wrap
    gap-x-2
    sm:text-[40px]
    text-[36px]
    font-bold
    text-neutral-800
    dark:text-white
    leading-none
    `}>
      {text.split(" ")
      .map((item , idx) => {
        return(
          <span
          className={item === colored_text ? color : ""}
          key={idx}>
            {item}
          </span>
        )
      })}
    </h2>
  )
}

export default Header2