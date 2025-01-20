import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'Blog with Giscus comments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-5">
            <a href="/" className="text-2xl font-bold text-gray-300">
              My Blog
            </a>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="mt-8 py-4">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-300">
            © 2025 My Blog
          </div>
        </footer>
      </body>
    </html>
  )
}