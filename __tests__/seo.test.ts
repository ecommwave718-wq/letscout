import { readFileSync, existsSync } from "fs";
import { join } from "path";

describe("SEO Assets", () => {
  const publicDir = join(__dirname, "..", "public");

  it("has logo.png in public", () => {
    expect(existsSync(join(publicDir, "logo.png"))).toBe(true);
  });

  it("has og-image.png in public", () => {
    expect(existsSync(join(publicDir, "og-image.png"))).toBe(true);
  });

  it("has apple-touch-icon.png", () => {
    expect(existsSync(join(publicDir, "apple-touch-icon.png"))).toBe(true);
  });

  it("has manifest.json with correct name", () => {
    const manifest = JSON.parse(
      readFileSync(join(publicDir, "manifest.json"), "utf-8")
    );
    expect(manifest.name).toBe("letscout");
    expect(manifest.short_name).toBe("letscout");
    expect(manifest.theme_color).toBe("#2563eb");
  });

  it("has PWA icons referenced in manifest", () => {
    const manifest = JSON.parse(
      readFileSync(join(publicDir, "manifest.json"), "utf-8")
    );
    expect(manifest.icons).toHaveLength(2);
    expect(existsSync(join(publicDir, "icon-192.png"))).toBe(true);
    expect(existsSync(join(publicDir, "icon-512.png"))).toBe(true);
  });

  it("layout.tsx has proper SEO keywords", () => {
    const layout = readFileSync(
      join(__dirname, "..", "src", "app", "layout.tsx"),
      "utf-8"
    );
    expect(layout).toContain("scouting");
    expect(layout).toContain("lead generation");
    expect(layout).toContain("outreach automation");
    expect(layout).toContain("email marketing");
    expect(layout).toContain("store owners");
    expect(layout).toContain("letscout");
  });

  it("robots.ts exists", () => {
    expect(
      existsSync(join(__dirname, "..", "src", "app", "robots.ts"))
    ).toBe(true);
  });

  it("sitemap.ts exists", () => {
    expect(
      existsSync(join(__dirname, "..", "src", "app", "sitemap.ts"))
    ).toBe(true);
  });
});
