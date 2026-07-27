import { LogoMark } from "@/components/logo-mark";
import { siteConfig } from "@/content/site";

export function FloatingCta() {
  return (
    <aside className="floating-cta" aria-label="Quick link">
      <LogoMark size={46} />
      <span className="floating-copy">
        <strong>{siteConfig.shortName}</strong>
        <span>Clear context. Better decisions.</span>
      </span>
      <a href={siteConfig.primaryCta.href}>
        {siteConfig.primaryCta.label}
        <span aria-hidden="true">→</span>
      </a>
    </aside>
  );
}
