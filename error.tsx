'use client';

import { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import EmptyState from '@/components/empty-state';
import { ServerCrash } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans selection:bg-zinc-200 pt-24">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center">
        <EmptyState
          icon={<ServerCrash size={32} strokeWidth={1.5} />}
          title="Chwilowy problem techniczny"
          description="Pracujemy nad przywróceniem pełnej funkcjonalności. Przepraszamy za niedogodności."
          primaryAction={{
            label: "Spróbuj ponownie",
            onClick: () => reset()
          }}
          secondaryAction={{
            label: "Wróć na stronę główną",
            href: "/"
          }}
        />
      </div>
      
      <Footer />
    </main>
  );
}
