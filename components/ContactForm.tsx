"use client"

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './ContactForm.module.scss'
import Button from './Button'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [invalidField, setInvalidField] = useState<'email' | 'phone' | null>(null)
  const isSending = status === 'sending'

  function toPascalCase(value: string) {
    return value
      .trim()
      .split(/\s+/)
      .map(
        (word) =>
          word.charAt(0).toUpperCase() +
          word.slice(1).toLowerCase()
      )
      .join(' ')
  }
  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  function formatPhone(value: string) {
    const trimmed = value.trim()
    const hasPlus = trimmed.startsWith('+')
    const normalized = trimmed.replace(/[^\d+]/g, '')
    const digits = hasPlus ? normalized.slice(1) : normalized
    const maxLength = hasPlus ? 15 : 10
    const clean = (hasPlus ? '+' : '') + digits.slice(0, maxLength)

    if (hasPlus) {
      return clean.replace(/\+(\d{1,3})(\d{1,3})?(\d{1,4})?(\d{1,4})?/, (_, a, b, c, d) => {
        const parts = ['+' + a]
        if (b) parts.push(b)
        if (c) parts.push(c)
        if (d) parts.push(d)
        return parts.join(' ')
      })
    }

    const parts: string[] = []
    if (digits.length > 0) parts.push(digits.slice(0, 3))
    if (digits.length > 3) parts.push(digits.slice(3, 6))
    if (digits.length > 6) parts.push(digits.slice(6, 10))
    return parts.join(' ')
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setInvalidField(null)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setErrorMessage('Email service not configured. Set NEXT_PUBLIC_EMAILJS_* env vars.')
      return
    }

    if (!validateEmail(email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address.")
      setInvalidField('email')
      return
    }

    // Normalize phone and validate digits for flexible international entry
    const normalizedPhone = phone.replace(/[^\d+]/g, '')
    const digitsOnly = normalizedPhone.startsWith('+')
      ? normalizedPhone.slice(1).replace(/\D/g, '')
      : normalizedPhone.replace(/\D/g, '')

    if (normalizedPhone && (digitsOnly.length < 7 || digitsOnly.length > 15)) {
      setStatus('error')
      setErrorMessage('Please enter a valid phone number with 7 to 15 digits.')
      setInvalidField('phone')
      return
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: normalizedPhone || "Not provided",
      message: message,
      to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || '',
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setStatus('sent')
      setErrorMessage(null)
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      const msg =
        (err as { text?: string; message?: string })?.text ||
        (err as { text?: string; message?: string })?.message ||
        'There was an error sending your message.'
      setErrorMessage(String(msg))
      console.error('EmailJS error:', err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} aria-label="Contact form">
      <label className={styles.visuallyHidden} htmlFor="cf-name">Name</label>
      <input
        id="cf-name"
        className={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => setName(toPascalCase(name))}
        placeholder="Name"
        required
        aria-required="true"
        disabled={isSending}
      />

      <label className={styles.visuallyHidden} htmlFor="cf-email">Email</label>
      <input
        id="cf-email"
        type="email"
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value.toLowerCase())}
        placeholder="Email"
        required
        aria-required="true"
        aria-invalid={invalidField === 'email'}
        aria-describedby={invalidField === 'email' ? 'contact-form-status' : undefined}
        disabled={isSending}
      />

      <label className={styles.visuallyHidden} htmlFor="cf-phone">Phone</label>
      <input
        id="cf-phone"
        type="tel"
        inputMode="tel"
        pattern="^\+?[0-9 ]{7,20}$"
        title="Enter a phone number with 7 to 15 digits; spaces and optional + are allowed."
        maxLength={20}
        className={styles.input}
        value={phone}
        onChange={(e) => setPhone(formatPhone(e.target.value))}
        placeholder="Phone (optional)"
        aria-invalid={invalidField === 'phone'}
        aria-describedby={invalidField === 'phone' ? 'contact-form-status' : undefined}
        disabled={isSending}
      />

      <label className={styles.visuallyHidden} htmlFor="cf-message">Message</label>
      <textarea
        id="cf-message"
        className={`${styles.input} ${styles.textarea}`}
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder="Message"
        required
        aria-required="true"
        disabled={isSending}
      />

      <Button type="submit" className={styles.button} disabled={isSending} aria-busy={isSending}>Send Message</Button>
      {status === 'sending' && (
        <div id="contact-form-status" className={`${styles.status} ${styles.sending}`} role="status" aria-live="polite">
          Sending…
        </div>
      )}
      {status === 'sent' && (
        <div id="contact-form-status" className={`${styles.status} ${styles.success}`} role="status" aria-live="polite">
          Thanks — message sent.
        </div>
      )}
      {status === 'error' && (
        <div id="contact-form-status" className={`${styles.status} ${styles.error}`} role="alert" aria-live="assertive">
          {errorMessage || 'There was an error sending your message.'}
        </div>
      )}
    </form>
  )
}
