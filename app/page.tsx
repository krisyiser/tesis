"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import FloatingSearch from "@/components/FloatingSearch";
import iOSCard from "@/components/iOSCard";
import { ChevronRight, Sparkles, MapPin, Calendar, Utensils, Bed, Briefcase } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pb-32 flex flex-col bg-background">
      <Hero />
      <FloatingSearch />

      <div id="explore-content" className="mt-20 flex flex-col gap-24 w-full">
        {/* REFINED DESCUBRE SECTION */}
        <section className="px-6 flex flex-col gap-8 max-w-7xl mx-auto w-full text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex flex-col gap-2"
            >
                <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px]">Experiencia Única</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none italic">
                  Lo <br />
                  <span className="text-primary not-italic">Mejor de Papantla</span>
                </h2>
            </motion.div>
        </section>

        {/* SECTION: ZONA ARQUEOLÓGICA EL TAJÍN */}
        <section className="px-6 flex flex-col gap-8 max-w-7xl mx-auto w-full">
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                   <h3 className="text-2xl font-black tracking-tight">Zona Arqueológica El Tajín</h3>
                   <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Patrimonio de la Humanidad</span>
                </div>
            </div>
            <motion.div 
               whileTap={{ scale: 0.98 }}
               className="relative h-[450px] rounded-4xl overflow-hidden shadow-2xl group"
            >
                <Image 
                   src="https://images.unsplash.com/photo-1627997092120-d66a6ef413d7?auto=format&fit=crop&q=80" 
                   alt="El Tajín" 
                   fill 
                   className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-4">
                    <p className="text-white/80 text-sm font-medium max-w-md">
                       La ciudad prehispánica más importante de la costa norte de Veracruz, sagrada para el pueblo Totonaco.
                    </p>
                    <button className="w-fit px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full">Explorar Tajín</button>
                </div>
            </motion.div>
        </section>

        {/* SECTION: CENTRO HISTÓRICO */}
        <section className="px-6 flex flex-col gap-8 max-w-7xl mx-auto w-full">
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                   <h3 className="text-2xl font-black tracking-tight">Centro Histórico</h3>
                   <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Corazón Vibrante</span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileTap={{ scale: 0.97 }} className="h-[300px]">
                    <iOSCard 
                       title="Parroquia de la Asunción" 
                       subtitle="Arquitectura Sacra" 
                       imageUrl="https://images.unsplash.com/photo-1548174786-8a30d9515bd1?auto=format&fit=crop&q=80" 
                    />
                </motion.div>
                <motion.div whileTap={{ scale: 0.97 }} className="h-[300px]">
                    <iOSCard 
                       title="Zócalo y Quiosco" 
                       subtitle="Vida cotidiana" 
                       imageUrl="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80" 
                    />
                </motion.div>
            </div>
        </section>

        {/* SECTION: MURAL DE LA CULTURA TOTONACA */}
        <section className="px-6 flex flex-col gap-8 max-w-7xl mx-auto w-full">
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                   <h3 className="text-2xl font-black tracking-tight">Mural de la Cultura Totonaca</h3>
                   <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Arte Monumental</span>
                </div>
            </div>
            <motion.div 
               whileTap={{ scale: 0.98 }}
               className="relative h-[400px] rounded-4xl overflow-hidden shadow-2xl bg-gray-100"
            >
                <Image 
                   src="https://images.unsplash.com/photo-1626081498877-c93d8e57eeff?auto=format&fit=crop&q=80" 
                   alt="Mural" 
                   fill 
                   className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>
        </section>

        {/* SECTION: MONUMENTO AL VOLADOR */}
        <section className="px-6 flex flex-col gap-8 max-w-7xl mx-auto w-full">
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                   <h3 className="text-2xl font-black tracking-tight">Monumento al Volador</h3>
                   <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Guardián de la Ciudad</span>
                </div>
            </div>
            <motion.div 
               whileTap={{ scale: 0.98 }}
               className="relative h-[350px] rounded-4xl overflow-hidden shadow-xl"
            >
                <Image 
                   src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80" 
                   alt="Monumento Volador" 
                   fill 
                   className="object-cover"
                />
            </motion.div>
        </section>

        {/* HISTORIA Y CULTURA (BOTTOM) */}
        <section className="px-6 pt-16 flex flex-col gap-8 max-w-7xl mx-auto w-full">
            <div className="bg-white/50 dark:bg-white/5 rounded-[40px] p-10 border border-white/20 shadow-sm flex flex-col gap-8">
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shadow-inner">
                   <Sparkles className="w-8 h-8" />
                 </div>
                 <div className="flex flex-col">
                    <h3 className="text-3xl font-black tracking-tight">Historia y Cultura</h3>
                    <span className="text-sm text-gray-400 font-bold">La Ciudad que Perfuma al Mundo</span>
                 </div>
              </div>
              <p className="text-gray-500 leading-relaxed text-lg font-medium">
                Papantla, un rincón mágico de Veracruz, es el corazón de la cultura Totonaca. 
                Famosa por su producción de vainilla, su historia se entrelaza con el ritual 
                sagrado de los Voladores, reconocido como Patrimonio Cultural Inmaterial.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 {[
                    { label: 'Destinos', count: '10+', icon: MapPin },
                    { label: 'Eventos', count: '5+', icon: Calendar },
                    { label: 'Servicios', count: '15+', icon: Briefcase }
                 ].map((stat, i) => (
                    <div key={i} className="bg-black/5 dark:bg-white/5 p-6 rounded-3xl flex items-center gap-4">
                       <stat.icon className="w-5 h-5 text-primary" />
                       <div className="flex flex-col">
                          <span className="text-2xl font-black tracking-tight">{stat.count}</span>
                          <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{stat.label}</span>
                       </div>
                    </div>
                 ))}
              </div>
            </div>
        </section>
      </div>
    </div>
  );
}
