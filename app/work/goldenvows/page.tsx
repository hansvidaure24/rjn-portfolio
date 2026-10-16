import type { Metadata } from 'next'
import Image from 'next/image'
import styles from '../Work.module.scss'
import projects from '@/data/projects';
import Button from '@/components/Button'
import YouTubeEmbed from '@/components/YoutubeVideo'

export const metadata: Metadata = {
  title: 'Golden Vows — RJN Portfolio',
  description: 'A cinematic wedding film case study showing storytelling, editing, and emotional visual direction.',
};

export default function GoldenVowsPage() {
    const project = projects.goldenvows;
    
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
                        With my passion to capture beautiful images and tell everlasting stories, I began filming weddings to help couples capture the most important days of their lives in a romantic, tear-jerking way. Below are some of the couples I&apos;ve had the pleasure of capturing their days, from 1 minute trailers to 30 min films!
                    </p>
                    <div className={styles.heroVideo}>
                        <video
                            src="/videos/Video1.mp4#t=1"
                            controls
                            playsInline
                            preload="metadata"
                            className={styles.videoWrapper}
                        />
                    </div>
                    <p className={`${styles.sectionIntro} ${styles.reveal}`} style={{ animationDelay: "0.6s" }}>
                        I&apos;ve had the honor of not only filming weddings as an independent creative but also helping studios like Raynor Studios, Two Soul Wedding Films and Enchanted Celebrations deliver cinematic wedding films to their couples!
                    </p>
                    <div className={styles.smallGridVideo}>
                        <div className={`${styles.smallItem} ${styles.reveal}`} style={{ animationDelay: "1.0s" }}>
                            <video
                                src="/videos/Video2.mp4#t=1"
                                className={styles.videoWrapper}
                                controls
                                playsInline
                                preload="metadata"
                            />
                        </div>
                        <div className={`${styles.smallItem} ${styles.reveal}`} style={{ animationDelay: "1.15s" }}>
                            <video
                                src="/videos/Video4.mp4"
                                className={styles.videoWrapper}
                                controls
                                playsInline
                                preload="metadata"
                            />
                        </div>
                        <div className={`${styles.smallItem} ${styles.reveal}`} style={{ animationDelay: "1.3s" }}>
                            <video
                                src="/videos/Video3.mp4#t=1"
                                className={styles.videoWrapper}
                                controls
                                playsInline
                                preload="metadata"
                            />
                        </div>
                        <YouTubeEmbed id="xq3QYcRTw2k" className={`${styles.smallItem} ${styles.reveal}`} style={{ animationDelay: "1.45s" }} />
                        <YouTubeEmbed id="MX5QOl4zwD4" className={`${styles.smallItem} ${styles.reveal}`} style={{ animationDelay: "1.6s" }} />
                    </div>
                    <Button href="/contact" className={styles.button} >Book Now</Button>
                    <Button href={projects.screencrush.link} className={styles.button} >Next Page</Button>
                </div>
            </main>
        </>
    )
}
