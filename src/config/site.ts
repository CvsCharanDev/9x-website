export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    linkedin: string;
    github: string;
    facebook: string;
  };
  contact: {
    email: string;
    phoneIndia: string;
    phoneDubai: string;
    offices: {
      city: string;
      country: string;
      address: string;
      region: string;
    }[];
  };
}

export const siteConfig: SiteConfig = {
  name: "9X Technology",
  description:
    "9X Technology delivers world-class custom software development, FinTech trading systems, cloud architecture, and AI engineering for global enterprises.",
  url: "https://9xtechnology.com",
  ogImage: "https://9xtechnology.com/og.jpg",
  links: {
    twitter: "https://twitter.com/9xtech",
    linkedin: "https://linkedin.com/company/9xtechnology",
    github: "https://github.com/9xtechnology",
    facebook: "https://facebook.com/9xtechnology",
  },
  contact: {
    email: "contact@9xtechnology.com",
    phoneIndia: "+91 40 4917 9999",
    phoneDubai: "+971 4 582 9999",
    offices: [
      {
        city: "Hyderabad",
        country: "India",
        region: "HITEC City, Telangana",
        address: "9th Floor, Tech Hub Towers, HITEC City, Hyderabad 500081",
      },
      {
        city: "Dubai",
        country: "United Arab Emirates",
        region: "Al Quoz & Downtown",
        address: "Level 14, Boulevard Plaza Tower 1, Downtown Dubai, UAE",
      },
    ],
  },
};
