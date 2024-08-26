import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Portfolio",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}

// Work Page
export const WORK: Page = {
  TITLE: "Mon parcours",
  DESCRIPTION: "Mon parcours au fil des années",
}

// Work Page
export const SCHOOL: Page = {
  TITLE: "Mon parcours scolaire",
  DESCRIPTION: "Mon parcours scolaire au fil des années",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projets",
  DESCRIPTION: "Les projets récent sur lequel j'ai travaillé",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Recherche",
  DESCRIPTION: "Recherche de mes projets.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Accueil", 
    HREF: "/", 
  },
  { 
    TEXT: "Mon parcours", 
    HREF: "/work", 
  },
  { 
    TEXT: "Projets", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "theo.duflos.yokoko@gmail.com",
    HREF: "mailto:theo.duflos.yokoko@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "yokokorico",
    HREF: "https://github.com/Yokokorico"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Théo Duflos",
    HREF: "https://www.linkedin.com/in/th%C3%A9o-duflos-8625a8262/",
  },
  {
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "Théo Duflos",
    HREF: "https://www.instagram.com/theo.duflos.yoko/",
  }
]

