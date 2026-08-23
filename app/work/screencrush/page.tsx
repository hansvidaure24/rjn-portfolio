import type { Metadata } from 'next'
import Button from '@/components/Button';
import styles from '../Work.module.scss'
import Image from 'next/image'
import projects from '@/data/projects';
import YouTubeEmbed from '@/components/YoutubeVideo';

export const metadata: Metadata = {
  title: 'ScreenCrush — RJN Portfolio',
  description: 'Branded editorial and post-production work for ScreenCrush, including video strategy and storytelling.',
};

export default function ScreenCrushPage() {
    const project = projects.screencrush;
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
                        From Editing Intern to Post Production Coordinator, I&apos;ve helped grow ScreenCrush from 800K to 1.89M subscribers, leading post-production workflows, managing editorial schedules, and delivering branded content covering the latest in movies, television, and pop culture.
                    </p>
                    <YouTubeEmbed id="BAQ5-tvm8Go" className={styles.heroVideo} />
                    <h2 className={`${styles.role} ${styles.reveal}`} style={{ animationDelay: "0.6s" }}>Position: Post Production Coordinator</h2>
                    <p className={`${styles.sectionIntro} ${styles.reveal}`} style={{ animationDelay: "0.8s" }}>
                        Below are editorial pieces and branded campaigns produced for partners including SAILY, BetterHelp, and NordVPN. Each project balanced storytelling, audience engagement, and performance.
                    </p>
                </div>
                <div className={styles.smallGrid}>
                    <YouTubeEmbed id="E31Tvx3oT9w" className={`${styles.smallItem} ${styles.reveal}`} style={{ animationDelay: "1.0s" }} />
                    <YouTubeEmbed id="fF_zF0KR3Tk" className={`${styles.smallItem} ${styles.reveal}`} style={{ animationDelay: "1.15s" }} />
                    <YouTubeEmbed id="m8X_4MWYS0U" className={`${styles.smallItem} ${styles.reveal}`} style={{ animationDelay: "1.3s" }} />
                    <YouTubeEmbed id="r1TCMCwU7PI" className={`${styles.smallItem} ${styles.reveal}`} style={{ animationDelay: "1.45s" }} />
                </div>
                <Button href={projects.xxl.link} className={styles.button} >Next Page</Button>
            </main>
        </>
    )
}
