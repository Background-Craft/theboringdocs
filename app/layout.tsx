import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import SiteHeader from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Boring Docs",
  description: "The Boring Docs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="ce58ae45-2dd0-48b6-8df2-bb3e8625e6da"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <SiteHeader />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20 flex-grow">
            {children}
          </main>
          {/* Footer */}
          <footer className="text-center text-sm text-gray-500 py-4">
            <p>
              Brought to you by{" "}
              <Link
                href="https://backgroundcraft.com"
                className="text-muted-foreground hover:text-primary underline underline-offset-4"
                target="_blank"
                rel="noopener noreferrer">
                Background Craft
              </Link>{" "}
              – because someone had to do it.
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
