"use client"

import { useState } from "react"
import styles from "./ServicesTab.module.scss"
import { useInView } from "@/hooks/useInView"

const services = [
  {
    title: "Filmmaking",
    description:
      "From initial concept to final delivery, cinematic films that capture emotion bring stories that resonate."
  },
  {
    title: "Post-Production",
    description:
      "Editing, color grading, sound design, and finishing touches that transform raw footage into a polished and compelling final piece."
  },
  {
    title: "Brand Content",
    description:
      "Strategic visual content designed to strengthen your brand identity, connect with audiences, and leave a lasting impression."
  },
  {
    title: "Documentary Storytelling",
    description:
      "Authentic, human-centered storytelling that uncovers meaningful moments and brings real experiences to life."
  }
]
export default function ServicesTab() {
  const [active, setActive] = useState(-1)
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className={styles.tab}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Services</h2>
          <p className={styles.subheading}>
            RJN Visuals blends professional filmmaking techniques with modern media strategies to create content that connects.
          </p>
        </div>

        <div className={styles.right} ref={ref}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${styles.item} ${inView ? styles.inView : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <button
                className={styles.header}
                aria-expanded={active === index}
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
              >
                <h3>{service.title}</h3>

                <span
                  className={`${styles.icon} ${
                    active === index ? styles.open : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`${styles.content} ${
                  active === index ? styles.active : ""
                }`}
              >
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}