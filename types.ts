export type PageId = 'home' | 'work' | 'services' | 'about' | 'contact'

export interface Project {
  title: string
  link: string
  hero: string
  gallery: string[]
}
