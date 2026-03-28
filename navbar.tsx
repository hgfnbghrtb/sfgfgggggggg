'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Search, Globe, User, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems } = useCart();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navItems = [
    { label: 'Produkty', href: '/#products' },
    { label: 'Technologia', href: '/#technologia' },
    { label: 'O nas', href: '/#o-nas' },
    { label: 'Kontakt', href: '/#kontakt' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-semibold tracking-widest text-zinc-800 uppercase">
            Artafon
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6">
          {isSearchOpen ? (
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Szukaj..."
                className="w-48 pl-3 pr-8 py-1 text-sm border-b border-zinc-300 focus:outline-none focus:border-zinc-900 bg-transparent transition-all"
                autoFocus
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
              />
              <button type="button" onClick={() => setIsSearchOpen(false)} className="absolute right-0 text-zinc-400 hover:text-zinc-900">
                <X size={16} />
              </button>
            </form>
          ) : (
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-zinc-600 hover:text-zinc-900 transition-colors relative group" 
              aria-label="Szukaj"
            >
              <Search size={20} strokeWidth={1.5} />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider bg-zinc-900 text-white px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Szukaj</span>
            </button>
          )}
          <NavIcon icon={<Globe size={20} strokeWidth={1.5} />} label="Język" />
          <button 
            onClick={() => router.push('/403')} // Tymczasowo kieruje na 403 dla demonstracji
            className="text-zinc-600 hover:text-zinc-900 transition-colors relative group" 
            aria-label="Konto"
          >
            <User size={20} strokeWidth={1.5} />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider bg-zinc-900 text-white px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Konto</span>
          </button>
          <Link href="/cart" className="group relative flex items-center justify-center text-zinc-800 hover:text-zinc-500 transition-colors">
            <ShoppingCart size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <motion.span 
                key={totalItems}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-2 -right-2 bg-zinc-900 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
              >
                {totalItems}
              </motion.span>
            )}
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-[10px] bg-zinc-800 text-white px-2 py-1 rounded-sm whitespace-nowrap pointer-events-none">
              Koszyk
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-800 flex items-center gap-4"
        >
          <Link href="/cart" className="relative flex items-center justify-center text-zinc-800">
            <ShoppingCart size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-zinc-900 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 py-4 px-6 flex flex-col gap-4 shadow-lg"
        >
          <form onSubmit={handleSearchSubmit} className="mb-4 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Szukaj produktów..."
              className="w-full pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-zinc-900"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
          </form>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center space-x-6 text-zinc-500">
            <button className="flex items-center space-x-2 hover:text-zinc-900">
              <Globe size={20} strokeWidth={1.5} />
              <span className="text-sm uppercase tracking-wider">PL</span>
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                router.push('/403');
              }} 
              className="flex items-center space-x-2 hover:text-zinc-900"
            >
              <User size={20} strokeWidth={1.5} />
              <span className="text-sm uppercase tracking-wider">Konto</span>
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function NavIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="group relative flex items-center justify-center text-zinc-800 hover:text-zinc-500 transition-colors">
      {icon}
      <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-[10px] bg-zinc-800 text-white px-2 py-1 rounded-sm whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </button>
  );
}
