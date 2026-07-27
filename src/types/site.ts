export type GeneratedAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavItem = {
  label: string;
  href: string;
};

export type WorkflowStep = {
  number: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  image: GeneratedAsset;
};

export type Capability = {
  number: string;
  title: string;
  description: string;
  detail: string;
};

export type UseCase = {
  label: string;
  title: string;
  description: string;
  image: GeneratedAsset;
};

export type TrustPrinciple = {
  title: string;
  description: string;
  icon: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  author: string;
  description: string;
  siteUrl: string;
  navigation: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    cta: NavItem;
    baseImage: GeneratedAsset;
    activeImage: GeneratedAsset;
  };
  workflow: WorkflowStep[];
  capabilities: Capability[];
  context: {
    eyebrow: string;
    title: string;
    description: string;
    points: Array<{ title: string; description: string }>;
    image: GeneratedAsset;
  };
  useCases: UseCase[];
  trust: TrustPrinciple[];
  faqs: FaqItem[];
  primaryCta: NavItem;
};
