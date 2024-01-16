import "@/styles/globals.css";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Health Tracker",
  description: "test description",
  // twitter: {
  //   card: "summary_large_image",
  //   creator: "@imamdev_",
  //   images: "https://example.com/og.png",
  // },
  applicationName: "Health Tracker",
  appleWebApp: {
    capable: true,
    title: "Health Tracker",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },

  manifest: "/manifest.json",
  icons: [
    { rel: "apple-touch-icon", url: "/icons/apple-touch-icon.png" },
    { rel: "shortcut icon", url: "/favicon.ico" },
  ],
  keywords: ["nextjs", "pwa", "next-pwa"],
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
