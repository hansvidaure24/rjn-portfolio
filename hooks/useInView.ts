"use client"

import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, { threshold: 0.2, ...options })

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only wire up the observer once, on mount
  }, [])

  return { ref, inView }
}
