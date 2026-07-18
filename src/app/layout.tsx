import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://s-dent.ua"),
  title: "S.Dent — Стоматологічна клініка | Сучасна стоматологія у Києві",
  description:
    "S.Dent — сімейна стоматологічна клініка у Києві. Лікування зубів, імплантація, відбілювання, ортодонтія. Сучасне обладнання, досвідчені лікарі, комфортні умови. Запишіться на консультацію!",
  keywords:
    "стоматологія, стоматолог Київ, лікування зубів, імплантація, відбілювання зубів, брекети, S.Dent, стоматологічна клініка",
  openGraph: {
    title: "S.Dent — Стоматологічна клініка",
    description:
      "Сучасна стоматологічна клініка у Києві. Якісне лікування для всієї родини.",
    url: "https://s-dent.ua",
    siteName: "S.Dent",
    locale: "uk_UK",
    type: "website",
    images: [
      {
        url: "/images/clinic/clinic-1.jpg",
        width: 1200,
        height: 630,
        alt: "S.Dent Стоматологічна клініка",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.Dent — Стоматологічна клініка",
    description:
      "Сучасна стоматологічна клініка у Києві. Якісне лікування для всієї родини.",
    images: ["/images/clinic/clinic-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://s-dent.ua",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "S.Dent",
              description:
                "Сучасна стоматологічна клініка у Києві. Якісне лікування для всієї родини.",
              url: "https://s-dent.ua",
              telephone: "+380974433639",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Іоанна Павла ІІ, буд. 11",
                addressLocality: "Київ",
                addressCountry: "UA",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "20:00",
                },
              ],
              image: "/images/clinic/clinic-1.jpg",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans text-text bg-surface">{children}</body>
    </html>
  );
}
