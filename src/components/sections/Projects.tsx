import json from "../../content/projects.json"
import { techLists } from "@/assets/TechIcons"
import React , { useRef , useCallback } from 'react'
import { IoIosArrowForward } from "react-icons/io"

type props = {
  changeCurrent : (value : string) => void
}

const Projects : React.FC<props> = ({
  changeCurrent
}) => {
  const observer = useRef<IntersectionObserver | null>(null)
  
  const handle =  useCallback((node : HTMLElement) => {

    if(observer.current) observer.current.disconnect()
    
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        changeCurrent && changeCurrent("Projects")
      }
    },{
      rootMargin: (node.offsetHeight / 2) * -1 + "px"
    })

    if(node) observer.current.observe(node)

  },[])

  return (
    <section
    ref={handle}
    className={`
    flex
    flex-col
    py-16
    gap-8
    `}>
      <h2
      className="
      flex
      flex-wrap
      gap-2
      text-[40px]
      font-bold
      text-neutral-800
      ">
        {json.content.title["en"].value.split(" ").map((item, idx) => {
          return(
            <span
            key={idx}
            className={json.content.title["en"].color === item ? "text-green-500" : ""}>
              {item}
            </span>
          )
        })}
      </h2>

      {
        json.projects.map(({
          name , 
          description , 
          technologies ,
          image
        }, idx) => {
          return(
            <div
            key={idx}
            className={`
            ${idx % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}
            flex
            flex-col
            items-center
            justify-between
            gap-8
            `}>

              <div
              className="
              flex
              flex-col
              gap-3
              text-neutral-800
              ">
                <h3
                className="
                text-[24px]
                font-bold
                ">
                  {name["en"]}
                </h3>

                <p>
                  {description["en"]}
                </p>

                <div
                className="
                flex
                gap-2
                font-medium
                ">
                  {technologies.map((item : string , idx) => {
                    let { color , Icon } = techLists[item];
                    
                    return(
                      <span
                      className={`
                      ${color}
                      text-[1.5rem]
                      `}
                      key={idx}
                      >
                        <Icon/>
                      </span>
                    )
                  })}
                </div>

                <div
                className="
                flex
                gap-2
                ">
                  <a
                  className="
                  after:transition-all
                  relative
                  flex
                  gap-1
                  w-fit
                  cursor-pointer
                  items-center
                  justify-center
                  after:content-['']
                  after:w-full
                  after:max-w-[0px]
                  hover:after:max-w-full
                  after:h-[2px]
                  after:bg-neutral-800
                  after:absolute
                  after:bottom-0
                  after:left-0
                  ">
                    <span>demo</span>
                    <IoIosArrowForward/>
                  </a>
                </div>

              </div>

              <div
              className={`
              flex
              relative
              `}>

                <div
                className={`
                z-[1]
                bg-violet-500
                p-2
                flex
                relative
                `}>
                  <img
                  className={`
                  relative
                  w-[100%]
                  aspect-video
                  object-cover
                  `}
                  src={image}
                  alt={name["en"]}
                  />
                </div>

                <span
                className={`
                z-[0]
                absolute
                w-full
                h-full
                bg-violet-600
                bottom-[-6px]
                right-[-6px]
                `}
                />

              </div>

            </div>
          )
        })
      }

    </section>
  )
}

export default Projects