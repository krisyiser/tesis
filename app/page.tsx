"use client";

import { motion } from "framer-motion";
import IOSCard from "@/components/IOSCard";
import { ChevronRight, Sparkles, MapPin, Calendar, Utensils, Bed, Briefcase, ArrowDown } from "lucide-react";
import Image from "next/image";

const sections = [
  {
    title: "El Tajín",
    subtitle: "Ciudad Sagrada",
    desc: "Testigo monumental de la cultura Totonaca, famosa por su Pirámide de los Nichos y su energía ancestral.",
    img: "https://images.unsplash.com/photo-1627997092120-d66a6ef413d7?auto=format&fit=crop&q=80",
    color: "bg-primary",
  },
  {
    title: "Corazón Histórico",
    subtitle: "Cultura Viva",
    desc: "Camina por calles que huelen a vainilla, admira la Parroquia de la Asunción y la hospitalidad de su gente.",
    img: "https://images.unsplash.com/photo-1548174786-8a30d9515bd1?auto=format&fit=crop&q=80",
    color: "bg-secondary",
  },
  {
    title: "Vuelos de Fe",
    subtitle: "Ritual Sagrado",
    desc: "Los Voladores de Papantla desafían la gravedad en una danza milenaria dedicada al sol y la fertilidad.",
    img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80",
    color: "bg-primary",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      {/* FULL SCREEN VERTICAL SECTIONS - VISIT PUEBLA STYLE */}
      {sections.map((section, i) => (
        <section key={i} className="relative h-screen w-full overflow-hidden flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image 
                  src={section.img} 
                  alt={section.title} 
                  fill 
                  className="object-cover"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                <motion.div
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   viewport={{ once: true }}
                   className="flex flex-col gap-4 max-w-2xl"
                >
                   <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Descubre Papantla</span>
                   <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                      {section.title}
                   </h2>
                   <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-lg mt-4">
                      {section.desc}
                   </p>
                   <div className="flex gap-4 mt-8">
                      <button className="px-8 py-4 bg-primary text-white rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform flex items-center gap-3">
                         Ver Detalles <ChevronRight className="w-4 h-4" />
                      </button>
                      <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white/20 transition-all">
                         Mapa
                      </button>
                   </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            {i < sections.length - 1 && (
               <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                  <ArrowDown className="text-white w-6 h-6 opacity-30" />
               </div>
            )}
        </section>
      ))}

      {/* HISTORIA Y CULTURA SECTION */}
      <section className="bg-white dark:bg-black py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                   <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                     <Sparkles className="w-8 h-8" />
                   </div>
                   <h3 className="text-4xl font-black tracking-tight text-foreground italic">Historia & <span className="text-primary not-italic">Legado</span></h3>
                </div>
                <p className="text-gray-500 text-xl font-medium leading-relaxed">
                   Papantla no es solo un destino, es un viaje en el tiempo. Desde el aroma de la vainilla que perfuma nuestras plazas hasta el estruendo de los tambores de los Voladores, cada rincón narra la grandeza de la nación Totonaca.
                </p>
                <div className="grid grid-cols-3 gap-6 mt-4">
                   {[
                      { label: "Años de Historia", val: "800+" },
                      { label: "Sitios Sagrados", val: "12" },
                      { label: "Artesanos", val: "500+" }
                   ].map((st, i) => (
                      <div key={st.label} className="flex flex-col">
                         <span className="text-3xl font-black text-primary">{st.val}</span>
                         <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{st.label}</span>
                      </div>
                   ))}
                </div>
             </div>
             <div className="relative rounded-[60px] overflow-hidden aspect-square border-8 border-gray-50 dark:border-white/5 shadow-2xl">
                <Image 
                   src="https://images.unsplash.com/photo-1626081498877-c93d8e57eeff?auto=format&fit=crop&q=80" 
                   alt="Cultura" 
                   fill 
                   className="object-cover"
                />
             </div>
          </div>
      </section>
    </div>
  );
}
