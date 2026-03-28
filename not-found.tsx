import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import EmptyState from '@/components/empty-state';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans selection:bg-zinc-200 pt-24">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center">
        <EmptyState
          icon={<FileQuestion size={32} strokeWidth={1.5} />}
          title="Nie znaleziono strony"
          description="Adres, którego szukasz, nie istnieje lub został przeniesiony. Sprawdź poprawność linku lub wróć do sklepu."
          primaryAction={{
            label: "Wróć na stronę główną",
            href: "/"
          }}
          secondaryAction={{
            label: "Szukaj produktów",
            href: "/search"
          }}
        />
      </div>
      
      <Footer />
    </main>
  );
}
