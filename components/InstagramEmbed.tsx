"use client"

import { useEffect, useRef } from 'react'

type Props = {
    url: string
    /** What screen readers call the reel once Instagram's script draws it. */
    title?: string
    className?: string
}

export default function InstagramEmbed({ url, title = 'Instagram reel', className }: Props) {
    const ref = useRef<HTMLQuoteElement>(null)

    useEffect(() => {
        // Instagram's script swaps this blockquote for an iframe with no
        // title, so watch the wrapper and name the iframe when it appears.
        const wrapper = ref.current?.parentElement
        if (!wrapper) return
        const name = () =>
            wrapper.querySelectorAll('iframe').forEach((frame) => {
                if (!frame.title) frame.title = title
            })
        const observer = new MutationObserver(name)
        observer.observe(wrapper, { childList: true, subtree: true })
        window.instgrm?.Embeds.process()
        name()
        return () => observer.disconnect()
    }, [title])

    return (
        <blockquote
            ref={ref}
            className={`instagram-media ${className ?? ''}`}
            data-instgrm-permalink={url}
            data-instgrm-version="14"
        />
    )
}
