import styles from './SiteFooter.module.scss'
import { MailIcon, InstagramIcon, LinkedInIcon } from '../components/icons'

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>© {new Date().getFullYear()} RJN Visuals</div>
      <a href="mailto:rj.nombrado@gmail.com" className={styles.iconLink} aria-label="Email rj.nombrado@gmail.com">
        <MailIcon className={styles.icon} aria-hidden="true" />
        <span className={styles.label}>rj.nombrado@gmail.com</span>
      </a>
      <a href="https://www.instagram.com/goldenvows.video/" target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="Instagram">
        <InstagramIcon className={styles.icon} aria-hidden="true" />
        <span className={styles.label}>Instagram</span>
      </a>
      <a href="https://www.linkedin.com/in/randolf-nombrado-379155144/" target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="LinkedIn">
        <LinkedInIcon className={styles.icon} aria-hidden="true" />
        <span className={styles.label}>LinkedIn</span>
      </a>
    </footer>
  )
}