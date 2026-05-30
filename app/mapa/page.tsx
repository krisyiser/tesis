"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Map as MapIcon, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function MapaPage() {
  return (
    <div className="flex flex-col bg-background min-h-screen">
      <header className="px-6 pt-32 pb-6 flex items-center gap-4 border-b border-black/5 bg-white dark:bg-black fixed top-0 left-0 right-0 z-40">
         <Link href="/">
            <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
               <ChevronLeft className="w-6 h-6" />
            </div>
         </Link>
         <h1 className="text-2xl font-black tracking-tighter italic">Mapa <span className="text-primary not-italic">Interactivo</span></h1>
      </header>

      <div className="flex-1 mt-20 relative bg-gray-200 dark:bg-gray-900 overflow-hidden">
         {/* MAP PLACEHOLDER */}
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-gray-400">
               <MapIcon className="w-20 h-20 opacity-20" />
               <p className="font-bold text-sm uppercase tracking-widest">Cargando Mapa de Papantla...</p>
            </div>
         </div>

         {/* FLOATING MARKERS (FOR MOCKUP) */}
         <div className="absolute top-1/4 left-1/3">
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="flex flex-col items-center group cursor-pointer"
            >
               <div className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-2xl shadow-xl whitespace-nowrap mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  El Tajín
               </div>
               <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
                  <MapPin className="w-5 h-5" />
               </div>
            </motion.div>
         </div>

         <div className="absolute top-1/2 right-1/4">
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 2.2 }}
               className="flex flex-col items-center group cursor-pointer"
            >
               <div className="px-4 py-2 bg-secondary text-white text-xs font-bold rounded-2xl shadow-xl whitespace-nowrap mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Centro Histórico
               </div>
               <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
                  <Navigation className="w-5 h-5" />
               </div>
            </motion.div>
         </div>

         {/* CONTROLS */}
         <div className="absolute bottom-10 right-6 flex flex-col gap-3">
            <button className="w-14 h-14 bg-white dark:bg-black rounded-2xl shadow-2xl border border-black/5 flex items-center justify-center text-primary">
               <Navigation className="w-6 h-6" />
            </button>
            <button className="w-14 h-14 bg-primary text-white rounded-2xl shadow-2xl flex items-center justify-center">
               <span className="font-black text-xl">+</span>
            </button>
         </div>
      </div>
    </div>
  );
}
