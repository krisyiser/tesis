"use client";

import { motion } from "framer-motion";
import { MapPin, Search, ChevronRight, Star, Compass } from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    title: "Zona Arqueológica El Tajín",
    subtitle: "Ciudad Trueno - Patrimonio UNESCO",
    imageUrl: "/destinos/tajin.jpg",
    rating: 4.9,
    category: "Arqueología",
  },
  {
    title: "Centro Histórico de Papantla",
    subtitle: "Corazón del Pueblo Mágico",
    imageUrl: "/destinos/centro.jpg",
    rating: 4.8,
    category: "Cultura",
  },
  {
    title: "Mural de la Cultura Totonaca",
    subtitle: "Historia Tallada en Piedra",
    imageUrl: "/destinos/mural.jpg",
    rating: 4.7,
    category: "Arte",
  },
  {
    title: "Monumento al Volador",
    subtitle: "Mirador del Ritual Ancestral",
    imageUrl: "/destinos/volador.jpg",
    rating: 4.9,
    category: "Mirador",
  },
  {
    title: "Zona Arqueológica Coyuxquihui",
    subtitle: "Ruinas en la Selva Totonaca",
    imageUrl: "/destinos/coyuxquihui.jpg",
    rating: 4.6,
    category: "Arqueología",
  },
  {
    title: "Rancho Playa",
    subtitle: "Paraíso de la Costa Esmeralda",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
    rating: 4.8,
    category: "Playa",
  },
  {
    title: "Playa la Bocana",
    subtitle: "Naturaleza Virgen y Serenidad",
    imageUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80",
    rating: 4.7,
    category: "Playa",
  },
];

export default function DestinosPage() {
  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      <header className="px-6 pt-32 pb-12 flex flex-col gap-6">
        <div className="flex items-center justify-between">
           <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                 <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Compass className="w-5 h-5" />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Explorar</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground italic">
                Destinos <span className="not-italic text-primary">Inolvidables</span>
              </h1>
           </div>
        </div>

        <div className="relative mt-4">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nombre o categoría..."
            className="w-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-[30px] py-5 pl-14 pr-6 text-sm font-bold focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm"
          />
        </div>
      </header>

      <div className="px-6 flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-1">
        {destinations.map((dest, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col lg:flex-row bg-white dark:bg-black/40 rounded-[50px] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl transition-all duration-500"
          >
             {/* Thumbnail */}
             <div className="h-64 lg:w-[450px] lg:h-auto relative overflow-hidden">
                <img 
                   src={dest.imageUrl} 
                   alt={dest.title} 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 left-6 flex items-center gap-2">
                    <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
                       <Star className="w-3 h-3 fill-primary text-primary" />
                       <span className="text-[11px] font-black">{dest.rating}</span>
                    </div>
                    <div className="bg-primary/90 backdrop-blur-md px-4 py-2 rounded-2xl text-white text-[9px] font-black uppercase tracking-widest shadow-lg">
                       {dest.category}
                    </div>
                </div>
             </div>
             
             {/* Info */}
             <div className="p-10 flex flex-col justify-center flex-1">
                <span className="text-primary font-black uppercase text-[9px] tracking-[0.4em] mb-4 block">{dest.subtitle}</span>
                <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tighter leading-none mb-6">
                   {dest.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed mb-10 max-w-xl">
                   Sumérgete en la esencia de Papantla. Este destino ofrece una experiencia única de {dest.category.toLowerCase()} que te conectará con las raíces Totonacas.
                </p>
                <div className="flex items-center justify-between mt-auto">
                   <button className="flex items-center gap-4 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-3xl font-black text-[10px] uppercase tracking-widest hover:bg-primary dark:hover:bg-primary hover:text-white transition-all shadow-xl">
                      Descubrir Más <ChevronRight className="w-4 h-4" />
                   </button>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
