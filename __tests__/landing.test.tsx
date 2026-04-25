import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    const { priority, fill, ...rest } = props;
    return <img {...rest} />;
  },
}));

describe("Landing Page", () => {
  it("renders the hero heading", () => {
    render(<Home />);
    expect(screen.getByText(/Scout Smarter./i)).toBeInTheDocument();
    expect(screen.getByText(/Convert Faster./i)).toBeInTheDocument();
  });

  it("renders the header with letscout branding", () => {
    render(<Home />);
    const brandElements = screen.getAllByText("letscout");
    expect(brandElements.length).toBeGreaterThan(0);
  });

  it("renders all feature cards", () => {
    render(<Home />);
    expect(screen.getByText("Smart Scouting Engine")).toBeInTheDocument();
    expect(screen.getByText("Outreach Automation")).toBeInTheDocument();
    expect(screen.getByText("Lead Enrichment")).toBeInTheDocument();
    expect(screen.getByText("Team Collaboration")).toBeInTheDocument();
    expect(screen.getByText("Deliverability Shield")).toBeInTheDocument();
    expect(screen.getByText("Integrations Hub")).toBeInTheDocument();
  });

  it("renders pricing plans", () => {
    render(<Home />);
    expect(screen.getByText("Starter")).toBeInTheDocument();
    expect(screen.getByText("Pro")).toBeInTheDocument();
    expect(screen.getByText("Enterprise")).toBeInTheDocument();
  });

  it("renders how-it-works section", () => {
    render(<Home />);
    expect(screen.getByText("How letscout Works")).toBeInTheDocument();
    expect(screen.getByText("Define Your Target")).toBeInTheDocument();
    expect(screen.getByText("Scout & Enrich")).toBeInTheDocument();
    expect(screen.getByText("Launch Outreach")).toBeInTheDocument();
    expect(screen.getByText("Close & Scale")).toBeInTheDocument();
  });

  it("renders testimonials section", () => {
    render(<Home />);
    expect(screen.getByText("What Our Users Say")).toBeInTheDocument();
    expect(screen.getByText("Sarah Chen")).toBeInTheDocument();
  });

  it("renders CTA with get-started link", () => {
    render(<Home />);
    const ctaLinks = screen.getAllByText("Get Started Free");
    expect(ctaLinks.length).toBeGreaterThan(0);
  });

  it("renders the footer with copyright", () => {
    render(<Home />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`\u00a9 ${year} letscout`))
    ).toBeInTheDocument();
  });
});
