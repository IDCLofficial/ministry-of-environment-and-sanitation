export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/about",
    label: "About Us"
  },
  {
    href: "/department",
    label: "Department"
  },
  {
    href: "/projects",
    label: "Projects"
  },
  {
    href: "/services",
    label: "Services"
  },
  {
    href: "/news",
    label: "News"
  },
  {
    href: "/events",
    label: "Events"
  },
  {
    href: "/media",
    label: "Media"
  },
  {
    href: "/contact",
    label: "Contact Us"
  }
];

export const CONTACT_INFO = {
  address: "Ministry of Environment and Sanitation, State Secretariat, Owerri, Imo State",
  email: "info@environment.im.gov"
};
