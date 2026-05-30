"use client";

import { motion } from "framer-motion";
import { MapPin, Info, ArrowRight } from "lucide-react";
import Image from "next/image";

const destinos = [
  {
    title: "Zona Arqueológica El Tajín",
    location: "Papantla, Veracruz",
    desc: "Capital del imperio Totonaca y Patrimonio de la Humanidad. Famosa por la impresionante Pirámide de los Nichos y sus magníficos juegos de pelota.",
    image: "/destinos/tajin.jpg",
    tags: ["Patrimonio UNESCO", "Historia", "Cultura"],
  },
  {
    title: "Centro Histórico",
    location: "Corazón de Papantla",
    desc: "Pueblo Mágico con aroma a vainilla. Sus calles empedradas y arquitectura vernácula invitan a descubrir la esencia de la ciudad que perfuma al mundo.",
    image: "/destinos/centro.jpg",
    tags: ["Pueblo Mágico", "Arquitectura", "Vainilla"],
  },
  {
    title: "Mural de la Cultura Totonaca",
    location: "Palacio Municipal",
    desc: "Obra maestra del maestro Teodoro Cano que narra la cosmogonía, tradiciones y el devenir histórico del pueblo totonaca en bajorrelieve.",
    image: "/destinos/mural.jpg",
    tags: ["Arte", "Relieve", "Identidad"],
  },
  {
    title: "Monumento al Volador",
    location: "Mirador Cerreño",
    desc: "Homenaje al Ritual Ancestral de los Hombres Pájaro. Desde este mirador se contempla el valle de Papantla en toda su majestuosidad.",
    image: "/destinos/volador.jpg",
    tags: ["Ritual", "Vistas Panorámicas", "Icono"],
  },
  {
    title: "Zona Arqueológica Coyuxquihui",
    location: "Región Totonaca",
    desc: "Impresionante sitio arqueológico donde la selva abraza la arquitectura prehispánica. Destaca por su ubicación estratégica y sus terrazas talladas.",
    image: "/destinos/coyuxquihui.jpg",
    tags: ["Aventura", "Naturaleza", "Exploración"],
  },
];

export default function Destinos() {
  return (
    <div className="min-h-screen bg-transparent dark:bg-black transition-colors duration-500 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <header className="flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-[0.4em]"
          >
             <div className="h-[2px] w-8 bg-primary/20" />
             Catálogo
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter"
          >
            Destinos <span className="text-primary italic">Recomendados</span>
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg font-medium">
            Sigue la ruta de la vainilla y descubre sitios arqueológicos, arte monumental y tradiciones vivas.
          </p>
        </header>

        <div className="flex flex-col gap-12">
          {destinos.map((dest, i) => (
            <motion.div
              key={dest.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col lg:flex-row bg-white dark:bg-white/5 rounded-[50px] md:rounded-[70px] overflow-hidden border border-black/5 dark:border-white/5 shadow-[0_30px_100px_-30px_rgba(0,0,0,0.1)] dark:shadow-none hover:shadow-primary/10 transition-all duration-700"
            >
              <div className="relative w-full lg:w-2/5 h-[350px] lg:h-auto overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
              </div>

              <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center gap-6">
                <div className="flex items-center gap-3">
                   <div className="flex items-center gap-2 text-primary font-black uppercase text-[9px] tracking-widest bg-primary/10 px-4 py-2 rounded-full">
                      <MapPin className="w-3 h-3" /> {dest.location}
                   </div>
                   <div className="hidden md:flex gap-2">
                       {dest.tags.map(tag => (
                         <span key={tag} className="text-[8px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest px-3 py-1 border border-black/5 dark:border-white/5 rounded-full">
                           {tag}
                         </span>
                       ))}
                   </div>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tight leading-none group-hover:text-primary transition-colors">
                  {dest.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl font-medium">
                  {dest.desc}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-6">
                  <button className="flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all shadow-xl hover:-translate-y-1">
                    Explorar Destino <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-2 text-black/40 dark:text-white/40 font-black text-[9px] uppercase tracking-widest hover:text-primary transition-colors">
                    <Info className="w-4 h-4" /> Más Información
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
