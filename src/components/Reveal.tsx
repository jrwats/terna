import { useEffect, useRef, useState } from "react"

type Direction = "up" | "left" | "right"

interface RevealProps {
  children: React.ReactNode
  delay?: number
  direction?: Direction
  className?: string
}

const dirClass: Record<Direction, string> = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
}

export const Reveal = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${dirClass[direction]}${visible ? " is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
