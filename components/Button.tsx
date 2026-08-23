"use client"

import Link from 'next/link'
import React from 'react'
import styles from './Button.module.scss'

type Props = React.PropsWithChildren<{
  href?: string
  external?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.MouseEvent) => void
  fullWidth?: boolean
  disabled?: boolean
  left?: boolean
}>;

export default function Button({ href, external, className = '', children, type = 'button', onClick, fullWidth, disabled, left}: Props) {
  const cls = [styles.button, className]
  if (fullWidth) cls.push(styles.fullWidth)
  if (left) cls.push(styles.left)
  const classNames = cls.join(' ')

  if (href) {
    if (external) {
      return (
        <a href={href} className={classNames} onClick={onClick} rel="noopener noreferrer" target="_blank">
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classNames} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
