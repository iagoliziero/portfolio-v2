"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function AnimatedText() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  )

  return (
    <div
      ref={ref}
      className="relative flex justify-center text-center mt-20 mb-20 lg:mt-0 font-serif"
    >
      <h2 className="text-2xl md:text-3xl lg:text-5xl text-foreground/10">
      on purpose.
      </h2>

      <motion.h2
        style={{ clipPath }}
        className="absolute text-2xl md:text-3xl lg:text-5xl
        bg-gradient-to-r from-primary via-blue-00 to-primary
        bg-clip-text text-transparent"
      >
       on purpose.
      </motion.h2>
    </div>
  )
}
