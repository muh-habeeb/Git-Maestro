import type {Metadata} from 'next';
import {Toaster} from '@/components/ui/toaster';
import './globals.css';
import {cn} from '@/lib/utils';
import GradientBlobs from '@/components/ui/gradient-blobs';
import ScrollProgressBar from '@/components/ui/scroll-progress-bar';

export const metadata: Metadata = {
  title: 'Git Maestro',
  description:
    'Master Git & GitHub with an interactive, animated guide. Learn professional workflows from scratch.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'font-body antialiased relative',
          'bg-background text-foreground'
        )}
      >
        <GradientBlobs />
        <ScrollProgressBar />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
