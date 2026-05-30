"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sparkles, MapPin, ArrowDown, Landmark, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const exploreItems = [
  {
    title: "Zona Arqueológica del Tajín",
    subtitle: "Ciudad Trueno",
    desc: "Capital del imperio Totonaca, famosa por su Pirámide de los Nichos.",
    img: "/tajin.jpg",
  },
  {
    title: "Centro Histórico",
    subtitle: "Corazón del Pueblo",
    desc: "Arquitectura vernácula y el aroma de la vainilla en cada esquina.",
    img: "/centro.jpg",
  },
  {
    title: "Monumento al Volador",
    subtitle: "Símbolo de Papantla",
    desc: "Homenaje al ritual ancestral que desafía las alturas.",
    img: "/volador.jpg",
  },
  {
    title: "Mural a la Cultura Totonaca",
    subtitle: "Historia en Piedra",
    desc: "La cosmogonía de un pueblo grabada para la eternidad.",
    img: "/mural.jpg",
  },
];

export default function Home() {
  const imgBPath = "/hero-b-background.jpg";

  return (
    <div className="flex flex-col bg-white dark:bg-black transition-colors duration-500">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center text-center">
         <div className="absolute inset-0 z-0">
            <img 
               src={imgBPath} 
               alt="Papantla Hero" 
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
         </div>

         <div className="relative z-10 flex flex-col items-center px-6">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               className="flex flex-col items-center"
            >
               <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-8 bg-white/40" />
                  <span className="text-white text-[10px] font-black tracking-[0.5em] uppercase">México</span>
                  <div className="h-[1px] w-8 bg-white/40" />
               </div>

               {/* SIZE ADJUSTED FOR MOBILE: text-6xl for mobile, text-[12rem] for desktop */}
               <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-black text-white leading-[0.8] tracking-tighter">
                  PAPANTLA
               </h1>

               <div className="flex items-center gap-4 mt-8">
                  <div className="w-2 h-2 bg-primary rotate-45" />
                  <span className="text-white text-md md:text-2xl font-black uppercase tracking-widest italic drop-shadow-2xl">
                     LA CIUDAD QUE PERFUMA
                  </span>
                  <div className="w-2 h-2 bg-primary rotate-45" />
               </div>

               <Link href="#explore" scroll={true}>
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-16 px-12 py-4 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-white/20"
                    >
                    Explorar Más
                    </motion.button>
               </Link>
            </motion.div>
         </div>

         <div className="absolute bottom-10 animate-bounce opacity-40">
            <ArrowDown className="text-white w-6 h-6" />
         </div>
      </section>

      {/* SECTION 2: EXPLORAR MÁS */}
      <section id="explore" className="py-32 px-6 bg-gray-50 dark:bg-[#050505]">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-20">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {exploreItems.map((item, i) => (
                    <motion.div
                       key={i}
                       initial={{ opacity: 0, scale: 0.9 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className="group relative h-[500px] rounded-[50px] overflow-hidden shadow-2xl"
                    >
                        <Image 
                           src={item.img} 
                           alt={item.title} 
                           fill 
                           className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                        <div className="absolute bottom-12 left-10 right-10">
                           <span className="text-primary font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">
                              {item.subtitle}
                           </span>
                           <h3 className="text-4xl font-black text-white leading-none tracking-tight mb-4">
                              {item.title}
                           </h3>
                           <p className="text-white/60 text-sm font-medium leading-relaxed max-w-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              {item.desc}
                           </p>
                           <button className="flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest bg-white/10 backdrop-blur-md px-6 py-3 rounded-full hover:bg-primary transition-all">
                              Ver Detalle <ChevronRight className="w-4 h-4" />
                           </button>
                        </div>
                    </motion.div>
                 ))}
             </div>
          </div>
      </section>

      {/* SECTION 3: HISTORIA Y CULTURA */}
      <section className="py-32 px-6 bg-white dark:bg-black">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-20">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                 <div className="flex flex-col gap-10">
                     <div className="flex flex-col gap-4">
                        <Landmark className="text-primary w-10 h-10" />
                        <h3 className="text-5xl md:text-6xl font-black tracking-tight text-black dark:text-white italic">
                            Historia & <span className="text-primary not-italic">Cultura</span>
                        </h3>
                     </div>
                     <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                        Papantla es un crisol de tradiciones milenarias. Descubre los recintos que resguardan el legado Totonaca y el arte que nace de la tierra.
                     </p>
                     
                     {/* MUSEUM BANNER */}
                     <motion.div 
                        whileHover={{ y: -10 }}
                        className="bg-gray-100 dark:bg-white/5 p-8 rounded-[40px] border border-black/5 dark:border-white/5 flex flex-col gap-6"
                     >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/30">
                               <Landmark className="w-6 h-6" />
                            </div>
                            <h4 className="text-2xl font-black text-black dark:text-white tracking-tight">Museo Teodoro Cano</h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            Resguarda la obra monumental del maestro Teodoro Cano, capturando la esencia espiritual y cotidiana de la cultura Totonaca.
                        </p>
                        <button className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-primary dark:hover:bg-primary hover:text-white transition-all shadow-lg">
                            Página de Información
                        </button>
                     </motion.div>
                 </div>
                 
                 <div className="relative rounded-[80px] overflow-hidden aspect-[4/5] border-8 border-gray-100 dark:border-white/5 shadow-3xl">
                    <Image 
                       src="https://images.unsplash.com/photo-1626081498877-c93d8e57eeff?auto=format&fit=crop&q=80" 
                       alt="Cultura Papantla" 
                       fill 
                       className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                 </div>
             </div>
          </div>
      </section>
    </div>
  );
}
