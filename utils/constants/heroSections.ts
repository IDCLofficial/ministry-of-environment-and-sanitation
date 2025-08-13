export interface HeroConfig {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  height?: 'small' | 'medium' | 'large' | 'extra-large';
  alignment?: 'left' | 'center';
  overlay?: boolean;
  className?: string;
}

export const HERO_CONFIGS = {
  HOME: {
    title: "Protecting Our Environment.\nEnsuring Cleanliness.\nBuilding a Sustainable Future.",
    description: "The Imo State Ministry of Environment and Sanitation leads the charge in environmental protection, waste management, and climate resilience for a cleaner, greener state.",
    height: 'extra-large' as const,
    alignment: 'left' as const
  },

  DEPARTMENT: {
    title: "Department of Environment and Sanitation",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  PROJECTS: {
    title: "Transforming Imo Through Strategic Environmental Projects",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  TEAM: {
    title: "Leadership Behind the Ministry",
    height: 'medium' as const,
    alignment: 'left' as const,
    className: "py-16 md:py-24"
  },
  
  SERVICES: {
    title: "Our Services",
    description: "Comprehensive environmental management and sanitation services for Imo State",
    height: 'medium' as const,
    alignment: 'left' as const,
  },
  
  NEWS: {
    title: "Environmental Updates and Initiatives Across Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  MEDIA: {
    title: "Digital Stories of Impact",
    description: "Explore our gallery of photos, videos, and press releases capturing our journey toward a clean, green Imo",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  EVENTS: {
    title: "Environmental Campaigns & Community Engagements",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  ABOUT: {
    title: "About the Ministry of Environment and Sanitation",
    description: "Building a clean, green, safe, and climate-resilient Imo State through effective policies and sustainable practices",
    height: 'medium' as const,
    alignment: 'left' as const
  }
} as const;
