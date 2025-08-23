import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { misterio_del_dia } from './prayers.js'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: `Santo Rosario | ${misterio_del_dia().nombre}`,
  description: "¿Nunca has rezado el rosario? ¿No sabes cuáles misterios tocan hoy? ¡Esta aplicación es para ti!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
