export interface SocialLink {
  name: string;
  href: string;
  icon: "instagram" | "facebook" | "x" | "linkedin";
}

export const socialLinks: SocialLink[] = [
  { name: "Instagram", href: "https://www.instagram.com/sco2.computacion", icon: "instagram" },
  { name: "Facebook", href: "https://www.facebook.com/SCo2SomosTodos/", icon: "facebook" },
  { name: "X", href: "https://x.com/SCo2_", icon: "x" },
];
