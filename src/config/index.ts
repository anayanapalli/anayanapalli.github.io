import { FaGithub, FaLinkedin } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"

// Optional type for custom nav items
type NavItem = { label: string; link: string }

export const common = {
  siteName: "Anish Nayanapalli",
  domain: "https://astro-air.guoqi.dev",
  meta: {
    favicon: "/avatar.png",
    title: "Anish Nayanapalli's Blog",
    description: "Reading, Photography, Programming, Traveling",
    url: "https://blog.sunguoqi.com",
  },
  googleAnalyticsId: "",
  social: [
    {
      icon: GrInstagram,
      label: "Instagram",
      link: "https://instagram.com/stoicanish/",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/anayanapalli/",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/anayanapalli",
    },
  ],
  rss: false,
  navigation: {
    home: true,
    archive: true,
    custom: [] as NavItem[],
    links: true,
    about: true,
  },
  latestPosts: 8,
  comments: {
    enabled: false,
    twikoo: {
      enabled: false,
      envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
    },
  },
  pageMeta: {
    archive: {
      title: "All Posts",
      description: "Here are all my posts",
      ogImage: "/images/page-meta/en/archive.png",
    },
    links: {
      title: "My Friends",
      description: "Here are my friends",
      ogImage: "/images/page-meta/en/links.png",
    },
    about: {
      title: "About Me",
      description: "Here is my self-introduction",
      ogImage: "/images/page-meta/en/about.png",
    },
  },
}
