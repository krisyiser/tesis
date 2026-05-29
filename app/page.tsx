"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import FloatingSearch from "@/components/FloatingSearch";
import iOSCard from "@/components/iOSCard";
import { ChevronRight, Heart, Sparkles, Map, Utensils, Calendar } from "lucide-react";

const mainDestinations = [
  {
    title: "El Tajín",
    subtitle: "Patrimonio Mundial",
    imageUrl: "https://images.unsplash.com/photo-1627997092120-d66a6ef413d7?auto=format&fit=crop&q=80",
  },
  {
    title: "Centro Histórico",
    subtitle: "Pueblo Mágico",
    imageUrl: "https://images.unsplash.com/photo-1548174786-8a30d9515bd1?auto=format&fit=crop&q=80",
  },
  {
    title: "Mural Totonaca",
    subtitle: "Arte Sagrado",
    imageUrl: "https://images.unsplash.com/photo-1626081498877-c93d8e57eeff?auto=format&fit=crop&q=80",
  },
  {
    title: "Voladores de Papantla",
    subtitle: "Ritual Milenario",
    imageUrl: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80",
  },
];

export default function Home() {
  return (
    <div className="pb-32 flex flex-col bg-background">
      <Hero />
      <FloatingSearch />

      <div id="explore-content" className="mt-12 px-6 flex flex-col gap-10 max-w-7xl mx-auto w-full">
        {/* Horizontal Card Carousel */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Lo Mejor de Papantla</h2>
              <p className="text-sm text-gray-400 font-medium tracking-tight">Experiencias que no te puedes perder</p>
            </div>
            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-1 text-primary text-sm font-bold"
            >
              Ver todo <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x no-scrollbar -mx-6 px-6">
            {mainDestinations.map((dest, i) => (
              <div key={i} className="min-w-[280px] snap-start">
                <iOSCard {...dest} />
              </div>
            ))}
          </div>
        </section>

        {/* History & Culture Section */}
        <section className="bg-white/50 dark:bg-white/5 rounded-4xl p-8 border border-white/20 shadow-sm flex flex-col gap-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
               <Sparkles className="w-5 h-5" />
             </div>
             <h3 className="text-xl font-bold tracking-tight">Historia y Cultura</h3>
          </div>
          <p className="text-gray-500 leading-relaxed text-sm font-medium">
            Papantla, conocida como "La Ciudad que Perfuma al Mundo", es el epicentro de la cultura Totonaca. 
            Aquí, el aroma a vainilla se mezcla con la historia milenaria de El Tajín y el misticismo del ritual de los Voladores.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 rounded-3xl bg-secondary/5 flex flex-col gap-2">
                <span className="text-secondary font-black text-2xl">1230</span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Fundación</span>
             </div>
             <div className="p-4 rounded-3xl bg-primary/5 flex flex-col gap-2">
                <span className="text-primary font-black text-2xl">3</span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Patrimonios UNESCO</span>
             </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="grid grid-cols-2 gap-4">
           {[
             { label: 'Destinos', icon: Map, color: 'bg-primary/10 text-primary' },
             { label: 'Gastronomía', icon: Utensils, color: 'bg-secondary/10 text-secondary' },
             { label: 'Cultura', icon: Heart, color: 'bg-red-50 text-red-500' },
             { label: 'Eventos', icon: Calendar, color: 'bg-blue-50 text-blue-500' },
           ].map((cat, i) => (
             <motion.button
               key={i}
               whileTap={{ scale: 0.95 }}
               className={`${cat.color} p-6 rounded-4xl flex flex-col items-center gap-3 shadow-sm border border-black/5`}
             >
               <cat.icon className="w-6 h-6" />
               <span className="text-xs font-bold uppercase tracking-widest">{cat.label}</span>
             </motion.button>
           ))}
        </section>
      </div>
    </div>
  );
}
