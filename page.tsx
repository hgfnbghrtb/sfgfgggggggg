'use client';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function SuccessPage() {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans selection:bg-zinc-200 pt-24">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} className="text-zinc-900" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-3xl font-medium text-zinc-900 mb-4">Dziękujemy za zamówienie</h1>
          <p className="text-zinc-500 font-light mb-8">
            Twoje zamówienie zostało przyjęte do realizacji. Potwierdzenie wysłaliśmy na podany adres email.
          </p>
          
          <div className="bg-zinc-50 border border-zinc-100 rounded-sm p-6 mb-10">
            <span className="text-xs text-zinc-500 uppercase tracking-widest block mb-1">Numer zamówienia</span>
            <span className="text-xl font-mono font-medium text-zinc-900">#{orderNumber}</span>
          </div>
          
          <Link href="/" className="inline-block px-8 py-4 bg-zinc-900 text-white text-sm font-medium rounded-sm hover:bg-zinc-800 transition-colors active:scale-[0.98]">
            Wróć na stronę główną
          </Link>
        </motion.div>
      </div>
      
      <Footer />
    </main>
  );
}
