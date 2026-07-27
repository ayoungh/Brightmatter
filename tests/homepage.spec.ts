import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("renders the full editorial story", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Turn complexity into a clear next move",
    }),
  ).toBeVisible();
  await expect(page.getByTestId("hero-grade-shift")).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "A better way through complex work",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "Clear by design" }),
  ).toBeVisible();

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  expect(overflow).toBe(false);
});

test("supports keyboard and accordion interaction", async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, "Keyboard focus test runs in the desktop project");
  await page.goto("/");
  await expect(page.getByTestId("faq-list")).toHaveAttribute(
    "data-hydrated",
    "true",
  );
  await page
    .getByRole("button", { name: "Can I replace the content and imagery?" })
    .click();

  await expect(
    page.getByText(
      "Yes. Navigation, copy, metadata, workflow steps, capabilities, trust principles, FAQs, and asset paths are defined in one typed configuration file.",
    ),
  ).toBeVisible();

  await page.keyboard.press("Tab");
  await expect(page.locator(":focus-visible")).toBeVisible();
});

test("has no serious accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();

  expect(results.violations).toEqual([]);
});

test.describe("mobile layout", () => {
  test.skip(({ isMobile }) => !isMobile, "Mobile project only");

  test("opens navigation and keeps the page within the viewport", async ({
    page,
  }) => {
    await page.goto("/");
    await page.locator('summary[aria-label="Open navigation"]').click();
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    );
    expect(overflow).toBe(false);
  });

  test("uses the reduced motion fallback", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const scrollBehavior = await page.locator("html").evaluate((element) => {
      return getComputedStyle(element).scrollBehavior;
    });

    expect(scrollBehavior).toBe("auto");
  });
});
