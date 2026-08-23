import type { Metadata } from 'next'
import Image from 'next/image'
import styles from '../Work.module.scss'
import projects from '@/data/projects'
import Button from '@/components/Button'
import InstagramEmbed from '@/components/InstagramEmbed'
import InstagramScript from '@/components/InstagramScript'

export const metadata: Metadata = {
    title: 'Social Media Campaigns — RJN Portfolio',
    description: 'Platform-native photo and video content built to help brands stand out and reach audiences across social media.',
};

const reels = [
    'https://www.instagram.com/reel/DaO_4ykuX-S/',
    'https://www.instagram.com/reel/DZLngwmO_9i/',
    'https://www.instagram.com/reel/DFvJKPdxi-B/',
    'https://www.instagram.com/reel/DFxp3qgxrW4/',
    'https://www.instagram.com/reel/DLXjGnEMOX7/',
]

export default function SocialMediaCampaignsPage() {
    const project = projects.socialmediacampaigns;
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
                    <h1 className={`${styles.projectTitle} ${styles.reveal}`} style={{ animationDelay: "0.2s" }}>{project.title}</h1>
                    <p className={`${styles.projectSummary} ${styles.reveal}`} style={{ animationDelay: "0.4s" }}>
                        Reaching audiences across different platforms is a non-negotiable in the world of modern filmmaking. That&apos;s why I helped these brands reach their audiences by distinguishing their content with high quality and engaging content.
                    </p>
                    <p className={`${styles.sectionIntro} ${styles.reveal}`} style={{ animationDelay: "0.6s" }}>
                        Selected campaigns built for native, short-form engagement across Instagram.
                    </p>
                    <div className={styles.instagramGrid}>
                        {reels.map((url, i) => (
                            <div key={url} className={`${styles.instagramItem} ${styles.reveal}`} style={{ animationDelay: `${1.0 + i * 0.15}s` }}>
                                <InstagramEmbed url={url} />
                            </div>
                        ))}
                    </div>
                </div>
                <Button href={projects.goldenvows.link} className={styles.button}>Next Page</Button>
            </main>
            <InstagramScript />
        </>
    )
}
