"use client";

import { motion } from "framer-motion";
import iOSCard from "@/components/iOSCard";
import { Calendar, Bell, ChevronRight } from "lucide-react";

const events = [
  {
    title: "Cumbre Tajín",
    subtitle: "Festival de la Identidad",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    date: "Marzo 2026",
    featured: true,
  },
  {
    title: "Feria de Corpus Christi",
    subtitle: "Fiesta Patronal",
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
    date: "Junio 2026",
    featured: true,
  },
  {
    title: "Ninin",
    subtitle: "Día de Muertos",
    date: "Noviembre 1-2",
  },
  {
    title: "Festival del Tamal",
    subtitle: "Gastronomía",
    date: "Enero 2026",
  },
  {
    title: "Viernes de Danzón",
    subtitle: "Cultura",
    date: "Cada Viernes",
  },
];

export default function EventosPage() {
  const featuredEvents = events.filter(e => e.featured);
  const otherEvents = events.filter(e => !e.featured);

  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      <header className="px-6 pt-20 pb-8 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <Calendar className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-black tracking-tighter text-foreground">Eventos</h1>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-black/5 flex items-center justify-center shadow-sm"
          >
            <Bell className="w-4 h-4 text-gray-400" />
          </motion.button>
        </div>
      </header>

      <section className="px-6 flex flex-col gap-6">
        <h2 className="text-lg font-bold tracking-tight">Destacados</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar snap-x">
          {featuredEvents.map((event, i) => (
            <div key={i} className="min-w-[300px] snap-start">
              <iOSCard title={event.title} subtitle={event.subtitle} imageUrl={event.imageUrl!} />
              <div className="mt-3 flex items-center gap-2">
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                  {event.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 mt-10 flex flex-col gap-6">
        <h2 className="text-lg font-bold tracking-tight">Calendario Cultural</h2>
        <div className="flex flex-col gap-3">
          {otherEvents.map((event, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.98 }}
              className="bg-white/60 dark:bg-white/5 p-5 rounded-3xl border border-black/5 flex items-center justify-between shadow-sm"
            >
              <div className="flex flex-col">
                <h3 className="font-bold text-sm tracking-tight">{event.title}</h3>
                <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-1">{event.date}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
