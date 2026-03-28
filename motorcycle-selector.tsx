'use client';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MotorcycleSelector() {
  const router = useRouter();
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSearch = () => {
    const queryParts = [];
    if (brand) queryParts.push(brand);
    if (model) queryParts.push(model);
    if (year) queryParts.push(year);
    
    const query = queryParts.join(' ');
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    } else {
      router.push('/search');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-zinc-200 shadow-sm rounded-sm p-4 flex flex-col sm:flex-row gap-4 relative z-20 -mt-10">
      <Select 
        placeholder="Marka" 
        options={['KTM', 'Husqvarna', 'GasGas', 'Yamaha', 'Honda']} 
        value={brand}
        onChange={setBrand}
      />
      <Select 
        placeholder="Model" 
        options={['EXC 300', 'TE 300', 'EC 300', 'Tenere 700', 'CRF 300L']} 
        value={model}
        onChange={setModel}
      />
      <Select 
        placeholder="Rok" 
        options={['2024', '2023', '2022', '2021', '2020']} 
        value={year}
        onChange={setYear}
      />
      <button 
        onClick={handleSearch}
        className="px-8 py-3 bg-zinc-900 text-white text-sm font-medium rounded-sm hover:bg-zinc-800 transition-colors whitespace-nowrap active:scale-[0.98]"
      >
        Szukaj osłon
      </button>
    </div>
  );
}

function Select({ placeholder, options, value, onChange }: { placeholder: string, options: string[], value: string, onChange: (val: string) => void }) {
  // W prostej wersji używamy natywnego selecta dla lepszej dostępności i działania na mobile
  return (
    <div className="relative flex-1 group cursor-pointer">
      <select 
        className="w-full appearance-none px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-sm hover:border-zinc-300 transition-colors text-sm text-zinc-600 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <ChevronDown size={16} className="text-zinc-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}
