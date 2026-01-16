import { useState, useEffect, useRef } from 'react'

interface UseCounterAnimationOptions {
  start: number
  end: number
  duration?: number
  reverse?: boolean
  infinite?: boolean
  enabled?: boolean
}

export const useCounterAnimation = ({ 
  start, 
  end, 
  duration = 2000,
  reverse = false,
  infinite = false,
  enabled = true
}: UseCounterAnimationOptions) => {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
        }
      },
      { threshold: 0.5 }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible || !enabled) return

    if (infinite) {
      // Para infinito, animar hasta un número grande y luego mostrar ∞
      const startValue = 0
      const endValue = 1000
      const startTime = Date.now()

      const animate = () => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3)

        const currentValue = Math.floor(
          startValue + (endValue - startValue) * easeOut
        )

        setCount(currentValue)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(Infinity)
        }
      }

      animate()
      return
    }

    const startValue = reverse ? end : start
    const endValue = reverse ? start : end
    const startTime = Date.now()

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      const currentValue = Math.floor(
        startValue + (endValue - startValue) * easeOut
      )

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    animate()
  }, [isVisible, start, end, duration, reverse, infinite, enabled])

  return { count, elementRef }
}
