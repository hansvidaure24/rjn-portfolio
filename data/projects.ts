import { Project } from '../types'

const projects: Record<string, Project> = {
  screencrush: {
    title: 'ScreenCrush',
    link: '/work/screencrush',
    hero: '/images/Screencrush_Banner.png',
    gallery: [
      'https://www.youtube.com/embed/BAQ5-tvm8Go',
      'https://www.youtube.com/embed/E31Tvx3oT9w',
      'https://www.youtube.com/embed/fF_zF0KR3Tk',
      'https://www.youtube.com/embed/m8X_4MWYS0U',
      'https://www.youtube.com/embed/r1TCMCwU7PI',
    ],
  },
  xxl: {
    title: 'XXL',
    link: '/work/xxl',
    hero: '/images/XXL_Banner.png',
    gallery: [
      'https://www.youtube.com/watch?v=imqYJ52v1ag',
      'https://www.youtube.com/watch?v=LEmsLmB9kNg',
      'https://www.youtube.com/watch?v=HmYHk7bC2xE',
      'https://www.youtube.com/watch?v=6R-mTP2YCuQ',
    ],
  },
  socialmediacampaigns: {
    title: 'Social Media Campaigns',
    link: '/work/socialmediacampaigns',
    hero: '/images/SocialMediaCampaigns_Banner.png',
    gallery: []
  },
  goldenvows: {
    title: 'Golden Vows',
    link: '/work/goldenvows',
    hero: '/images/GoldenVows_Banner.png',
    gallery: [
      '/videos/Video1.mp4',
      '/videos/Video2.mp4',
      '/videos/Video3.mp4',
      '/videos/Video4.mp4',
    ],
  },
}

export default projects
