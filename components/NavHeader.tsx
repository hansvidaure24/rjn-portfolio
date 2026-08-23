"use client"

import React, { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './NavHeader.module.scss'

export default function NavHeader() {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)
  const hamburgerRef = useRef<HTMLButtonElement | null>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null)
  const mobileContentRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  const transparentRoutes = [
    '/work/screencrush',
    '/work/goldenvows',
    '/work/xxl',
    '/work'
  ]
  const transparent = transparentRoutes.some(route =>
    pathname?.startsWith(route)
  )

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // keep the rest of the page out of the tab order / a11y tree while the dialog is open
  useEffect(() => {
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    if (open) {
      main?.setAttribute('inert', '')
      footer?.setAttribute('inert', '')
    } else {
      main?.removeAttribute('inert')
      footer?.removeAttribute('inert')
    }
    return () => {
      main?.removeAttribute('inert')
      footer?.removeAttribute('inert')
    }
  }, [open])

  const didOpenRef = useRef(false)
  useEffect(() => {
    if (open) {
      didOpenRef.current = true
      firstMobileLinkRef.current?.focus()
    } else if (didOpenRef.current) {
      hamburgerRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab') return

      const focusable = mobileContentRef.current?.querySelectorAll<HTMLElement>('a, button')
      if (!focusable || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    function setNavHeight() {
      const h = navRef.current?.offsetHeight ?? 64
      document.documentElement.style.setProperty('--nav-height', `${h}px`)
    }   
    setNavHeight()
    const ro = new ResizeObserver(setNavHeight)
    if (navRef.current) ro.observe(navRef.current)
    window.addEventListener('resize', setNavHeight)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', setNavHeight)
    }
  }, [])

  return (
    <>
      <nav ref={navRef} className={`${styles.nav} ${transparent ? styles.transparent : ''}`}>
        <Link href="/" className={styles.brand}>RJN</Link>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/work" className={styles.link}>Work</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
        <button
          ref={hamburgerRef}
          className={`${styles.hamburger} ${open ? styles.open : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(o => !o)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </nav>
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.show : ''}`}
        onClick={() => setOpen(false)}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className={styles.mobileContent} ref={mobileContentRef} onClick={(e) => e.stopPropagation()}>
          <nav className={styles.mobileLinks}>
            <Link ref={firstMobileLinkRef} href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/work" onClick={() => setOpen(false)}>Work</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      </div>
    </>
  )
}
