"use client";

import { motion } from "framer-motion";
import { Briefcase, Phone, MessageSquare, Map, Bus, Car } from "lucide-react";

export default function ServiciosPage() {
  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      <header className="px-6 pt-20 pb-8 flex flex-col gap-4 text-center">
        <div className="w-16 h-16 rounded-3xl bg-secondary/10 flex items-center justify-center text-secondary mx-auto shadow-inner">
          <Briefcase className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-black tracking-tighter text-foreground">Servicios</h1>
        <p className="text-gray-400 font-medium tracking-tight max-w-[280px] mx-auto">
          Todo lo que necesitas para tu estancia en la ciudad vainilla.
        </p>
      </header>

      <div className="px-6 flex flex-col gap-8">
        {/* Guías Turísticos */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-bold tracking-tight">Guías Certificados</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileTap={{ scale: 0.95 }}
                className="min-w-[140px] bg-white dark:bg-white/5 p-4 rounded-4xl border border-black/5 flex flex-col items-center gap-3 shadow-sm text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
                   <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Guía" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                   <span className="text-xs font-bold">Guía Certificado</span>
                   <span className="text-[10px] text-gray-400 font-medium">Sectur</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Transporte */}
        <section className="flex flex-col gap-4">
           <h2 className="text-lg font-bold tracking-tight">Transporte</h2>
           <div className="grid grid-cols-1 gap-3">
              {[
                { label: 'Radio Taxi Papantla', icon: Phone, sub: 'Llamada directa', color: 'bg-green-500' },
                { label: 'Ubicación de Bases', icon: Map, sub: 'Ver en mapas', color: 'bg-primary' },
                { label: 'ADO Horarios', icon: Bus, sub: 'Boletos en línea', color: 'bg-red-600' },
                { label: 'Renta de Autos', icon: Car, sub: 'Desde $800/día', color: 'bg-gray-800' },
              ].map((item, i) => (
                <motion.button
                  key={i}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/80 dark:bg-white/5 p-5 rounded-3xl border border-black/5 flex items-center gap-5 shadow-sm"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-lg`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-sm tracking-tight">{item.label}</span>
                    <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{item.sub}</span>
                  </div>
                </motion.button>
              ))}
           </div>
        </section>

        {/* Soporte */}
        <div className="mt-4 p-8 rounded-[40px] bg-gradient-to-br from-primary to-primary/80 text-white flex flex-col gap-4 shadow-2xl relative overflow-hidden">
           <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
           <h3 className="text-2xl font-black leading-tight">¿Necesitas Ayuda?</h3>
           <p className="text-sm font-medium text-white/80">Nuestro equipo de soporte turístico está disponible 24/7.</p>
           <motion.button
             whileTap={{ scale: 0.95 }}
             className="bg-white text-primary px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest mt-2 flex items-center justify-center gap-2"
           >
              <MessageSquare className="w-4 h-4" />
              Chat en Vivo
           </motion.button>
        </div>
      </div>
    </div>
  );
}
