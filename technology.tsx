'use client';

import { motion } from 'motion/react';
import { Shield, PenTool, Layers, Zap } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Shield className="w-6 h-6" strokeWidth={1.5} />,
    title: 'Stop Aluminium 5754',
    desc: 'Wysoka wytrzymałość zmęczeniowa i odporność na korozję. Idealny kompromis między wagą a twardością.'
  },
  {
    icon: <PenTool className="w-6 h-6" strokeWidth={1.5} />,
    title: 'Cięcie Laserowe CNC',
    desc: 'Precyzja do 0.1mm. Gwarantuje idealne spasowanie z fabrycznymi punktami montażowymi motocykla.'
  },
  {
    icon: <Layers className="w-6 h-6" strokeWidth={1.5} />,
    title: 'Spawy TIG',
    desc: 'Ręczne spawanie w osłonie argonu zapewnia najwyższą wytrzymałość spoin i estetyczny wygląd.'
  },
  {
    icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
    title: 'Anodowanie Twarde',
    desc: 'Powłoka ochronna zwiększająca odporność na zarysowania i warunki atmosferyczne.'
  }
];

export default function Technology() {
  return (
    <section id="technologia" className="py-32 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 mb-6">Technologia i Materiały</h2>
            <p className="text-zinc-600 font-light mb-10 leading-relaxed">
              Nie uznajemy kompromisów. Nasze osłony powstają z wyselekcjonowanych stopów metali, obrabianych na najnowocześniejszych maszynach CNC. Każdy projekt jest testowany w ekstremalnych warunkach terenowych, zanim trafi do produkcji.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-800 shadow-sm">
                    {feature.icon}
                  </div>
                  <h4 className="text-base font-medium text-zinc-900">{feature.title}</h4>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square lg:aspect-[4/5] bg-zinc-200 rounded-sm overflow-hidden"
          >
             <Image
                src="https://picsum.photos/seed/cnc-machine/800/1000?grayscale"
                alt="CNC Machining"
                fill
                className="object-cover opacity-70 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              {/* Technical overlay lines to give it a blueprint feel */}
              <div className="absolute inset-0 border-[1px] border-zinc-400/30 m-8 rounded-sm pointer-events-none" />
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-zinc-400/20 pointer-events-none" />
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-400/20 pointer-events-none" />
              
              <div className="absolute bottom-8 left-8 text-xs font-mono text-zinc-600 tracking-widest">
                TOLERANCJA: ±0.1MM <br/>
                MATERIAŁ: AL 5754
              </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
