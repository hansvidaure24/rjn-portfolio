import { Project } from '../types'

const projects: Record<string, Project> = {
  screencrush: {
    title: 'ScreenCrush',
    link: '/work/screencrush',
    hero: '/images/Screencrush_Banner.png',
    desc: 'A bold editorial-style showcase for a modern video brand.',
    gallery: [
      'https://www.youtube.com/embed/BAQ5-tvm8Go',
      'https://www.youtube.com/embed/E31Tvx3oT9w',
      'https://www.youtube.com/embed/fF_zF0KR3Tk',
      'https://www.youtube.com/embed/m8X_4MWYS0U',
      'https://www.youtube.com/embed/r1TCMCwU7PI',
    ],
  },
  goldenvows: {
    title: 'Golden Vows',
    link: '/work/goldenvows',
    hero: '/images/GoldenVows_Banner.png',
    desc: 'Romantic storytelling and cinematic coverage for a luxury wedding experience.',
    gallery: [
      '/videos/Video1.mp4',
      '/videos/Video2.mp4',
      '/videos/Video3.mp4',
      '/videos/Video4.mp4',
    ],
  },
  xxl: {
    title: 'XXL',
    link: '/work/xxl',
    hero: '/images/XXL_Banner.png',
    desc: 'High-energy visuals crafted for a performance-focused lifestyle brand.',
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
    desc: 'Platform-native photo and video content built to help brands stand out and reach audiences across social media.',
    gallery: []
  }
}

export default projects
