import type { Metadata } from 'next';
import './globals.css';
import '@/styles/theme.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'NEXARCRISE Client | Higher Education, Japanese Language, Research & Japan Careers',
  description: 'Empowering students to pursue higher education abroad, master Japanese language (N5-N1), engage in cutting-edge research projects, and build engineering careers in Japan.',
  keywords: 'NexArc RISE, Higher Education Japan, Learn Japanese in India, Student Research Lab, Tokyo Tech Jobs, Engineering Careers in Japan, JLPT Training',
  openGraph: {
    title: 'NexArc RISE – Student Innovation, Research & Global Pathways',
    description: 'Explore global degrees, Japanese language tracks, student research projects, and Tokyo engineering job opportunities.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased selection:bg-amber-200 selection:text-amber-950">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
