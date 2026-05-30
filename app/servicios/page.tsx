"use client";

import { motion } from "framer-motion";
import { Briefcase, Phone, Map, Bus, Car, Users, ChevronRight, PhoneCall } from "lucide-react";
import { useState } from "react";

export default function ServiciosPage() {
  const [showTransport, setShowTransport] = useState(false);

  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      <header className="px-6 pt-32 pb-10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
            <Briefcase className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-foreground">Servicios</h1>
        </div>
        <p className="text-gray-400 font-medium tracking-tight">Atención y calidad para que solo te preocupes de disfrutar.</p>
      </header>

      <div className="px-6 flex flex-col gap-10">
        {/* GUÍA TURÍSTICA */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
             <h2 className="text-lg font-bold tracking-tight">Guía Turística</h2>
             <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Certificados</span>
          </div>
          <div className="bg-white/80 dark:bg-white/5 p-6 rounded-4xl border border-black/5 flex flex-col gap-6 shadow-sm">
             <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden">
                   <img src="https://i.pravatar.cc/150?u=guides" alt="Guía" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                   <span className="font-bold">Ana Victoria Xochitl</span>
                   <span className="text-xs text-gray-400">Guía General y Cultural</span>
                </div>
             </div>
             <p className="text-sm text-gray-500 font-medium leading-relaxed">
                Expertos certificados por SECTUR con conocimiento profundo de la historia Totonaca y arqueología del Tajín.
             </p>
             <motion.button 
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 bg-secondary text-white rounded-2xl font-bold uppercase text-[10px] tracking-widest"
             >
                Contactar Guía
             </motion.button>
          </div>
        </section>

        {/* TRANSPORTE BUTTONS */}
        <section className="flex flex-col gap-6">
           <h2 className="text-lg font-bold tracking-tight">Transporte</h2>
           <div className="flex flex-col gap-3">
              <motion.button 
                onClick={() => setShowTransport(!showTransport)}
                whileTap={{ scale: 0.98 }}
                className="bg-primary p-6 rounded-4xl flex items-center justify-between shadow-2xl shadow-primary/20 text-white"
              >
                 <div className="flex items-center gap-4">
                    <Car className="w-6 h-6" />
                    <span className="font-black text-lg tracking-tight">Transporte Local</span>
                 </div>
                 <ChevronRight className={`transition-transform duration-300 ${showTransport ? 'rotate-90' : ''}`} />
              </motion.button>

              {showTransport && (
                 <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-3 mt-2"
                 >
                    <div className="flex gap-3">
                       <button className="flex-1 bg-white dark:bg-white/5 p-4 rounded-3xl border border-black/5 flex flex-col items-center gap-2 shadow-sm text-center">
                          <Map className="w-5 h-5 text-gray-400" />
                          <span className="text-[10px] font-bold uppercase tracking-tight">Ubicación Bases</span>
                       </button>
                       <button className="flex-1 bg-white dark:bg-white/5 p-4 rounded-3xl border border-black/5 flex flex-col items-center gap-2 shadow-sm text-center">
                          <PhoneCall className="w-5 h-5 text-green-500" />
                          <span className="text-[10px] font-bold uppercase tracking-tight">Radio Taxi</span>
                       </button>
                    </div>
                    <button className="bg-white dark:bg-white/5 p-5 rounded-3xl border border-black/5 flex items-center gap-4 shadow-sm">
                       <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white">
                          <Bus className="w-5 h-5" />
                       </div>
                       <div className="flex flex-col items-start">
                          <span className="font-bold text-sm tracking-tight text-foreground">ADO Autobuses</span>
                          <span className="text-[10px] text-gray-400 font-bold tracking-widest">Horarios y Salidas</span>
                       </div>
                    </button>
                 </motion.div>
              )}
           </div>
        </section>
      </div>
    </div>
  );
}
