"use client"

/**
 * Starts an image at high priority on the page that renders this. A client
 * component on purpose: a preload from a server component also rides along
 * in the data other pages prefetch for this one, and fires there too.
 */
export default function PreloadImage({ href, type }: { href: string; type?: string }) {
  return <link rel="preload" as="image" href={href} type={type} fetchPriority="high" />
}
