import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "letscout dashboard — manage your scouting campaigns, leads, and outreach sequences.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
