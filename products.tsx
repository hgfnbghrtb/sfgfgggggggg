'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';

const products = [
  {
    id: 1,
    name: 'Osłona Silnika Pro',
    desc: 'Aluminium lotnicze 4mm. Maksymalna ochrona bloku silnika.',
    image: 'https://picsum.photos/seed/engine-guard/800/600?grayscale',
    price: 599
  },
  {
    id: 2,
    name: 'Osłony Chłodnicy',
    desc: 'Struktura plastra miodu. Optymalny przepływ powietrza, pełna osłona.',
    image: 'https://picsum.photos/seed/radiator-guard/800/600?grayscale',
    price: 449
  },
  {
    id: 3,
    name: 'Klatka Gmole',
    desc: 'Stal wysokogatunkowa. Rozkład siły uderzenia na ramę.',
    image: 'https://picsum.photos/seed/crash-bars/800/600?grayscale',
    price: 899
  }
];

export default function Products() {
  const { addItem } = useCart();
  const { addToast } = useToast();

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault(); // Prevent navigating to product page
    addItem({ id: product.id.toString(), name: product.name, price: product.price, image: product.image });
    addToast('Dodano do koszyka');
  };

  return (
    <section id="products" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 mb-4">Linia Produktów</h2>
          <p className="text-zinc-500 font-light max-w-2xl mx-auto">
            Każdy element zaprojektowany z myślą o konkretnym modelu motocykla. Idealne dopasowanie, bez modyfikacji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] bg-zinc-100 rounded-sm overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover mix-blend-multiply opacity-90 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-zinc-900">{product.name}</h3>
                  <span className="text-sm font-medium text-zinc-900">{product.price} PLN</span>
                </div>
                <p className="text-sm text-zinc-500 font-light mb-6 flex-grow">{product.desc}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider group-hover:text-zinc-900 transition-colors">
                    Szczegóły
                  </span>
                  <button 
                    onClick={(e) => handleAddToCart(e, product)}
                    className="px-4 py-2 bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-900 text-xs font-medium rounded-sm transition-colors duration-150 active:scale-[0.98]"
                  >
                    Dodaj do koszyka
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
