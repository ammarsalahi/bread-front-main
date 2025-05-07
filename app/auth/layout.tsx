import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفینو",
  description: " تحویل آنلاین نان تازه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
