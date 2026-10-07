import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DonationProvider } from "@/context/DonationContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Family Service Centre (FSC) | Empowering Families, Protecting Children - Mumbai",
  description:
    "Established in 1955, Family Service Centre (FSC) is a leading secular non-profit organization in Mumbai providing legal adoption (CARA RIPA), educational child sponsorship, Bal Sangopan Yojana (BSY), and community empowerment.",
  keywords: [
    "Family Service Centre Mumbai",
    "FSC Mumbai",
    "child adoption Mumbai",
    "CARA adoption agency",
    "child sponsorship India",
    "Bal Sangopan Yojana",
    "Colaba NGO",
    "family counseling Mumbai",
  ],
  authors: [{ name: "Family Service Centre Mumbai" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <body>
        <DonationProvider>
          <Navbar />
          {children}
          <Footer />
        </DonationProvider>
      </body>
    </html>
  );
}
