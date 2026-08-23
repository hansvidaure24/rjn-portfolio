import styles from './YoutubeVideo.module.scss'

type Props = {
    id: string
    className?: string
    style?: React.CSSProperties
}

export default function YouTubeEmbed({
    id,
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
                title={`YouTube Video ${id}`}
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