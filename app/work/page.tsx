import type { Metadata } from 'next'
import projects from '@/data/projects'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Work.module.scss'

export const metadata: Metadata = {
  title: 'Work — RJN Portfolio',
  description: 'Explore featured film, editorial, and branded projects from a professional visual storyteller.',
};

export default function WorkPage() {
  return (
  <main className={styles.grid}>
      <h1 className={styles.visuallyHidden}>Work</h1>
      {Object.keys(projects).map((k) => {
        const p = projects[k]
        return (
          <Link key={k} href={`${p.link}`} className={styles.card}>
            <Image src={`${p.hero}`} alt="" className={styles.thumb} fill sizes="(max-width: 768px) 100vw, 50vw" />
            <h2 className={styles.title}>{p.title}</h2>
          </Link>
        )
      })}
  </main>
  )
}
