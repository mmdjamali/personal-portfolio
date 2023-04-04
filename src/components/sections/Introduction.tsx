"use client"

import Crown from '@/svg/Crown'
import React , { useRef , useCallback } from 'react'
import CallToAction from '../buttons/CallToAction'
import JSButton from '../buttons/JSButton'
import { motion } from "framer-motion"
import {introduction_contact } from '@/content/intrudaction'
import { useAppState } from '@/stores/store'
import { useChangeSection } from '@/hooks/change-section'

const Introduction = () => {
  const { language } = useAppState()

  const json = introduction_contact[language]
  
  const ref =  useChangeSection("introduction")

  return (
    <section
    id="Introduction"
    ref={ref}
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
            dark:text-white
            flex 
            flex-wrap
            `}>
              {
                json.header.map((item , idx) => {  
                  return (
                    <motion.div
                    key={item[5] + item[0] + idx}
                    transition={{
                      delay : ((idx + 1) * .1) + .4
                    }}
                    initial={{
                      y : -60,
                      opacity : 0
                    }}
                    whileInView={{
                      y : 0,
                      opacity : 1
                    }}
                    viewport={{
                      once : true
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
                            <JSButton
                            key={idx + text}/>
                          )
                          return(
                            <span
                            key={idx + text}
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
            dark:text-white
            flex
            flex-wrap
            gap-x-1
            '>
            {json.offer
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
                  once : true,
                }}
                >
                  {word}
                </motion.span>
              )
            })
            }
            </p>

            <div
            key={json['cta-main']}
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
                once : true,
              }}
              >
                <CallToAction
                onClick={() => {
                  document.getElementById("Contact")?.scrollIntoView({
                    block : "start",
                    behavior : "smooth"
                  })
                }}
                secondary={false}
                >
                  {json['cta-main']}
                </CallToAction>
              </motion.div>

              <motion.a
              href={"cv/mmdjamali_resume_" + language + ".pdf"}
              download="mmdjamali_cv"
              key={json['cta-secondary']}
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
                  {json['cta-secondary']}
                </CallToAction>
              </motion.a>
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
            once : true,
            margin : "0px 0px -50% 0px"
          }}
          >
            <Crown
            className='
            w-[50vw]
            lg:w-[30vw]
            aspect-square
            '
            color="
            fill-neutral-800
            dark:fill-neutral-50
            "
            backdropColor="
            fill-neutral-900
            dark:fill-neutral-200
            "
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
            once : true,
            margin : "0px 0px -50% 0px"
          }}
          className={`
          absolute
          `}>
            <Crown
            className='
            w-[10%]
            aspect-square
            '
            backdropColor="fill-violet-600"
            color="fill-violet-500"
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
            once : true,
            margin : "0px 0px -50% 0px"
          }}
          >
            <Crown
            className='
            w-[15%]
            aspect-square
            '
            backdropColor="fill-yellow-600"
            color="fill-yellow-400"
            />
          </motion.span>
        </div>
    </section>
  )
}

export default Introduction