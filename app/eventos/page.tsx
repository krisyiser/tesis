"use client";

import { motion } from "framer-motion";
import { Calendar, Bell, Sparkles, Filter, ChevronRight, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const featuredEvents = [
  {
    title: "Cumbre Tajín",
    date: "Marzo",
    img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80",
    color: "from-primary",
  },
  {
    title: "Feria de Corpus Christi",
    date: "Junio",
    img: "https://images.unsplash.com/photo-1505232458567-cc9660517eaa?auto=format&fit=crop&q=80",
    color: "from-orange-500",
  },
  {
    title: "Festival de la Vainilla",
    date: "Octubre",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80",
    color: "from-yellow-600",
  },
];

const calendarEvents = [
  { day: "15", month: "JUN", title: "Procesión de Corpus Christi", category: "Religioso", time: "10:00 AM", location: "Centro Histórico" },
  { day: "16", month: "JUN", title: "Danza de los Guaguas", category: "Tradicional", time: "12:00 PM", location: "Plaza Central" },
  { day: "18", month: "JUN", title: "Concierto Festival", category: "Música", time: "08:00 PM", location: "Domo de la Parroquia" },
];

export default function EventosPage() {
  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      {/* HEADER SECTION (Image C style) */}
      <header className="px-6 pt-32 pb-8 flex flex-col gap-4">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                <Calendar className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-black tracking-tighter text-foreground italic">Eventos</h1>
           </div>
           <button className="p-3 bg-gray-100 dark:bg-white/5 rounded-full text-gray-400">
             <Bell className="w-5 h-5" />
           </button>
        </div>
        <p className="text-gray-400 font-bold text-sm tracking-tight leading-relaxed max-w-xs">
          Vibrante cultura en el corazón del Totonacapan.
        </p>
      </header>

      {/* FEATURED CAROUSEL (Imperdibles) - Image C style */}
      <section className="px-6 flex flex-col gap-6">
         <div className="flex items-center gap-2 text-foreground font-black text-xs uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4 text-primary" /> Imperdibles
         </div>
         
         <div className="flex gap-4 overflow-x-auto pb-6 -mx-6 px-6 no-scrollbar snap-x">
            {featuredEvents.map((event, i) => (
               <motion.div
                 key={i}
                 whileTap={{ scale: 0.95 }}
                 className="min-w-[280px] h-[400px] relative rounded-[40px] overflow-hidden snap-start shadow-xl"
               >
                  <img 
                    src={event.img} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${event.color}/60 via-transparent to-transparent`} />
                  <div className="absolute bottom-10 left-8">
                     <span className="text-[10px] font-black uppercase text-white/70 tracking-widest leading-none mb-1 block">{event.date}</span>
                     <h3 className="text-2xl font-black text-white leading-tight tracking-tight max-w-[180px]">{event.title}</h3>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* CALENDAR SECTION */}
      <section className="px-6 mt-8">
         <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-black tracking-tight text-foreground italic">Calendario <span className="not-italic text-primary">de Eventos</span></h4>
            <div className="flex gap-2">
               <button className="p-2 bg-gray-100 dark:bg-white/5 rounded-xl"><Filter className="w-4 h-4 text-gray-400" /></button>
            </div>
         </div>

         <div className="grid grid-cols-1 gap-4">
            {calendarEvents.map((ev, i) => (
               <motion.div
                 key={i}
                 className="bg-white dark:bg-white/5 p-6 rounded-[35px] border border-black/5 shadow-md flex items-center gap-6"
               >
                  <div className="flex flex-col items-center">
                     <span className="text-primary font-black text-2xl leading-none">{ev.day}</span>
                     <span className="text-[10px] font-bold text-gray-400 leading-none">{ev.month}</span>
                  </div>
                  <div className="flex-1 flex flex-col">
                     <span className="text-primary font-bold text-[8px] uppercase tracking-widest mb-1">{ev.category}</span>
                     <h5 className="font-black text-foreground tracking-tight leading-none mb-2">{ev.title}</h5>
                     <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-[8px] font-bold text-gray-400 uppercase tracking-widest">
                           <Clock className="w-3 h-3" /> {ev.time}
                        </div>
                        <div className="flex items-center gap-1 text-[8px] font-bold text-gray-400 uppercase tracking-widest">
                           <MapPin className="w-3 h-3" /> {ev.location}
                        </div>
                     </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300" />
               </motion.div>
            ))}
         </div>
      </section>
    </div>
  );
}
