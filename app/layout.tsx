import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { Geist, Geist_Mono, Changa_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const changaOne = Changa_One({
  variable: "--font-changa",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oppskriftsmappa",
  description: "Dine favorittoppskrifter i en hektisk hverdag",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nb"
      className={`${geistSans.variable} ${geistMono.variable} ${changaOne.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
