import { expect, test } from "@playwright/test";

test("renders the ServiceFlow foundation and demo disclosure", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /one clear workflow from booking to invoice/i,
    }),
  ).toBeVisible();
  await expect(
    page.getByText(/fictional portfolio environment/i),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /view project plan/i }),
  ).toBeVisible();
});

test("theme control applies a persistent explicit theme", async ({ page }) => {
  await page.goto("/");

  const themeToggle = page.getByRole("button", {
    name: /switch to (light|dark) theme/i,
  });
  await themeToggle.click();

  await expect(page.locator("html")).toHaveClass(/dark|light/);
  await expect
    .poll(() => page.evaluate(() => window.localStorage.getItem("theme")))
    .toMatch(/dark|light/);
});
