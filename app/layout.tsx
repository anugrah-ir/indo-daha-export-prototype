import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://indodahaexport.com"),
  title: "CV Indo Daha Export | Indonesian Red Shallots & Crispy Fried Shallots Exporter",
  description: "CV Indo Daha Export is a premier Indonesian agricultural export company based in Kediri City, East Java. We supply export-grade fresh red shallots and crispy fried shallots worldwide.",
  keywords: [
    "Indo Daha Export",
    "CV Indo Daha Export",
    "Kediri shallots exporter",
    "Indonesian red onions",
    "bawang merah Kediri",
    "crispy fried shallots exporter",
    "bawang goreng renyah export",
    "Indonesian agricultural exports",
    "shallot supplier Indonesia"
  ],
  authors: [{ name: "CV Indo Daha Export" }],
  openGraph: {
    title: "CV Indo Daha Export | Indonesian Red Shallots & Crispy Fried Shallots",
    description: "Export-grade fresh red shallots and premium crispy fried onions directly from Kediri, East Java, Indonesia.",
    url: "https://indodahaexport.com",
    siteName: "CV Indo Daha Export",
    images: [
      {
        url: "/images/hero-shallots.jpg",
        width: 1200,
        height: 675,
        alt: "CV Indo Daha Export - Fresh Red Shallots from Kediri",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo-red.png",
    apple: "/logo-red.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#C22B34] selection:text-white">
        {children}
      </body>
    </html>
  );
}
