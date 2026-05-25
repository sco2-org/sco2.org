export interface SocialLink {
  name: string;
  href: string;
  icon: "instagram" | "facebook" | "x" | "linkedin";
}

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { name: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  { name: "X", href: "https://x.com/", icon: "x" },
];
