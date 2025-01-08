import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "../config/site";
import { fontSans } from "../config/fonts"
import React from "react";
import { Navbar } from "../components/navbar";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
         <Navbar />

          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/0jas0jas"
                title="Ojas"
              >
                <span className="text-default-400">Ojas</span>
              </Link>
              <div> &nbsp; | &nbsp; </div>
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/sathyasriram777"
                title="Sathya Sriram"
              >
                <span className="text-default-400">Sathya</span>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
