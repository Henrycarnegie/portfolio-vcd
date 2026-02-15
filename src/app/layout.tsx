import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/ui/LoadingScreen";

const outfit = Outfit({
   variable: "--font-outfit",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Tasya | VCD Portfolio",
   description: "Visual Communication Design Portfolio",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${outfit.variable} antialiased`}>
            <LoadingScreen duration={2000} />
            {children}
         </body>
      </html>
   );
}
