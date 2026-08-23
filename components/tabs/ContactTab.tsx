import styles from './ContactTab.module.scss'
import Button from '../Button'

export default function ContactTab() {
  return (
    <section className={styles.tab}>
      <div className={styles.contactBox}>
        <h2 className={styles.title}>Interested in collaborating on a project?</h2>
        <Button href="/contact" className={styles.button}>
          Let&apos;s Chat!
        </Button>
      </div>
    </section>
  )
}
