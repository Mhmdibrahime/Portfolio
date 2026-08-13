import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mohamed-ibrahim.online"),
  title: {
    default: "Mohamed Ibrahim — Software Engineer",
    template: "%s | Mohamed Ibrahim",
  },
  description:
    "Software Engineer specializing in backend architecture, full-stack development, and building scalable digital products. Based in Egypt, working globally.",
  keywords: [
    "Mohamed Ibrahim",
    "Software Engineer",
    "Backend Developer",
    "Full Stack Developer",
    ".NET Developer",
    "ASP.NET Core",
    "React Developer",
    "Freelance Developer Egypt",
  ],
  authors: [{ name: "Mohamed Ibrahim", url: "https://www.mohamed-ibrahim.online" }],
  creator: "Mohamed Ibrahim",
  openGraph: {
    type: "website",
    url: "https://www.mohamed-ibrahim.online",
    siteName: "Mohamed Ibrahim",
    title: "Mohamed Ibrahim — Software Engineer",
    description:
      "I engineer scalable digital products that turn complex ideas into real-world experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ibrahim — Software Engineer",
    description:
      "I engineer scalable digital products that turn complex ideas into real-world experiences.",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Cairo:wght@300;400;500;600;700;800;900&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
