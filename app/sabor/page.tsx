"use client";

import { motion } from "framer-motion";
import iOSCard from "@/components/iOSCard";
import SegmentedControl from "@/components/SegmentedControl";
import { Utensils, Star, MapPin } from "lucide-react";

const traditionalDishes = [
  {
    title: "Zacahuil",
    subtitle: "El Rey de los Tamales",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
  },
  {
    title: "Mole Papanteco",
    subtitle: "Sabor de Fiesta",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
  },
  {
    title: "Bocoles",
    subtitle: "Delicia Totonaca",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80",
  },
];

export default function SaborPage() {
  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      <header className="px-6 pt-20 pb-10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
            <Utensils className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-foreground">Sabor Papanteco</h1>
        </div>
        <p className="text-gray-400 font-medium tracking-tight">
          Descubre los secretos culinarios de la ciudad que perfuma al mundo.
        </p>

        <SegmentedControl options={["Sabores Tradicionales", "Restaurantes"]} />
      </header>

      <section className="px-6 flex flex-col gap-6">
        <h2 className="text-lg font-bold tracking-tight">Vitrina Gastronómica</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
          {traditionalDishes.map((dish, i) => (
            <div key={i} className="min-w-[240px]">
              <iOSCard {...dish} />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 mt-10 flex flex-col gap-6">
        <h2 className="text-lg font-bold tracking-tight">Recomendados</h2>
        <div className="flex flex-col gap-4">
          {[
            { name: "Restaurante Nakú", type: "Comida Típica", stars: 4.9, dist: '0.2 km' },
            { name: "El Mural", type: "Casa de Vainilla", stars: 4.7, dist: '0.5 km' },
            { name: "Café de la Parroquia", type: "Café & Pan", stars: 4.8, dist: '0.8 km' },
          ].map((rest, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.98 }}
              className="bg-white/80 dark:bg-white/5 p-4 rounded-3xl border border-black/5 flex items-center gap-4 shadow-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/10 flex-shrink-0" />
              <div className="flex-1 flex flex-col">
                <h3 className="font-bold text-sm tracking-tight">{rest.name}</h3>
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{rest.type}</span>
                <div className="flex items-center gap-3 mt-1">
                   <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-bold text-gray-900 dark:text-white">{rest.stars}</span>
                   </div>
                   <div className="flex items-center gap-1 text-gray-400">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs font-medium">{rest.dist}</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
