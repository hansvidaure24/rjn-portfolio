"use client"

import Image from 'next/image'
import styles from './ReferralsTab.module.scss'
import { useInView } from '@/hooks/useInView'

export default function ReferralsTab() {
  const { ref, inView } = useInView<HTMLDivElement>()

  const logos = [
    { src: '/images/ScreenCrush.avif', alt: 'ScreenCrush logo' },
    { src: '/images/XXL.png', alt: 'XXL logo' },
    { src: '/images/Loudwire.png', alt: 'Loudwire logo' },
    { src: '/images/TrueReligion.png', alt: 'True Religion logo' },
    { src: '/images/Lids.png', alt: 'Lids logo' },
    { src: '/images/RaynorStudios.png', alt: 'Raynor Studios logo' },
    { src: '/images/EnchantedCelebrations.png', alt: 'Enchanted Celebrations logo' },
  ]

  return (
    <section className={styles.tab}>
      <p className={styles.label}>Trusted by</p>
      <h2 className={styles.title}>Connecting brands to their audiences:</h2>
      <div className={styles.logos} ref={ref}>
        {logos.map((logo, i) => (
          <div
            className={`${styles.logo} ${inView ? styles.inView : ''}`}
            key={i}
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            <Image src={logo.src} alt={logo.alt} width={220} height={110} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}
