"use client";

import { motion } from "framer-motion";
import { Compass, Star, ChevronRight, Search } from "lucide-react";

const destinations = [
  {
    title: "Zona Arqueológica El Tajín",
    subtitle: "Patrimonio Mundial UNESCO",
    imageUrl: "/destinos/tajin.jpg",
    rating: 4.9,
    tag: "Historia",
  },
  {
    title: "Centro Histórico",
    subtitle: "Pueblo Mágico de Papantla",
    imageUrl: "/destinos/centro.jpg",
    rating: 4.8,
    tag: "Cultura",
  },
  {
    title: "Mural de la Cultura Totonaca",
    subtitle: "Obra de Teodoro Cano",
    imageUrl: "/destinos/mural.jpg",
    rating: 4.7,
    tag: "Arte",
  },
  {
    title: "Monumento al Volador",
    subtitle: "Vista Panorámica",
    imageUrl: "/destinos/volador.jpg",
    rating: 4.9,
    tag: "Mirador",
  },
  {
    title: "Zona Arqueológica Coyuxquihui",
    subtitle: "Legado Totonaca",
    imageUrl: "/destinos/coyuxquihui.jpg",
    rating: 4.6,
    tag: "Aventura",
  },
  {
    title: "La Bocana",
    subtitle: "Unión de Río y Mar",
    imageUrl: "/destinos/bocana.jpg",
    rating: 4.7,
    tag: "Naturaleza",
  },
  {
    title: "Rancho Playa",
    subtitle: "Costa Esmeralda",
    imageUrl: "/destinos/rancho-playa.jpg",
    rating: 4.8,
    tag: "Playa",
  },
];

export default function DestinosPage() {
  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      <header className="px-8 pt-32 pb-12 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Explorar</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground italic leading-none">
                Destinos
            </h1>
        </div>

        <div className="relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Encuentra tu próximo destino..."
            className="w-full bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/5 rounded-[30px] py-6 pl-16 pr-8 text-sm font-bold focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm"
          />
        </div>
      </header>

      <div className="px-8 flex flex-col gap-10">
        {destinations.map((dest, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex flex-col bg-white dark:bg-zinc-900 rounded-[50px] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl transition-all duration-500"
          >
             {/* Image container */}
             <div className="h-72 md:h-96 relative overflow-hidden">
                <img 
                   src={dest.imageUrl} 
                   alt={dest.title} 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                
                {/* Overlay Info */}
                <div className="absolute bottom-10 left-10 right-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary px-4 py-2 rounded-2xl text-white text-[9px] font-black uppercase tracking-widest shadow-xl">
                            {dest.tag}
                        </div>
                        <div className="bg-white/20 backdrop-blur-xl px-4 py-2 rounded-2xl flex items-center gap-2 text-white border border-white/20">
                            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                            <span className="text-[11px] font-black">{dest.rating}</span>
                        </div>
                    </div>
                    <h3 className="text-4xl font-black text-white tracking-tighter leading-none mb-2">
                       {dest.title}
                    </h3>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest">{dest.subtitle}</p>
                </div>

                <div className="absolute top-10 right-10">
                   <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-3xl border border-white/20 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all rotate-[-45deg] group-hover:rotate-0">
                      <ChevronRight className="w-6 h-6" />
                   </div>
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
