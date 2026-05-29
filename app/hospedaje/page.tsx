"use client";

import { motion } from "framer-motion";
import IOSCard from "@/components/IOSCard";
import { Bed, Star, MapPin, Coffee, Wifi, Car } from "lucide-react";

export default function HospedajePage() {
  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      <header className="px-6 pt-20 pb-10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Bed className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-foreground">Hospedaje</h1>
        </div>
        <p className="text-gray-400 font-medium tracking-tight">
          Encuentra el lugar perfecto para descansar en el corazón del Totonacapan.
        </p>
      </header>

      <section className="px-6 flex flex-col gap-6">
        <h2 className="text-lg font-bold tracking-tight">Hotel Destacado</h2>
        <motion.div 
           whileTap={{ scale: 0.98 }}
           className="relative rounded-4xl bg-white dark:bg-white/5 border border-black/5 overflow-hidden shadow-sm shadow-black/5"
        >
           <div className="aspect-video relative">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80" alt="Hotel Totonacapan" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-widest">Recomendado</div>
           </div>
           <div className="p-6 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                 <h3 className="text-xl font-bold tracking-tight">Hotel Totonacapan</h3>
                 <div className="flex items-center gap-1 bg-yellow-400/10 text-yellow-600 px-2 py-1 rounded-lg">
                    <Star className="w-3 h-3 fill-yellow-600" />
                    <span className="text-xs font-bold">4.8</span>
                 </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                 <MapPin className="w-4 h-4" />
                 <span>Centro Histórico, Papantla</span>
              </div>
              <div className="flex gap-4 mt-2">
                 <div className="flex flex-col items-center gap-1">
                    <Wifi className="w-4 h-4 text-gray-400" />
                    <span className="text-[10px] text-gray-400">Wifi</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <Coffee className="w-4 h-4 text-gray-400" />
                    <span className="text-[10px] text-gray-400">Desayuno</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <Car className="w-4 h-4 text-gray-400" />
                    <span className="text-[10px] text-gray-400">Parking</span>
                 </div>
              </div>
           </div>
        </motion.div>
      </section>

      <section className="px-6 mt-10 flex flex-col gap-6">
        <h2 className="text-lg font-bold tracking-tight">Más Opciones</h2>
        <div className="grid grid-cols-2 gap-4">
           {[
             { title: "Airbnb Centro", sub: "Estatal", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80" },
             { title: "Hostal del Sol", sub: "Económico", img: "https://images.unsplash.com/photo-1555854817-276f53416790?auto=format&fit=crop&q=80" },
             { title: "Boutique Vainilla", sub: "Premium", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80" },
             { title: "Posada Real", sub: "Centro", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80" },
           ].map((item, i) => (
             <motion.div key={i} whileTap={{ scale: 0.97 }}>
                <IOSCard title={item.title} subtitle={item.sub} imageUrl={item.img} />
             </motion.div>
           ))}
        </div>
      </section>
    </div>
  );
}
