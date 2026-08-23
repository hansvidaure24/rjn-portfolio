"use client"

import { useEffect } from 'react'

type Props = {
    url: string
    className?: string
}

export default function InstagramEmbed({ url, className }: Props) {
    useEffect(() => {
        window.instgrm?.Embeds.process()
    }, [])

    return (
        <blockquote
            className={`instagram-media ${className ?? ''}`}
            data-instgrm-permalink={url}
            data-instgrm-version="14"
        />
    )
}
