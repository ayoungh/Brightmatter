import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Brightmatter AI",
  shortName: "Brightmatter",
  author: "Anthony Young",
  description:
    "Applied intelligence that turns complex work into clear, explainable next steps.",
  siteUrl: "https://brightmatter.example",
  navigation: [
    { label: "Workflow", href: "#workflow" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Principles", href: "#principles" },
    { label: "Questions", href: "#questions" },
  ],
  hero: {
    eyebrow: "Applied intelligence, made legible",
    title: "Turn complexity into a clear next move",
    description:
      "Brightmatter gathers the context around a hard decision, shows its reasoning, and helps your team move forward with confidence.",
    cta: { label: "See the workflow", href: "#workflow" },
    baseImage: {
      src: "/assets/hero/hero-base.webp",
      alt: "A strategist standing inside a luminous analysis space",
      width: 1920,
      height: 1086,
    },
    activeImage: {
      src: "/assets/hero/hero-active.webp",
      alt: "The same analysis space illuminated with connected signals",
      width: 1920,
      height: 1086,
    },
  },
  workflow: [
    {
      number: "01",
      label: "Collect",
      title: "Bring the work together",
      description:
        "Give Brightmatter the sources, conversations, and constraints surrounding the decision.",
      points: [
        "Connect documents and working knowledge",
        "Keep source context attached",
      ],
      image: {
        src: "/assets/workflow/collect.webp",
        alt: "A researcher arranging notes and transparent data sheets",
        width: 1440,
        height: 1080,
      },
    },
    {
      number: "02",
      label: "Understand",
      title: "See what connects",
      description:
        "Brightmatter maps the evidence, surfaces tensions, and makes every important link inspectable.",
      points: [
        "Trace conclusions back to evidence",
        "Spot gaps before they become blockers",
      ],
      image: {
        src: "/assets/workflow/understand.webp",
        alt: "An analyst studying a field of connected signals",
        width: 1440,
        height: 1080,
      },
    },
    {
      number: "03",
      label: "Decide",
      title: "Compare the paths",
      description:
        "Explore a small set of defensible options with tradeoffs written in plain language.",
      points: [
        "Test assumptions against the full context",
        "Keep human judgment in control",
      ],
      image: {
        src: "/assets/workflow/decide.webp",
        alt: "Colleagues comparing a set of illuminated decision paths",
        width: 1440,
        height: 1080,
      },
    },
    {
      number: "04",
      label: "Act",
      title: "Carry context forward",
      description:
        "Turn the chosen direction into a clear plan that teams can understand, challenge, and use.",
      points: [
        "Create practical next steps",
        "Preserve the reasoning behind the decision",
      ],
      image: {
        src: "/assets/workflow/act.webp",
        alt: "An operations lead moving through a luminous threshold",
        width: 1440,
        height: 1080,
      },
    },
  ],
  capabilities: [
    {
      number: "01",
      title: "Research",
      description: "Find the useful signal without losing the source.",
      detail:
        "Brightmatter reads across the material you choose and keeps every finding connected to its origin.",
    },
    {
      number: "02",
      title: "Organise",
      description: "Build a shared picture from scattered context.",
      detail:
        "Themes, constraints, and open questions take shape in a structure your whole team can inspect.",
    },
    {
      number: "03",
      title: "Decide",
      description: "Compare options with the tradeoffs in view.",
      detail:
        "Each path is framed by evidence, assumptions, and the consequences that deserve attention.",
    },
    {
      number: "04",
      title: "Act",
      description: "Move from agreement to a useful plan.",
      detail:
        "Briefs, decisions, and next steps remain grounded in the context that produced them.",
    },
  ],
  context: {
    eyebrow: "Connected context",
    title: "Bring the full picture into view",
    description:
      "Brightmatter helps teams see what matters most by turning scattered data into clarity.",
    points: [
      {
        title: "Connect the dots",
        description: "Unify fragmented data across systems and sources.",
      },
      {
        title: "Reveal what matters",
        description: "Surface patterns and anomalies others miss.",
      },
      {
        title: "Keep judgment visible",
        description: "Make every recommendation open to review.",
      },
    ],
    image: {
      src: "/assets/ui/context.webp",
      alt: "A translucent workspace showing connected research signals",
      width: 1440,
      height: 1080,
    },
  },
  useCases: [
    {
      label: "Strategy",
      title: "Stress-test the assumptions",
      description: "Move from debate to a direction the team can defend.",
      image: {
        src: "/assets/workflow/strategy.webp",
        alt: "A strategist reviewing possible scenarios",
        width: 1440,
        height: 1080,
      },
    },
    {
      label: "Operations",
      title: "See around the corners",
      description: "Turn live constraints into practical, coordinated action.",
      image: {
        src: "/assets/workflow/operations.webp",
        alt: "An operations leader coordinating a complex process",
        width: 1440,
        height: 1080,
      },
    },
    {
      label: "Research",
      title: "Build knowledge that lasts",
      description: "Connect sources, findings, and decisions in one clear record.",
      image: {
        src: "/assets/workflow/research.webp",
        alt: "A researcher connecting insights across several sources",
        width: 1440,
        height: 1080,
      },
    },
  ],
  trust: [
    {
      title: "Visible sources",
      description: "Every important claim stays connected to its origin.",
      icon: "/assets/icons/provenance.png",
    },
    {
      title: "Human control",
      description: "People set the direction, review the work, and make the call.",
      icon: "/assets/icons/control.png",
    },
    {
      title: "Private by default",
      description: "Your workspace is designed around deliberate access.",
      icon: "/assets/icons/privacy.png",
    },
    {
      title: "Built to adapt",
      description: "Change the context and the reasoning changes with it.",
      icon: "/assets/icons/context.png",
    },
  ],
  faqs: [
    {
      question: "What is Brightmatter AI?",
      answer:
        "Brightmatter is a fictional example product for this template. It demonstrates how an AI platform can explain its value through a complete, credible product story.",
    },
    {
      question: "Can I replace the content and imagery?",
      answer:
        "Yes. Navigation, copy, metadata, workflow steps, capabilities, trust principles, FAQs, and asset paths are defined in one typed configuration file.",
    },
    {
      question: "Does the template include a backend?",
      answer:
        "No. This version is a focused marketing template. Its calls to action navigate within the page and can be connected to your preferred signup or contact flow.",
    },
    {
      question: "How does the motion behave on mobile?",
      answer:
        "The layout uses shorter transforms, normal-flow media, and touch-friendly controls. Pointer-only effects become composed static treatments.",
    },
    {
      question: "What happens when reduced motion is enabled?",
      answer:
        "The site keeps the complete visual story while disabling mask tracking, parallax, magnetic movement, and animated expansion.",
    },
  ],
  primaryCta: { label: "See the workflow", href: "#workflow" },
};
