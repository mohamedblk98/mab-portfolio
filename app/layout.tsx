import type {Metadata} from 'next';
import { Inter, Space_Grotesk, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DesignSystemProvider } from '@/components/DesignSystemContext';
import { LanguageProvider } from '@/components/LanguageContext';
import { DesignStudio } from '@/components/DesignStudio';
import { PageTransition } from '@/components/PageTransition';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Graphic Designer Portfolio',
  description: 'Premium modern portfolio of a professional graphic designer.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col relative overflow-x-hidden transition-colors duration-500 bg-navy">
        <DesignSystemProvider>
          <LanguageProvider>
            {/* Dynamic background glow effects for award-winning high fidelity atmosphere */}
            <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-modern-blue/5 cosmic-glow-1 pointer-events-none -z-10" />
            <div className="absolute bottom-[20%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-soft-purple/5 cosmic-glow-2 pointer-events-none -z-10" />
            
            <div className="noise-bg"></div>
            <Navbar />
            <main className="flex-grow pt-24 pb-16 px-4 md:px-8 max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1800px] 3xl:max-w-[2200px] mx-auto w-full z-10 relative">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <DesignStudio />
          </LanguageProvider>
        </DesignSystemProvider>
      </body>
    </html>
  );
}
