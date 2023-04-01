"use client"

import Crown from '@/svg/Crown'
import React , { useRef , useCallback } from 'react'
import CallToAction from '../buttons/CallToAction'
import JSButton from '../buttons/JSButton'
import { motion } from "framer-motion"
type props = {
  changeCurrent : (value : string) => void
}

const Introduction : React.FC<props> = ({
  changeCurrent
}) => {

  const observer = useRef<IntersectionObserver | null>(null)
  
  const handle =  useCallback((node : HTMLElement) => {

    if(observer.current) observer.current.disconnect()
    
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        changeCurrent && changeCurrent("Home")
      }
    },{
      rootMargin:(node.offsetHeight / 3) * -1 + "px 0px"
    })

    if(node) observer.current.observe(node)

  },[])

  return (
    <section
    ref={handle}
    className={`
    flex
    lg:flex-row
    flex-col
    py-16
    items-center
    gap-y-8
    `}>
        <div
        className='
        flex
        flex-col
        gap-3
        '>
            <h1
            className={`
            max-w-[500px]
            xl:text-[64px]
            sm:text-[56px]
            text-[40px]
            font-bold
            text-neutral-800
            flex 
            flex-wrap
            `}>
              {
                ["Hi I'm MmD","a self taught", "JS developer"].map((item , idx) => {  
                  return (
                    <motion.div
                    transition={{
                      delay : ((idx + 1) * .1) + .4
                    }}
                    initial={{
                      y : -60,
                      opacity : 0
                    }}
                    animate={{
                      y : 0,
                      opacity : 1
                    }}
                    className='
                    w-full
                    flex
                    flex-wrap
                    gap-x-2
                    '>
                      {
                        item.split(" ").map((text,i) => {
                          if(text === "JS") return(
                            <JSButton/>
                          )
                          return(
                            <span
                            className={text === "MmD" ? "text-violet-500" : ""}>
                              {text}
                            </span>
                          )
                        })
                      }
                    </motion.div>
                  )
                  
                })
              }
            </h1>

            <p
            className='
            text-neutral-800
            flex
            flex-wrap
            gap-x-1
            '>
            {"Let me help take your startup's ideas to life with engaging and interactive frontend development."
            .split(" ")
            .map((word , idx) => {
              return(
                <motion.span
                key={word + idx}
                transition={{
                  delay : ((idx + 1) * .05) + 1
                }}
                initial={{
                  y : -30,
                  opacity : 0,
                }}
                whileInView={{
                  y : 0,
                  opacity : 1
                }}
                viewport={{
                  once : true
                }}
                >
                  {word}
                </motion.span>
              )
            })
            }
            </p>

            <div
            className='
            pt-8
            flex
            flex-wrap
            gap-4
            '>
              <motion.div
              transition={{
                delay : 2
              }}
              initial={{
                y : -30,
                opacity : 0,
              }}
              whileInView={{
                y : 0,
                opacity : 1
              }}
              viewport={{
                once : true
              }}
              >
                <CallToAction
                secondary={false}
                >
                  Hire me
                </CallToAction>
              </motion.div>

              <motion.div
              transition={{
                delay : 2.5
              }}
              initial={{
                y : -30,
                opacity : 0,
              }}
              whileInView={{
                y : 0,
                opacity : 1
              }}
              viewport={{
                once : true
              }}
              >
                <CallToAction
                secondary
                >
                  Download CV
                </CallToAction>
              </motion.div>
            </div>
        </div>

        <div
        className='
        relative
        '>
          <motion.span
          initial={{
            opacity : 0,
          }}
          whileInView={{
            opacity : 1,
          }}
          viewport={{
            once : true
          }}
          >
            <Crown
            className='
            w-[50vw]
            lg:w-[30vw]
            aspect-square
            '
            color="fill-neutral-900"
            backdropColor="fill-neutral-800"
            />
          </motion.span>

          <motion.span
          initial={{
            bottom : "50%",
            left : "50%",
            opacity : 0
          }}
          whileInView={{
            bottom : "5%",
            left : "5%",
            opacity : 1
          }}
          viewport={{
            once : true
          }}
          className={`
          absolute
          `}>
            <Crown
            className='
            w-[10%]
            aspect-square
            '
            color="fill-violet-600"
            backdropColor="fill-violet-500"
            />
          </motion.span>

          <motion.span
          className='
          absolute
          '
          initial={{
            top : "50%",
            left : "50%",
            opacity : 0
          }}
          whileInView={{
            top : "15%",
            left : "5%",
            opacity : 1
          }}
          viewport={{
            once : true
          }}
          >
            <Crown
            className='
            w-[15%]
            aspect-square
            '
            color="fill-yellow-600"
            backdropColor="fill-yellow-400"
            />
          </motion.span>
        </div>
    </section>
  )
}

export default Introduction