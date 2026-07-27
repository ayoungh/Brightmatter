import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FaqList } from "@/components/faq-list";
import { siteConfig } from "@/content/site";

describe("FaqList", () => {
  it("exposes accordion state and opens another answer", () => {
    render(<FaqList items={siteConfig.faqs} />);

    const first = screen.getByRole("button", {
      name: siteConfig.faqs[0].question,
    });
    const second = screen.getByRole("button", {
      name: siteConfig.faqs[1].question,
    });

    expect(first).toHaveAttribute("aria-expanded", "true");
    expect(second).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(second);

    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(second).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(siteConfig.faqs[1].answer)).toBeVisible();
  });
});
