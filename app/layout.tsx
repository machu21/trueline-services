import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trueline Services | Elite Virtual Assistance for Modern Enterprises",
  description: "High-bandwidth operational partners for growing companies. From executive admin to technical support, we provide precision assistance to scale your business.",
  icons: {
    icon: "/favicon.ico", // Make sure to add a favicon later!
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'scroll-smooth' enables the smooth sliding when clicking Navbar links
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-black 
          text-white
          selection:bg-ice/30 selection:text-ice
        `}
      >
        {children}
      </body>
    </html>
  );
}