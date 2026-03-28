import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/context/ToastContext';
import { CartProvider } from '@/context/CartContext';
import OfflineIndicator from '@/components/offline-indicator';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Artafon | Inżynieria Ochrony Motocyklowej',
  description: 'Profesjonalne systemy osłon motocyklowych. Projektowane i produkowane z myślą o najwyższej wytrzymałości i precyzji.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pl" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-zinc-900 bg-white" suppressHydrationWarning>
        <ToastProvider>
          <CartProvider>
            <OfflineIndicator />
            {children}
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
