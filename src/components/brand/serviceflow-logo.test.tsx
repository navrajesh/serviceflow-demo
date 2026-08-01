import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ServiceFlowLogo } from "@/components/brand/serviceflow-logo";

describe("ServiceFlowLogo", () => {
  it("provides an accessible link to the public home page", () => {
    render(<ServiceFlowLogo />);

    expect(
      screen.getByRole("link", { name: "ServiceFlow home" }),
    ).toHaveAttribute("href", "/");
  });
});
