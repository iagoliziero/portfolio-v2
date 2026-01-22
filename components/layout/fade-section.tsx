"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function FadeSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  
  const opacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, 1, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
