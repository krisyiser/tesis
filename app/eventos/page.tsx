"use client";

import { motion } from "framer-motion";
import IOSCard from "@/components/IOSCard";
import { Calendar, Bell, ChevronRight, MapPin, Sparkles } from "lucide-react";

const allEvents = [
  { title: "Cumbre Tajín", date: "Marzo", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80", featured: true },
  { title: "Feria de Corpus Christi", date: "Junio", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80", featured: true },
  { title: "Festival del Tamal", date: "Febrero", img: "" },
  { title: "Ninin", date: "Noviembre", img: "" },
  { title: "Viernes de Danzón", date: "Cada Viernes", img: "" },
];

export default function EventosPage() {
  const featured = allEvents.filter(e => e.featured);

  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      <header className="px-6 pt-20 pb-8 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50/20 flex items-center justify-center text-blue-600">
              <Calendar className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-black tracking-tighter text-foreground">Eventos</h1>
          </div>
          <motion.button 
             whileTap={{ scale: 0.9 }}
             className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-black/5 flex items-center justify-center"
          >
             <Bell className="w-4 h-4 text-gray-400" />
          </motion.button>
        </div>
        <p className="text-gray-400 font-medium tracking-tight">Vibrante cultura en el corazón del Totonacapan.</p>
      </header>

      {/* FEATURED CAROUSEL */}
      <section className="px-6 flex flex-col gap-6">
        <div className="flex items-center gap-2">
           <Sparkles className="w-4 h-4 text-secondary" />
           <h2 className="text-lg font-bold tracking-tight">Imperdibles</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar snap-x">
          {featured.map((event, i) => (
            <div key={i} className="min-w-[300px] snap-start">
              <IOSCard title={event.title} subtitle={event.date} imageUrl={event.img} />
            </div>
          ))}
        </div>
      </section>

      {/* CALENDAR LIST */}
      <section className="px-6 mt-10 flex flex-col gap-6">
        <h2 className="text-lg font-bold tracking-tight">Calendario de Eventos</h2>
        <div className="flex flex-col gap-3">
          {allEvents.map((event, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.98 }}
              className="bg-white/60 dark:bg-white/5 p-5 rounded-3xl border border-black/5 flex items-center justify-between shadow-sm"
            >
              <div className="flex gap-4 items-center">
                 <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/10 flex flex-col items-center justify-center">
                    <span className="text-[10px] font-black text-primary uppercase">{event.date.substring(0,3)}</span>
                    <span className="text-xs font-bold">{i + 1}</span>
                 </div>
                 <div className="flex flex-col">
                    <h3 className="font-bold text-sm tracking-tight">{event.title}</h3>
                    <div className="flex items-center gap-1 text-gray-400">
                       <MapPin className="w-3 h-3" />
                       <span className="text-[10px] font-medium">Papantla, Ver.</span>
                    </div>
                 </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
