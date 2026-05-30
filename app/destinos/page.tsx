"use client";

import { motion } from "framer-motion";
import { MapPin, Search, ChevronRight, Star } from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    title: "Zona Arqueológica El Tajín",
    subtitle: "Patrimonio de la Humanidad",
    imageUrl: "https://images.unsplash.com/photo-1627997092120-d66a6ef413d7?auto=format&fit=crop&q=80",
    rating: 4.9,
  },
  {
    title: "Centro Histórico",
    subtitle: "Corazón del Pueblo Mágico",
    imageUrl: "https://images.unsplash.com/photo-1548174786-8a30d9515bd1?auto=format&fit=crop&q=80",
    rating: 4.8,
  },
  {
    title: "Mural de la Cultura Totonaca",
    subtitle: "Arte Monumental",
    imageUrl: "https://images.unsplash.com/photo-1626081498877-c93d8e57eeff?auto=format&fit=crop&q=80",
    rating: 4.7,
  },
  {
    title: "Monumento al Volador",
    subtitle: "Mirador Panorámico",
    imageUrl: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80",
    rating: 4.9,
  },
   {
    title: "Zona Arqueológica Coyuxquihui",
    subtitle: "Historia Oculta",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80",
    rating: 4.6,
  },
  {
    title: "Rancho Playa",
    subtitle: "Costa Esmeralda",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
    rating: 4.8,
  },
  {
    title: "Playa la Bocana",
    subtitle: "Naturaleza Virgen",
    imageUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80",
    rating: 4.7,
  },
];

export default function DestinosPage() {
  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      <header className="px-6 pt-32 pb-8 flex flex-col gap-6">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <h1 className="text-3x font-black tracking-tighter text-foreground italic">Destinos <span className="not-italic text-primary">Favoritos</span></h1>
           </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar destino..."
            className="w-full bg-gray-100 dark:bg-white/5 border-transparent rounded-3xl py-4 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
          />
        </div>
      </header>

      <div className="px-6 flex flex-col gap-6">
        {destinations.map((dest, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-white/5 rounded-[40px] overflow-hidden border border-black/5 shadow-xl flex flex-col md:flex-row group"
          >
             {/* Thumbnail */}
             <div className="h-48 md:w-1/3 md:h-auto relative overflow-hidden">
                <img 
                   src={dest.imageUrl} 
                   alt={dest.title} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                   <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                   <span className="text-[10px] font-black">{dest.rating}</span>
                </div>
             </div>
             
             {/* Info */}
             <div className="p-8 flex flex-col justify-center flex-1">
                <span className="text-primary font-bold uppercase text-[8px] tracking-[0.3em] mb-2">{dest.subtitle}</span>
                <h3 className="text-2xl font-black text-foreground tracking-tighter leading-none mb-4 group-hover:text-primary transition-colors">
                   {dest.title}
                </h3>
                <div className="flex items-center justify-between mt-auto">
                   <div className="flex gap-2">
                       <div className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-[8px] font-bold uppercase tracking-widest text-gray-400">Cultural</div>
                       <div className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-[8px] font-bold uppercase tracking-widest text-gray-400">Pueblo Mágico</div>
                   </div>
                   <ChevronRight className="text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2" />
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
