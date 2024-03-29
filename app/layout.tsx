import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import { Montserrat } from "next/font/google";
import Navbar from "./Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Theme appearance="light" accentColor="mint">
          <Navbar />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
