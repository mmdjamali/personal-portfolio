import json from "../../content/projects.json"

import React from 'react'

function Projects() {
  return (
    <div
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
      gap-1
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
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-4
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
                  {technologies.map((item , idx) => {
                    return(
                      <span
                      key={idx}
                      >
                        {item}
                      </span>
                    )
                  })}
                </div>

                <div
                className="
                flex
                gap-2
                ">
                  <button>
                    demo
                  </button>
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
    </div>
  )
}

export default Projects