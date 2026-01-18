import { useState, useEffect } from 'react'

export function useSidebar() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1280)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const toggle = () => {
    setIsExpanded((prev) => !prev)
  }

  return {
    isExpanded,
    isDesktop,
    toggle,
    setIsExpanded,
  }
}
