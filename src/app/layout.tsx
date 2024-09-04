// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar, Footer } from './components';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Joal Roselin | Salesforce Devaaeloper & Web Engineer</title> {/* Update the title */}
        <meta name="description" content="Showcase of my work and skills in Salesforce development and web engineering." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        <main className="container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}