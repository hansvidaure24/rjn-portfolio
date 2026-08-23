"use client"

import Script from 'next/script'

export default function InstagramScript() {
    return (
        <Script
            src="https://www.instagram.com/embed.js"
            strategy="lazyOnload"
            onLoad={() => window.instgrm?.Embeds.process()}
        />
    )
}
