"use client";

import { motion } from "framer-motion";
import { MapPin, Info, ArrowRight } from "lucide-react";
import Image from "next/image";

const destinos = [
  {
    title: "Zona Arqueológica del Tajín",
    location: "Papantla, Veracruz",
    desc: "La ciudad precolombina más importante del estado, famosa por su Pirámide de los Nichos y el Juego de Pelota. Es Patrimonio de la Humanidad por la UNESCO.",
    image: "/destinos/tajin.jpg",
    tags: ["Cultura", "Hitoria", "UNESCO"],
  },
  {
    title: "Centro Histórico",
    location: "Corazón de Papantla",
    desc: "Calles empedradas, edificios coloniales y el inconfundible aroma a vainilla. El parque central es el epicentro de la vida social papanteca.",
    image: "/destinos/centro.jpg",
    tags: ["Pueblo Mágico", "Arquitectura", "Sabor"],
  },
  {
    title: "Mural de la Cultura Totonaca",
    location: "Palacio Municipal",
    desc: "Obra monumental que narra la historia y cosmogonía del pueblo totonaca, desde sus orígenes hasta la actualidad.",
    image: "/destinos/mural.jpg",
    tags: ["Arte", "Historia", "Identidad"],
  },
  {
    title: "Monumento al Volador",
    location: "Cerro del Campanario",
    desc: "Homenaje al Ritual de los Voladores, una de las tradiciones vivas más impresionantes del mundo. Ofrece una vista panorámica de la ciudad.",
    image: "/destinos/volador.jpg",
    tags: ["Ritual", "Vistas", "Patrimonio"],
  },
  {
    title: "Zona Arqueológica Coyuxquihui",
    location: "A 30 min de Papantla",
    desc: "Antigua fortaleza totonaca que ofrece una experiencia más íntima y rodeada de naturaleza. Destaca por su ubicación estratégica en la montaña.",
    image: "/destinos/coyuxquihui.jpg",
    tags: ["Aventura", "Naturaleza", "Historia"],
  },
];

export default function Destinos() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        <header className="flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-[0.4em]"
          >
             <div className="h-[2px] w-8 bg-primary/20" />
             Explora
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter"
          >
            Destinos <span className="text-primary italic">Mágicos</span>
          </motion.h1>
          <p className="text-gray-500 max-w-xl text-lg font-medium">
            Descubre los tesoros que esconde la tierra del Totonacapan, desde pirámides milenarias hasta rincones llenos de arte.
          </p>
        </header>

        <div className="flex flex-col gap-10">
          {destinos.map((dest, i) => (
            <motion.div
              key={dest.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="group relative flex flex-col lg:flex-row bg-white dark:bg-white/5 rounded-[40px] md:rounded-[60px] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl hover:shadow-primary/5 transition-all duration-700"
            >
              <div className="relative w-full lg:w-2/5 h-[300px] lg:h-auto overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
              </div>

              <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center gap-6">
                <div className="flex items-center gap-2 text-primary font-black uppercase text-[8px] tracking-widest bg-primary/5 px-4 py-2 rounded-full self-start">
                   <MapPin className="w-3 h-3" /> {dest.location}
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tight leading-none group-hover:text-primary transition-colors">
                  {dest.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
                  {dest.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {dest.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-black/40 dark:text-white/40 border border-black/5 dark:border-white/10 px-4 py-2 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-6">
                  <button className="flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all shadow-xl group-hover:-translate-y-1">
                    Ver Detalles <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="p-4 rounded-full border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                    <Info className="w-5 h-5 text-gray-400" />
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
