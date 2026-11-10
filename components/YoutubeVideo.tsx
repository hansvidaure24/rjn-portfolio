import styles from './YoutubeVideo.module.scss'
import { VIDEO_TITLES } from '@/data/videoTitles'

type Props = {
    id: string
    /** What screen readers call the player; defaults to the film's YouTube title. */
    title?: string
    className?: string
    style?: React.CSSProperties
}

export default function YouTubeEmbed({
    id,
    title,
    className,
    style,
}: Props) {
    return (
        <div
            className={[styles.youtubeVideo, className]
                .filter(Boolean)
                .join(' ')}
            style={style}
        >
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
                title={title ?? VIDEO_TITLES[id] ?? 'YouTube video'}
                width="100%"
                height="100%"
                loading="lazy"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                allowFullScreen
            />
        </div>
    )
}