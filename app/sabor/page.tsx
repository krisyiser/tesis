"use client";

import { motion } from "framer-motion";
import IOSCard from "@/components/IOSCard";
import { Utensils, Star, MapPin, ChevronRight, Pizza, ChefHat } from "lucide-react";

const traditionalMenu = [
  { title: "Zacahuil", sub: "Rey de los tamales", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80" },
  { title: "Mole Papanteco", sub: "Sabor ancestral", img: "https://images.unsplash.com/photo-1547928576-a4a332171b91?auto=format&fit=crop&q=80" },
  { title: "Bocoles", sub: "Maíz y Tradición", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80" },
  { title: "Beso Papanteco", sub: "Dulce herencia", img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80" },
  { title: "Atole Morado", sub: "Bebida sagrada", img: "https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80" },
];

export default function SaborPage() {
  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      <header className="px-6 pt-32 pb-10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
            <Utensils className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-foreground">Sabor</h1>
        </div>
        <p className="text-gray-400 font-medium tracking-tight">
          Gastronomía Totonaca: El perfume de la vainilla en cada bocado.
        </p>
      </header>

      {/* DEMO SECTION */}
      <section className="px-6 flex flex-col gap-6">
        <h2 className="text-lg font-bold tracking-tight">Tradición de Papantla</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar snap-x">
          {traditionalMenu.map((dish, i) => (
            <div key={i} className="min-w-[220px] snap-start">
              <IOSCard title={dish.title} subtitle={dish.sub} imageUrl={dish.img} />
            </div>
          ))}
        </div>
      </section>

      {/* ACTION BUTTONS */}
      <section className="px-6 mt-10 grid grid-cols-1 gap-4">
          <motion.button 
             whileTap={{ scale: 0.98 }}
             className="bg-primary p-6 rounded-4xl flex items-center gap-5 shadow-2xl shadow-primary/20"
          >
             <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                <ChefHat className="w-6 h-6" />
             </div>
             <div className="flex flex-col items-start">
                <span className="text-white font-black text-lg tracking-tight">Sabores Papantecos</span>
                <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Comida Típica Regional</span>
             </div>
             <ChevronRight className="ml-auto text-white" />
          </motion.button>

          <motion.button 
             whileTap={{ scale: 0.98 }}
             className="bg-white dark:bg-white/5 p-6 rounded-4xl border border-black/5 flex items-center gap-5 shadow-sm"
          >
             <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center text-primary">
                <Pizza className="w-6 h-6" />
             </div>
             <div className="flex flex-col items-start">
                <span className="font-black text-lg tracking-tight">Alimentos y bebidas</span>
                <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Negocios y Restaurantes</span>
             </div>
             <ChevronRight className="ml-auto text-gray-300" />
          </motion.button>
      </section>
    </div>
  );
}
