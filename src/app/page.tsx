import Image from "next/image";
import { CapabilityExplorer } from "@/components/capability-explorer";
import { FaqList } from "@/components/faq-list";
import { FloatingCta } from "@/components/floating-cta";
import { HeadlineDrift } from "@/components/headline-drift";
import { HeroGradeShift } from "@/components/hero-grade-shift";
import { LogoMark } from "@/components/logo-mark";
import { MagneticHeroLink } from "@/components/magnetic-hero-link";
import { ParallaxMedia } from "@/components/parallax-media";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/content/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div id="top" className="page-shell">
        <section className="hero-section" aria-labelledby="hero-title">
          <SiteHeader />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{siteConfig.hero.eyebrow}</p>
              <div className="headline-clip">
                <h1 id="hero-title">{siteConfig.hero.title}</h1>
              </div>
              <p className="hero-description">{siteConfig.hero.description}</p>
              <MagneticHeroLink
                href={siteConfig.hero.cta.href}
                label={siteConfig.hero.cta.label}
              />
              <p className="hero-footnote">
                Designed for decisions that deserve a clear record.
              </p>
            </div>
            <HeroGradeShift
              baseImage={siteConfig.hero.baseImage}
              activeImage={siteConfig.hero.activeImage}
            />
          </div>
        </section>

        <main id="main-content">
          <section
            id="workflow"
            className="workflow-section"
            aria-labelledby="workflow-title"
          >
            <div className="section-heading workflow-heading">
              <HeadlineDrift>
                <h2 id="workflow-title">A better way through complex work</h2>
              </HeadlineDrift>
              <p>
                Four clear stages keep the evidence, reasoning, and next move in
                view.
              </p>
            </div>

            <div className="workflow-list">
              {siteConfig.workflow.map((step) => (
                <article className="workflow-step" key={step.number}>
                  <div className="workflow-rule">
                    <span>{step.number}</span>
                    <span>{step.label}</span>
                  </div>
                  <div className="workflow-step-grid">
                    <div className="workflow-copy">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                      <ul>
                        {step.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <ParallaxMedia className="workflow-media">
                      <Image
                        src={step.image.src}
                        alt={step.image.alt}
                        fill
                        sizes="(max-width: 767px) 100vw, 60vw"
                        loading="eager"
                      />
                    </ParallaxMedia>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="capabilities"
            className="capabilities-section"
            aria-labelledby="capabilities-title"
          >
            <div className="capability-heading">
              <div className="measure-rail" aria-hidden="true">
                <span>BRIGHTMATTER</span>
                <i />
                <span>04 CAPABILITIES</span>
              </div>
              <HeadlineDrift>
                <h2 id="capabilities-title">
                  Intelligence that works <em>in the open</em>
                </h2>
              </HeadlineDrift>
              <p>
                Useful AI should make the path easier to inspect, not harder to
                question.
              </p>
            </div>
            <CapabilityExplorer capabilities={siteConfig.capabilities} />
          </section>

          <section
            className="context-section"
            aria-labelledby="context-title"
          >
            <div className="context-copy">
              <p className="eyebrow">{siteConfig.context.eyebrow}</p>
              <HeadlineDrift>
                <h2 id="context-title">{siteConfig.context.title}</h2>
              </HeadlineDrift>
              <p className="context-description">
                {siteConfig.context.description}
              </p>
              <div className="context-points">
                {siteConfig.context.points.map((point, index) => (
                  <article key={point.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{point.title}</h3>
                      <p>{point.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <ParallaxMedia className="context-media">
              <Image
                src={siteConfig.context.image.src}
                alt={siteConfig.context.image.alt}
                fill
                sizes="(max-width: 767px) 100vw, 58vw"
                loading="eager"
              />
              <div className="context-orbit" aria-hidden="true">
                <span />
                <span />
              </div>
            </ParallaxMedia>
          </section>

          <section className="use-cases-section" aria-labelledby="use-cases-title">
            <div className="use-cases-heading">
              <HeadlineDrift>
                <h2 id="use-cases-title">
                  Built for work with real consequences
                </h2>
              </HeadlineDrift>
              <p>
                A clear decision surface for teams navigating uncertainty,
                change, and shared responsibility.
              </p>
            </div>
            <div
              className="use-cases-rail"
              role="region"
              aria-label="Use cases"
              tabIndex={0}
            >
              {siteConfig.useCases.map((useCase, index) => (
                <article className="use-case" key={useCase.label}>
                  <div className="use-case-image">
                    <Image
                      src={useCase.image.src}
                      alt={useCase.image.alt}
                      fill
                      sizes="(max-width: 767px) 82vw, 31vw"
                      loading="eager"
                    />
                    <span className="use-case-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="use-case-label">{useCase.label}</p>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="principles"
            className="principles-section"
            aria-labelledby="principles-title"
          >
            <div className="principles-heading">
              <HeadlineDrift>
                <h2 id="principles-title">Clear by design</h2>
              </HeadlineDrift>
              <p>
                Clarity belongs in the foundation, so people can understand the
                work and decide with purpose.
              </p>
            </div>
            <div className="principles-grid">
              {siteConfig.trust.map((principle) => (
                <article key={principle.title}>
                  <Image
                    src={principle.icon}
                    alt=""
                    width={54}
                    height={54}
                    loading="eager"
                  />
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="questions"
            className="faq-section"
            aria-labelledby="faq-title"
          >
            <div className="faq-heading">
              <p className="eyebrow">Questions answered</p>
              <HeadlineDrift>
                <h2 id="faq-title">The useful details</h2>
              </HeadlineDrift>
              <p>
                A practical starting point for turning Brightmatter into your
                own product story.
              </p>
            </div>
            <FaqList items={siteConfig.faqs} />
            <noscript>
              <div className="faq-noscript">
                {siteConfig.faqs
                  .map((item) => `${item.question} ${item.answer}`)
                  .join(" ")}
              </div>
            </noscript>
          </section>
        </main>

        <footer className="site-footer">
          <section
            className="footer-cta"
            aria-labelledby="footer-cta-title"
          >
            <HeadlineDrift>
              <h2 id="footer-cta-title">
                Make the next move <em>clearer</em>
              </h2>
            </HeadlineDrift>
            <p>
              Replace the content, connect your destination, and make the
              template unmistakably yours.
            </p>
            <a className="aperture-target" href={siteConfig.primaryCta.href}>
              <span>{siteConfig.primaryCta.label}</span>
              <span aria-hidden="true">→</span>
            </a>
          </section>

          <div className="footer-base">
            <div className="footer-brand">
              <LogoMark size={58} />
              <div>
                <strong>{siteConfig.name}</strong>
                <p>{siteConfig.description}</p>
              </div>
            </div>
            <nav aria-label="Footer navigation">
              {siteConfig.navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
            <p className="footer-note">
              Open-source Next.js template by {siteConfig.author}. ©{" "}
              {new Date().getFullYear()}.
            </p>
          </div>
        </footer>
      </div>

      <FloatingCta />
    </>
  );
}
