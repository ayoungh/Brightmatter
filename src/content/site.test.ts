import { describe, expect, it } from "vitest";
import { siteConfig } from "@/content/site";

describe("siteConfig", () => {
  it("defines the complete template content model", () => {
    expect(siteConfig.name).toBe("Brightmatter AI");
    expect(siteConfig.author).toBe("Anthony Young");
    expect(siteConfig.workflow).toHaveLength(4);
    expect(siteConfig.capabilities).toHaveLength(4);
    expect(siteConfig.useCases).toHaveLength(3);
    expect(siteConfig.trust).toHaveLength(4);
    expect(siteConfig.faqs.length).toBeGreaterThanOrEqual(5);
  });

  it("uses local generated asset paths", () => {
    const assetPaths = [
      siteConfig.hero.baseImage.src,
      siteConfig.hero.activeImage.src,
      siteConfig.context.image.src,
      ...siteConfig.workflow.map((step) => step.image.src),
      ...siteConfig.useCases.map((useCase) => useCase.image.src),
      ...siteConfig.trust.map((principle) => principle.icon),
    ];

    expect(assetPaths.every((path) => path.startsWith("/assets/"))).toBe(true);
  });

  it("keeps visible copy free of dash separators", () => {
    expect(JSON.stringify(siteConfig)).not.toMatch(/[—–]/);
  });
});
