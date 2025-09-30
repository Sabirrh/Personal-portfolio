'use client';
import { Outfit, Ovo } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
});

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ovo',
  
});

export const metadata = {
  title: 'Portfolio',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${ovo.variable} scroll-smooth`} suppressHydrationWarning>
      <body
        className={`${outfit.className} antialiased leading-8 overflow-x-hidden  `}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}