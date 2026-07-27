import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CapabilityExplorer } from "@/components/capability-explorer";
import { siteConfig } from "@/content/site";

describe("CapabilityExplorer", () => {
  it("moves the expanded state between capability rows", () => {
    render(<CapabilityExplorer capabilities={siteConfig.capabilities} />);

    const research = screen.getByRole("button", { name: /Research/ });
    const decide = screen.getByRole("button", { name: /Decide/ });

    expect(research).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(decide);
    expect(research).toHaveAttribute("aria-expanded", "false");
    expect(decide).toHaveAttribute("aria-expanded", "true");
  });
});
