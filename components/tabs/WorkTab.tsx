import styles from './WorkTab.module.scss'
import Button from '../Button'

export default function WorkTab() {
  return (
    <section className={styles.tab} aria-label="Introduction">
        <p className={`${styles.name} ${styles.reveal}`}>Randolf Nombrado</p>
        <h1 className={`${styles.hero} ${styles.reveal}`}>RJN Visuals</h1>
        <div className={`${styles.buttonWrap} ${styles.reveal}`}>
          <Button href="/work" className={styles.button}>View Work</Button>
        </div>
    </section>
  )
}