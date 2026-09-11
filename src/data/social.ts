import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

export const socialLinks = [
  {
    name: "GitHub",
    url: import.meta.env.VITE_GITHUB_URL || "https://github.com/Nihal-33",
    icon: FaGithub
  },
  {
    name: "LinkedIn",
    url: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/",
    icon: FaLinkedin
  },
  {
    name: "Instagram",
    url: import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/",
    icon: FaInstagram
  },
  {
    name: "X",
    url: import.meta.env.VITE_TWITTER_URL || "https://twitter.com/",
    icon: FaXTwitter
  }
];
