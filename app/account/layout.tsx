import type { Metadata } from "next";
import ButtomNavigation from "@/app/components/shared/ButtomNavigation";

export const metadata: Metadata = {
  title: "صفینو",
  description: " تحویل آنلاین نان تازه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* preloade */}
      {/* <div className="preload preload-container">
        <div className="preload-logo">
          <div className="spinner" />
        </div>
      </div> */}
      {/* /preload */}
      <div>
        {children}
        <ButtomNavigation />
      </div>
    </>
  );
}
