import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";

import "./style.css";

import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { UserNavbar } from "./components/UserNavbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <MantineProvider>
            <UserNavbar />
            <div id="layout">
              <div></div>
              {children}
              <div></div>
            </div>
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
