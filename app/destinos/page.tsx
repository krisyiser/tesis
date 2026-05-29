"use client";

import { motion } from "framer-motion";
import IOSCard from "@/components/IOSCard";
import { MapPin, Search } from "lucide-react";

const destinations = [
  {
    title: "Centro Histórico",
    subtitle: "Corazón del Pueblo",
    imageUrl: "https://images.unsplash.com/photo-1548174786-8a30d9515bd1?auto=format&fit=crop&q=80",
  },
  {
    title: "Mural de la Cultura Totonaca",
    subtitle: "Arte que narra historia",
    imageUrl: "https://images.unsplash.com/photo-1626081498877-c93d8e57eeff?auto=format&fit=crop&q=80",
  },
  {
    title: "Zona Arqueológica El Tajín",
    subtitle: "Patrimonio UNESCO",
    imageUrl: "https://images.unsplash.com/photo-1627997092120-d66a6ef413d7?auto=format&fit=crop&q=80",
  },
  {
    title: "Monumento al Volador",
    subtitle: "Mirador Panorámico",
    imageUrl: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80",
  },
  {
    title: "Zona Arqueológica Coyuxquihui",
    subtitle: "Vestigios Escondidos",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80",
  },
  {
    title: "Rancho Playa",
    subtitle: "Escape Natural",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
  },
  {
    title: "Playa la Bocana",
    subtitle: "Paz y Olas",
    imageUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80",
  },
];

export default function DestinosPage() {
  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      <header className="px-6 pt-20 pb-8 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <MapPin className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-foreground">Destinos</h1>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar destino..."
            className="w-full bg-gray-100 dark:bg-white/5 border-transparent rounded-2xl py-3 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </header>

      <div className="px-6 grid grid-cols-2 gap-4">
        {destinations.map((dest, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <IOSCard {...dest} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
