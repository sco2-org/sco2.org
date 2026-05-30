import { eventDetails } from "./event-details";
import { chapters } from "./chapters";

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

  const chaptersChildren: NavItem[] = [
    {
      label: lang === "en" ? "All chapters" : "Todos los capítulos",
      href: lang === "en" ? "/en/chapters/" : "/capitulos/",
    },
    ...chapters.map((ch) => ({
      label: lang === "en" ? ch.nameEn : ch.nameEs,
      href: lang === "en" ? `/en/chapters/${ch.slug}/` : `/capitulos/${ch.slug}/`,
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
    {
      label: t.nav.chapters,
      href: "#",
      children: chaptersChildren,
    },
    { label: t.nav.members, href: lang === "en" ? "/en/members/" : "/miembros/" },
    { label: t.nav.contact, href: `${prefix}/#contact` },
  ];
}
