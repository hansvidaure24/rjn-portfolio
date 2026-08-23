import type { Metadata } from 'next'
import styles from '../Work.module.scss'
import Image from 'next/image'
import projects from '@/data/projects';
import Button from '@/components/Button'
import YouTubeEmbed from '@/components/YoutubeVideo';

export const metadata: Metadata = {
  title: 'XXL — RJN Portfolio',
  description: 'High-impact music and lifestyle video work for XXL, showcasing videography and branded storytelling.',
};

export default function XXLPage() {
    const project = projects.xxl;
    return (
        <>  
            <main>
                <div className={styles.banner}>
                    <Image
                        src={project.hero}
                        alt=""
                        fill
                        className={styles.bannerImage}
                        priority
                        loading="eager"
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={`${styles.projectTitle} ${styles.reveal}`}  style={{ animationDelay: "0.2s" }}>{project.title}</h1>
                    <p className={`${styles.projectSummary} ${styles.reveal}`} style={{ animationDelay: "0.4s" }}>
                        As a sister brand of ScreenCrush, XXL allowed me to expand my filmmaking into the world of hip-hop. I helped produce interviews, editorial features, and social content featuring artists such as A$AP Ferg, DaBaby, and GloRilla, creating engaging content for one of rap&apos;s most influential magazines and outlets.
                    </p>
                    <YouTubeEmbed id="DY1ktlSWodw" className={`${styles.heroVideo}`} />
                    <h2 className={`${styles.role} ${styles.reveal}`} style={{ animationDelay: "0.6s" }}>Position: Videographer</h2>
                    <p className={`${styles.sectionIntro} ${styles.reveal}`} style={{ animationDelay: "0.8s" }}>
                        With professional filmmaking in mind, I used industry standard  cinema cameras, lighting, and audio equipment to create visually compelling content.
                    </p>
                </div>
                <div className={styles.smallGrid}>
                    <YouTubeEmbed id="imqYJ52v1ag" className={`${styles.smallItem} ${styles.reveal}`} style={{ animationDelay: "1.0s" }} />
                    <YouTubeEmbed id="LEmsLmB9kNg" className={`${styles.smallItem} ${styles.reveal}`} style={{ animationDelay: "1.15s" }} />
                    <YouTubeEmbed id="HmYHk7bC2xE" className={`${styles.smallItem} ${styles.reveal}`} style={{ animationDelay: "1.3s" }} />
                    <YouTubeEmbed id="6R-mTP2YCuQ" className={`${styles.smallItem} ${styles.reveal}`} style={{ animationDelay: "1.45s" }} />
                </div>
                <Button href={projects.socialmediacampaigns.link} className={styles.button} >Next Page</Button>
            </main>
        </>
    )
}
