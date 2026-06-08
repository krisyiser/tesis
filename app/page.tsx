"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowDown, Landmark, Search, X, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { tourismData } from "@/data/tourism";
import { fuzzyMatch } from "@/utils/search";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const imgBPath = "/hero-b-background.jpg";

  useEffect(() => {
    // Force scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery) return [];
    return tourismData.filter(item => 
      fuzzyMatch(searchQuery, item.title) ||
      fuzzyMatch(searchQuery, item.subtitle) ||
      fuzzyMatch(searchQuery, item.tag) ||
      fuzzyMatch(searchQuery, item.description)
    ).slice(0, 6);
  }, [searchQuery]);

  return (
    <div className="flex flex-col bg-white dark:bg-black transition-colors duration-500 overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center text-center">
         <div className="absolute inset-0 z-0">
            <Image 
               src={imgBPath} 
               alt="Papantla Hero" 
               fill
               className="w-full h-full object-cover scale-105"
               priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />
         </div>

         <div className="relative z-10 flex flex-col items-center px-6">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="flex flex-col items-center"
            >
               <div className="flex items-center gap-3 mb-8">
                  <div className="h-[1px] w-12 bg-primary/60" />
                  <span className="text-white text-[10px] font-black tracking-[0.5em] uppercase opacity-80">Patrimonio de la Humanidad</span>
                  <div className="h-[1px] w-12 bg-primary/60" />
               </div>

               <h1 className="text-7xl md:text-8xl lg:text-[13rem] font-black text-white leading-[0.75] tracking-tighter uppercase filter drop-shadow-2xl">
                  PAPANTLA
               </h1>

               <div className="flex flex-col items-center gap-2 mt-10">
                  <span className="text-white text-lg md:text-3xl font-black uppercase tracking-[0.2em] drop-shadow-xl text-primary">
                     La Ciudad que Perfuma
                  </span>
                  <div className="h-[2px] w-24 bg-primary rounded-full mt-2" />
               </div>

               <Link href="#search-section" scroll={true}>
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-16 px-14 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white font-black text-[10px] uppercase tracking-[0.4em] transition-all hover:bg-white/10 hover:border-white/40 shadow-2xl"
                    >
                    Empezar Viaje
                    </motion.button>
               </Link>
            </motion.div>
         </div>

         <div className="absolute bottom-10 animate-bounce opacity-50">
            <ArrowDown className="text-white w-6 h-6" />
         </div>
      </section>

      {/* SECTION 2: GLOBAL SEARCH */}
      <section id="search-section" className="py-32 px-6 bg-gray-50 dark:bg-black relative">
          <div className="max-w-4xl mx-auto flex flex-col gap-12 items-center">
             
             <div className="text-center flex flex-col gap-4 mb-4">
                <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Exploración Inteligente</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase">¿Qué deseas descubrir?</h2>
             </div>

             {/* POWER SEARCH BAR */}
             <div className="relative w-full z-[100]">
                <div className={`relative group transition-all duration-500 ${isFocused ? 'scale-[1.02]' : 'scale-100'}`}>
                  <div className="absolute inset-y-0 left-7 flex items-center">
                      <Search className={`w-6 h-6 transition-colors ${isFocused ? 'text-primary' : 'text-gray-400'}`} />
                  </div>
                  <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                      placeholder="Busca destinos gastronomía hoteles o historia..."
                      className="w-full py-8 pl-18 pr-16 bg-white dark:bg-zinc-900 border-2 border-black/5 dark:border-white/5 rounded-[40px] font-bold text-foreground text-lg focus:border-primary/30 focus:ring-8 focus:ring-primary/5 transition-all outline-none shadow-2xl"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-7 flex items-center text-gray-400 hover:text-primary transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  )}
                </div>

                {/* RESULTS DROPDOWN */}
                <AnimatePresence>
                  {searchQuery && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="absolute top-full left-0 right-0 mt-6 bg-white dark:bg-zinc-900 rounded-[40px] border border-black/10 dark:border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden p-3"
                    >
                      {searchResults.length > 0 ? (
                        <div className="flex flex-col gap-1">
                          <div className="px-4 py-2 mb-2">
                             <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Coincidencias encontradas</span>
                          </div>
                          {searchResults.map((item) => (
                            <Link 
                              key={item.id} 
                              href={`/${item.category}/${item.id}`}
                              className="flex items-center gap-5 p-5 hover:bg-primary/5 rounded-[30px] transition-all group"
                            >
                              <div className="w-16 h-16 rounded-2xl overflow-hidden relative flex-shrink-0 shadow-lg">
                                <Image src={item.imageUrl} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                              </div>
                              <div className="flex flex-col flex-1 overflow-hidden">
                                <span className="font-black text-lg uppercase tracking-tight group-hover:text-primary transition-colors truncate">{item.title}</span>
                                <div className="flex items-center gap-2 text-gray-400 font-bold text-[10px] uppercase tracking-widest mt-1">
                                  <MapPin className="w-3 h-3 text-primary" />
                                  <span className="truncate">{item.subtitle}</span>
                                </div>
                              </div>
                              <div className="bg-primary/10 text-primary text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-primary/20">
                                {item.category}
                              </div>
                            </Link>
                          ))}
                          <div className="p-4 flex justify-center mt-2 border-t border-black/5 dark:border-white/5">
                            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest animate-pulse">Sigue escribiendo para refinar...</span>
                          </div>
                        </div>
                      ) : (
                        <div className="p-16 text-center flex flex-col items-center gap-6">
                          <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center text-primary/30">
                             <Search className="w-10 h-10" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <span className="text-xl font-black text-foreground uppercase tracking-tight">Sin resultados</span>
                            <span className="text-xs text-gray-400 font-medium">Intenta con otros términos como 'Vainilla', 'Tajín' o 'Hotel'</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          </div>
      </section>

      {/* SECTION 3: FEATURED */}
      <section className="py-32 px-6 bg-white dark:bg-zinc-950">
          <div className="max-w-[1400px] mx-auto">
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-l-4 border-primary pl-8">
                <div>
                   <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Imperdibles</span>
                   <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground uppercase leading-[0.9]">Experiencias<br/>Esenciales</h2>
                </div>
                <Link href="/destinos" className="group flex items-center gap-4 bg-primary text-white px-8 py-5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-primary/30 hover:translate-x-2 transition-all">
                   Ver todos los destinos <ChevronRight className="w-4 h-4" />
                </Link>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {tourismData.filter(d => d.category === "destinos").slice(0, 2).map((item, i) => (
                    <motion.div
                       key={item.id}
                       initial={{ opacity: 0, y: 40 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.2 }}
                       className="group relative h-[600px] rounded-[60px] overflow-hidden shadow-3xl"
                    >
                        <Image 
                           src={item.imageUrl} 
                           alt={item.title} 
                           fill 
                           className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
                        <div className="absolute bottom-16 left-12 right-12 text-left">
                           <div className="bg-primary/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-primary/30 w-fit mb-6">
                              <span className="text-primary-foreground font-black uppercase text-[9px] tracking-widest">
                                 {item.tag}
                              </span>
                           </div>
                           <h3 className="text-5xl font-black text-white leading-none tracking-tight mb-6 uppercase">
                              {item.title}
                           </h3>
                           <p className="text-white/60 text-lg font-medium leading-relaxed max-w-sm mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-10 group-hover:translate-y-0">
                              {item.description}
                           </p>
                           <Link href={`/destinos/${item.id}`}>
                            <button className="flex items-center gap-4 text-white font-black text-[11px] uppercase tracking-[0.2em] bg-white/10 backdrop-blur-xl border border-white/20 px-10 py-5 rounded-full hover:bg-primary hover:border-primary transition-all shadow-xl group/btn">
                                Descubrir <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                            </button>
                           </Link>
                        </div>
                    </motion.div>
                ))}
             </div>
          </div>
      </section>

      {/* SECTION 4: HISTORIA */}
      <section className="py-40 px-6 bg-gray-50 dark:bg-black overflow-hidden">
          <div className="max-w-[1400px] mx-auto text-left">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                 <div className="flex flex-col gap-12 relative z-10">
                    <div className="flex flex-col gap-6">
                        <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-xl">
                          <Landmark className="w-10 h-10" />
                        </div>
                        <h3 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground uppercase leading-[0.85]">
                            Cultura &<br/><span className="text-primary italic">Tradición</span>
                        </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xl md:text-2xl font-medium leading-relaxed max-w-xl">
                        Papantla resguarda el alma de los pueblos nativos. Descubre el arte la danza de los voladores y la cosmogonía Totonaca en cada rincón
                    </p>
                    
                    <motion.div 
                        whileHover={{ y: -10 }}
                        className="bg-white dark:bg-zinc-900 p-10 rounded-[50px] border border-black/5 dark:border-white/5 flex flex-col gap-8 shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 text-primary/10 translate-x-4 -translate-y-4">
                           <Sparkles className="w-32 h-32" />
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/30">
                               <Landmark className="w-8 h-8" />
                            </div>
                            <h4 className="text-3xl font-black text-foreground tracking-tight uppercase">Legado Totonal</h4>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed relative z-10">
                            Desde las pirámides sagradas hasta los murales contemporáneos la historia vive y respira en Papantla
                        </p>
                        <button 
                          onClick={() => window.location.href='/destinos'}
                          className="w-full py-6 bg-primary text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-3xl hover:bg-foreground hover:text-background transition-all shadow-xl"
                        >
                            Ver Todo el Acervo
                        </button>
                    </motion.div>
                 </div>
                 
                 <div className="relative group">
                    <div className="absolute -inset-4 bg-primary/20 rounded-[100px] blur-3xl opacity-30 group-hover:opacity-50 transition-all" />
                    <div className="relative rounded-[100px] overflow-hidden aspect-[4/5] border-[12px] border-white dark:border-zinc-900 shadow-[0_64px_128px_-32px_rgba(0,0,0,0.5)]">
                        <Image 
                           src="https://images.unsplash.com/photo-1626081498877-c93d8e57eeff?auto=format&fit=crop&q=80" 
                           alt="Cultura Papantla" 
                           fill 
                           className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-12 left-12">
                           <span className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                             <div className="w-2 h-2 bg-primary animate-pulse" /> Ritual de los Voladores
                           </span>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
      </section>
    </div>
  );
}
