import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa6";
import "./globals.css";
import ThemeToggle from "../components/ThemeToggle";
import { PreferencesProvider } from "../context/PreferencesContext";
import ErrorBoundary from "../components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Recommender",
  description: "Personalized book recommendations for readers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
        <PreferencesProvider>
          <ErrorBoundary>
            <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
              <div className="text-2xl font-bold">Book Recommender</div>
              <nav className="flex gap-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/recommendations" className="hover:underline">Recommendations</Link>
                <Link href="/preferences" className="hover:underline">Preferences</Link>
                <ThemeToggle />
              </nav>
            </header>
            <main className="container mx-auto px-4 py-8 min-h-[80vh]">{children}</main>
            <footer className="text-center py-4 text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
              &copy; {new Date().getFullYear()} Book Recommender
            </footer>
          </ErrorBoundary>
        </PreferencesProvider>
      </body>
    </html>
  );
}
