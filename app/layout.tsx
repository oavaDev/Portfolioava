'use client';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>Portfolio</title>
      </head>
      <body>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
