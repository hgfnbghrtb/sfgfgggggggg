'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-50">
      {/* Background Image - using a placeholder that looks metallic/technical */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/motorcycle-guard/1920/1080?grayscale&blur=2"
          alt="Artafon Protection"
          fill
          className="object-cover opacity-40"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 mb-6"
        >
          Inżynieria Ochrony.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-zinc-600 font-light mb-10 max-w-2xl mx-auto"
        >
          Bezkompromisowe osłony motocyklowe. Zaprojektowane z precyzją, zbudowane by przetrwać najcięższe warunki.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/#products" className="w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white text-sm font-medium rounded-sm hover:bg-zinc-800 transition-colors inline-block">
            Zamów teraz
          </Link>
          <Link href="/#technologia" className="w-full sm:w-auto px-8 py-3 bg-white/80 backdrop-blur-sm text-zinc-900 text-sm font-medium rounded-sm border border-zinc-200 hover:bg-zinc-50 transition-colors inline-block">
            Poznaj specyfikację
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-500 uppercase tracking-widest">Eksploruj</span>
        <div className="w-[1px] h-12 bg-zinc-300 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }} 
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-zinc-600"
          />
        </div>
      </motion.div>
    </section>
  );
}
