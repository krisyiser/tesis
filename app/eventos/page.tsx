"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Filter, MapPin, ChevronRight, Music, Users, Camera, Globe, Sparkles } from "lucide-react";
import IOSCard from "@/components/IOSCard";

const categories = [
  { id: 'all', name: 'Todos', icon: Globe },
  { id: 'tradicion', name: 'Tradición', icon: Sparkles },
  { id: 'musica', name: 'Música', icon: Music },
  { id: 'cultura', name: 'Cultura', icon: Users },
  { id: 'foto', name: 'Fotografía', icon: Camera },
];

const events = [
  { title: "Cumbre Tajín", category: "tradicion", date: "20", month: "MAR", desc: "El festival cultural más importante del estado.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80" },
  { title: "Feria de Corpus Christi", category: "tradicion", date: "15", month: "JUN", desc: "Homenaje a la fe y la cultura totonaca.", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80" },
  { title: "Ninin (Día de Muertos)", category: "cultura", date: "01", month: "NOV", desc: "Regreso de las almas al Totonacapan.", img: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&q=80" },
  { title: "Viernes de Danzón", category: "musica", date: "Vie", month: "SEM", desc: "Baile tradicional en el zócalo.", img: "https://images.unsplash.com/photo-1514525253361-bee873830dbb?auto=format&fit=crop&q=80" },
];

export default function EventosPage() {
  const [activeCat, setActiveCat] = useState('all');

  const filteredEvents = activeCat === 'all' 
    ? events 
    : events.filter(e => e.category === activeCat);

  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      <header className="px-6 pt-32 pb-10 flex flex-col gap-6 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/20">
            <CalendarIcon className="w-7 h-7" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-foreground italic">Cartelera <span className="text-primary not-italic">Cultural</span></h1>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-6 px-6">
           {categories.map((cat) => (
             <button
               key={cat.id}
               onClick={() => setActiveCat(cat.id)}
               className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                 activeCat === cat.id 
                 ? "bg-primary text-white shadow-lg shadow-primary/20" 
                 : "bg-gray-100 text-gray-500 dark:bg-white/5"
               }`}
             >
               <cat.icon className="w-4 h-4" />
               {cat.name}
             </button>
           ))}
        </div>
      </header>

      <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* CALENDAR SECTION */}
        <section className="flex flex-col gap-6">
           <h2 className="text-xl font-black tracking-tight uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Calendario 2026
           </h2>
           <div className="bg-white dark:bg-white/5 border border-black/5 rounded-[40px] p-8 shadow-sm">
              <div className="grid grid-cols-7 gap-2 mb-4">
                 {['D','L','M','M','J','V','S'].map(d => (
                    <span key={d} className="text-center text-[10px] font-black text-gray-300 uppercase">{d}</span>
                 ))}
                 {Array.from({length: 31}).map((_, i) => (
                    <div 
                      key={i} 
                      className={`aspect-square flex items-center justify-center text-sm font-bold rounded-xl transition-colors ${
                        [15, 20].includes(i+1) ? "bg-primary text-white" : "hover:bg-gray-50 dark:hover:bg-white/10"
                      }`}
                    >
                       {i + 1}
                    </div>
                 ))}
              </div>
              <div className="mt-6 flex flex-col gap-4">
                 <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-xs font-bold text-gray-500 uppercase">Eventos Próximos</span>
                 </div>
              </div>
           </div>
        </section>

        {/* EVENTS LIST */}
        <section className="flex flex-col gap-6">
          <h2 className="text-xl font-black tracking-tight uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Destacados
          </h2>
          <AnimatePresence mode="popLayout">
            <div className="flex flex-col gap-4">
              {filteredEvents.map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/60 dark:bg-white/5 p-4 rounded-[32px] border border-black/5 flex gap-5 hover:border-primary/20 transition-all group"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 relative">
                     <img src={event.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={event.title} />
                     <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                  </div>
                  <div className="flex flex-col justify-center gap-1">
                     <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-primary uppercase">{event.month} {event.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="text-[10px] font-black text-gray-400 capitalize">{event.category}</span>
                     </div>
                     <h3 className="font-bold text-lg leading-tight">{event.title}</h3>
                     <p className="text-xs text-gray-500 line-clamp-1">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}
