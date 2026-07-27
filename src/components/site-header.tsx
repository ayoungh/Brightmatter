import { siteConfig } from "@/content/site";
import { LogoMark } from "@/components/logo-mark";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-link" href="#top" aria-label="Brightmatter AI home">
        <LogoMark size={52} priority />
        <span>{siteConfig.shortName}</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {siteConfig.navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="nav-target" href={siteConfig.primaryCta.href}>
        <span>{siteConfig.primaryCta.label}</span>
        <span aria-hidden="true">↘</span>
      </a>

      <details className="mobile-nav">
        <summary aria-label="Open navigation">
          <span />
          <span />
        </summary>
        <nav aria-label="Mobile navigation">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </details>
    </header>
  );
}
