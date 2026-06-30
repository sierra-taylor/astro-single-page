export interface LandingPageData {
  meta: Meta;
  businessData: BusinessData;
  headerData: HeaderData;
  heroData: HeroData;
  servicesData: ServicesData;
  aboutData: AboutData;
  brandsData: BrandsData;
  pricingData: PricingData;
  footerData: FooterData;
}

export interface BusinessData {
  name: string;
  email: string;
  phone: string;
  phoneNumFormatted: string;
  license: string;
  address: Address;
}

export interface Address {
  lineOne: string;
  lineTwo: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  mapLink: string;
}

export interface HeaderData {
  logo: string;
  image: string;
  links: Link[];
}

export interface HeroData {
  title: string;
  subTitle: string;
  image: string;
  primaryCta: string;
  secondaryCta: string;
  highlightedTitle: string;
}

export interface ServicesData {
  title: string;
  services: Service[];
}

export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface AboutData {
  title: string;
  about: Adventaje[];
}

export interface Adventaje {
  title: string;
  description: string;
  img: string;
  imageAlt: string;
  checks: string[];
}

export interface FooterData {
  logo: string;
  description: string;
  links: Link[];
  socials: Social[];
}

export interface Link {
  label: string;
  href: string;
}

export interface Social {
  icon: string;
  href: string;
}

export interface BrandsData {
  title: string;
  description: string;
  brands: Brand[];
}

export interface Brand {
  label: string;
  icon: string;
  href: string;
}

export interface PricingData {
  title: string;
  tiers: Tier[];
}

export interface Tier {
  title: string;
  description: string;
  price: Price;
  features: string[];
  cta: string;
}

export interface Price {
  amount: string;
  period?: string;
}

export interface Meta {
  title: string;
  description: string;
  lang: string;
  charset: string;
  ldJson: LdJson;
}

export interface LdJson {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint: {
    "@type": string;
    email: string;
    contactType: string;
  };
  sameAs: string[];
}

export type Icon =
  | "DevIcon"
  | "FileIcon"
  | "PlanetIcon"
  | "ConfigIcon"
  | "CheckIcon"
  | "InstagramIcon"
  | "GithubIcon"
  | "TwitterIcon"
  | "FacebookIcon"
  | "ReactIcon"
  | "SvelteIcon"
  | "SolidIcon"
  | "VueIcon"
  | "VercelIcon"
  | "NetlifyIcon";
