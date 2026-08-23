import type { Metadata } from 'next'
import styles from './About.module.scss'
import Image from 'next/image'
import Button from '../../components/Button'

export const metadata: Metadata = {
  title: 'About — RJN Portfolio',
  description: 'Learn about Randolf, a New York-based filmmaker and video creative who crafts emotional visual storytelling for brands and weddings.',
};

export default function About() {
  return (
    <main>
      <section className={styles.layout} aria-label="About">
        <div className={styles.portrait}>
          <Image
            src="/images/Randolf_Headshot.jpg"
            alt="Portrait of Randolf Nombrado, filmmaker"
            fill
            priority
            sizes="auto"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        <div className={styles.gallery} aria-hidden="true">
          <div className={styles.galleryItem}>
            <Image src="/images/Randolf1.jpg" alt="" fill sizes="auto" style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.galleryItem}>
            <Image src="/images/Randolf2.jpg" alt="" fill sizes="auto" style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.galleryItem}>
            <Image src="/images/Randolf3.jpg" alt="" fill sizes="auto" style={{ objectFit: 'cover',
              objectPosition: 'right',}} />
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.label}>About</p>
          <p className={styles.p}>
            I&apos;m Randolf, a New York-based filmmaker and video creative with a
            passion for visual storytelling. If there&apos;s one word that defines
            my approach, it&apos;s emotion. How can I make the viewer FEEL
            something? Every creative decision—from lens choice and lighting
            to pacing and composition—is made with that goal in mind.
          </p>
          <h1 className={styles.title}>...because Emotion leads to ACTION</h1>
          <p className={styles.p}>
            My journey began creating promo videos in high school, earning a
            Bachelor&apos;s degree in Film and Media at CUNY Hunter College, and
            has continued through more than four years working professionally
            in the entertainment industry. Whether it&apos;s helping a brand reach
            millions or creating a film that brings a couple to tears as they
            relive their wedding day, the goal remains the same: create
            something that connects with people.
          </p>
          <p className={styles.closing}>Let&apos;s create something
            together.</p>
          <Button href="/contact" className={styles.button} left>
            Contact me
          </Button>
        </div>

      </section>
    </main>
  )
}