import type { Metadata } from "next";
import "./globals.css";
import MainHeaders from "@/components/main-header";

export const metadata: Metadata = {
  title: "Amazing Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeaders />
        {children}
      </body>
    </html>
  );
}
