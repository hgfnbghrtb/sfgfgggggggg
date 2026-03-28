'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WifiOff } from 'lucide-react';

export default function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setIsOffline(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOffline && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-[100] bg-zinc-900 text-white px-6 py-4 shadow-xl flex items-center justify-center gap-4"
        >
          <WifiOff size={20} className="text-zinc-400" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="text-sm font-medium">Brak połączenia z internetem</span>
            <span className="text-xs text-zinc-400 hidden sm:inline">•</span>
            <span className="text-xs text-zinc-400">Sprawdź połączenie i spróbuj ponownie</span>
          </div>
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.reload();
              }
            }}
            className="ml-auto sm:ml-4 px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-sm transition-colors"
          >
            Odśwież
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
