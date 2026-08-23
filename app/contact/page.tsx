import type { Metadata } from 'next'
import ContactForm from '../../components/ContactForm'
import styles from './Contact.module.scss'

export const metadata: Metadata = {
  title: 'Contact — RJN Portfolio',
  description: 'Contact Randolf for photography and videography commissions, brand campaigns, and creative motion projects.',
};

export default function Contact() {
  return (
    <main className={styles.section} aria-labelledby="contact-title">
      <p className={`${styles.label} ${styles.reveal}`} style={{ animationDelay: "0.1s" }}>Contact</p>
      <h1 id="contact-title" className={`${styles.title} ${styles.reveal}`} style={{ animationDelay: "0.25s" }}>Let&apos;s make something together.</h1>
      <p className={`${styles.intro} ${styles.reveal}`} style={{ animationDelay: "0.4s" }}>Whether you have a brief ready or just an idea, I&apos;d love to hear from you.</p>
      <div className={styles.reveal} style={{ animationDelay: "0.55s" }}>
        <ContactForm />
      </div>
    </main>
  )
}
