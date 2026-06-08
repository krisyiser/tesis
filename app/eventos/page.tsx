"use client";

import { motion } from "framer-motion";
import { Calendar, Bell, Sparkles, ChevronRight, Clock, MapPin, Search } from "lucide-react";
import { useState } from "react";

const featuredEvents = [
  {
    title: "Cumbre Tajín",
    date: "20 - 23 de Marzo",
    img: "/images/events/cumbre_tajin.png",
    color: "from-amber-600",
  },
  {
    title: "Carnaval de la Alegría",
    date: "4 de Junio",
    img: "/images/events/carnaval_alegria.png",
    color: "from-pink-600",
  },
  {
    title: "Feria de Corpus Christi",
    date: "30 de Mayo - 7 de Junio",
    img: "/images/events/corpus_christi.png",
    color: "from-blue-600",
  },
];

const allEvents = [
  { id: 1, title: "Festival del Tamal y el Atole", date: "Del 1 al 3 de febrero", month: "FEB", dayRange: "1-3" },
  { id: 2, title: "Enamórate en Kachikín", date: "14 de febrero", month: "FEB", dayRange: "14" },
  { id: 3, title: "Papantla en la Cumbre", date: "Del 20 - 23 de marzo", month: "MAR", dayRange: "20-23" },
  { id: 4, title: "Rancho Fest", date: "3 y 4 de Abril", month: "ABR", dayRange: "3-4" },
  { id: 5, title: "Carnaval de la Alegría", date: "4 de junio", month: "JUN", dayRange: "4" },
  { id: 6, title: "Feria de Corpus Christi", date: "Del 30 de mayo al 7 de Junio", month: "MAY/JUN", dayRange: "30-7" },
  { id: 7, title: "Fiestas Patrias", date: "15 de Septiembre", month: "SEP", dayRange: "15" },
  { id: 8, title: "Ninín", date: "2 de Noviembre", month: "NOV", dayRange: "2" },
  { id: 9, title: "Navidad en Papantla", date: "Del 26 al 29 de Diciembre", month: "DIC", dayRange: "26-29" },
];

export default function EventosPage() {
  const [selectedMonth, setSelectedMonth] = useState("JUN");

  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      {/* HEADER */}
      <header className="px-6 pt-24 pb-8 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-lg shadow-primary/5">
              <Calendar className="w-6 h-6" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-foreground">Eventos</h1>
          </motion.div>
          <div className="flex gap-2">
            <button className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-foreground/70">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-foreground/70">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
        <p className="text-muted-foreground font-medium max-w-xs leading-tight">
          Descubre la magia, cultura y tradición de Papantla a través de sus festividades.
        </p>
      </header>

      {/* FEATURED CAROUSEL */}
      <section className="px-6 flex flex-col gap-6">
        <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest">
          <Sparkles className="w-4 h-4" /> Destacados
        </div>
        
        <div className="flex gap-5 overflow-x-auto pb-8 -mx-6 px-6 no-scrollbar snap-x">
          {featuredEvents.map((event, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] h-[420px] relative rounded-[48px] overflow-hidden snap-start shadow-2xl group"
            >
              <img 
                src={event.img} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${event.color}/80 via-transparent to-transparent`} />
              <div className="absolute bottom-10 left-8 right-8">
                <span className="text-[12px] font-bold uppercase text-white/90 tracking-widest mb-2 block">{event.date}</span>
                <h3 className="text-3xl font-black text-white leading-tight tracking-tight drop-shadow-md">{event.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALENDAR SECTION */}
      <section className="px-6 mt-10">
        <h2 className="text-2xl font-black tracking-tight text-foreground mb-8 italic">Agenda <span className="not-italic text-primary">Cultural</span></h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Calendar Visual (Left) */}
          <div className="flex-1 min-w-[300px] bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[40px] shadow-xl h-fit">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-bold text-lg">2026</h4>
              <div className="flex gap-4">
                {["FEB", "MAR", "JUN"].map(m => (
                  <button 
                    key={m}
                    onClick={() => setSelectedMonth(m)}
                    className={`text-xs font-black transition-colors ${selectedMonth === m ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-y-4 text-center">
              {["D", "L", "M", "M", "J", "V", "S"].map(d => (
                <span key={d} className="text-[10px] font-bold text-muted-foreground">{d}</span>
              ))}
              {Array.from({ length: 31 }).map((_, i) => {
                const day = i + 1;
                const isEvent = allEvents.some(e => e.month.includes(selectedMonth) && e.dayRange.split("-").map(Number).includes(day));
                return (
                  <div key={i} className="relative flex items-center justify-center py-1">
                    <span className={`text-sm font-medium ${isEvent ? "text-primary font-bold" : "text-foreground/50"}`}>
                      {day}
                    </span>
                    {isEvent && (
                      <motion.div 
                        layoutId="activeDay"
                        className="absolute w-8 h-8 rounded-full border-2 border-primary/30 -z-10"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* List (Right) */}
          <div className="flex-[1.5] flex flex-col gap-4">
            {allEvents.map((ev) => (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-5 rounded-3xl border border-white/5 flex items-center gap-5 hover:bg-white/10 transition-colors group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex flex-col items-center justify-center shrink-0 border border-primary/10">
                   <span className="text-primary font-black text-xl leading-none">{ev.dayRange.includes("-") ? ev.dayRange.split("-")[0] : ev.dayRange}</span>
                   <span className="text-[10px] font-bold text-primary/70 leading-none mt-1">{ev.month}</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-foreground leading-tight group-hover:text-primary transition-colors">{ev.title}</h5>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-primary/50" /> {ev.date}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

