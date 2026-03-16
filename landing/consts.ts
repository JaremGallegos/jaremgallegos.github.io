import type { IconMap, SocialLink, Site } from 'types'

export const SITE: Site = {
  title: 'JosephGallegos',
  description: 'Pagina principal de la landing Page',
  href: 'https://github.com/JaremGallegos',
  author: 'JosephGallegos',
  locate: 'ES',
  featuredPostCount: 2,
  postsPerPage: 3
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/aboutme',
    label: 'user-profile-active'
  },
  {
    href: '/comments',
    label: 'transcript'
  },
  {
    href: '/experience',
    label: 'gen-ai'
  },
  {
    href: '/projects',
    label: 'folder-open'
  },
  {
    href: '/skills',
    label: 'command-prompt'
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'www.linkedin.com/in/jaremgallegos',
    label: 'Linkedin'
  },
  {
    href: 'mailto:jaremgallegosis@gmail.com',
    label: 'Email'
  },
  {
    href: 'https://join.slack.com/t/josephgallegos/shared_invite/zt-3so64c1b8-WxYs8RDKZHKIuZNbkwKV0g',
    label: 'Slack'
  }
]

export const ICON_MAP: IconMap = {
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail',
  Slack: 'lucide:slack'
}