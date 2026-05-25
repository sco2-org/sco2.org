import { eventDetails } from "./event-details";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export function getNavigation(lang: "es" | "en", t: any): NavItem[] {
  const prefix = lang === "en" ? "/en" : "";
  const cccEditions = eventDetails
    .filter((e) => e.category === "ccc")
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));

  const congressChildren: NavItem[] = [
    { label: t.nav.ccc20, href: `${prefix}/20ccc/` },
    ...cccEditions.map((ev) => ({
      label: lang === "en" ? ev.titleEn : ev.titleEs,
      href: `${prefix}/evento/${ev.slug}/`,
    })),
  ];

  return [
    { label: t.nav.society, href: `${prefix}/#about` },
    {
      label: t.nav.congress,
      href: "#",
      children: congressChildren,
    },
    { label: t.nav.events, href: lang === "en" ? "/en/events/" : "/eventos/" },
    { label: t.nav.chapters, href: lang === "en" ? "/en/chapters/" : "/capitulos/" },
    { label: t.nav.contact, href: `${prefix}/#contact` },
  ];
}
