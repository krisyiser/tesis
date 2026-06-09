"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bed, Star, MapPin, Phone, Search, X, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { fuzzyMatch } from "@/utils/search";

const hotels = [
  {
    name: "Hotel Tajín",
    address: "José de Jesús Núñez 104, El Naranjo, 93400 Papantla, Ver.",
    phone: "7848420121",
    img: "/images/hotels/hoteltajin.jpg",
    rating: "4.8",
    tag: "Tradicional"
  },
  {
    name: "Hotel Vista INN",
    address: "Reforma 102-local 5, Centro, 93400 Papantla de Olarte, Ver.",
    phone: "7848425981",
    img: "/images/hotels/vistainn.jpg",
    rating: "4.5",
    tag: "Centro"
  },
  {
    name: "OYO Hotel Totonacapan",
    address: "s/n Olivo Centro, Barrio del San Juan, 93400 Papantla, Ver.",
    phone: "2296903292",
    img: "/images/hotels/oyo.jpg",
    rating: "4.2",
    tag: "Económico"
  },
  {
    name: "Hostal del Centro Papantla",
    address: "Aquiles Serdán 415, Centro, 93449 Papantla, Ver.",
    phone: "7841023268",
    img: "/images/hotels/hoteldelcentro.jpg",
    rating: "4.4",
    tag: "Hostal"
  },
  {
    name: "Hotel Campestre La Colina Del Conejo",
    address: "Jacarandas 35, Adolfo Lopez Mateos, 93438 Papantla de Olarte, Ver.",
    phone: "7848219206",
    img: "/images/hotels/colina.jpg",
    rating: "4.7",
    tag: "Campestre"
  },
  {
    name: "Hotel Santo Domingo",
    address: "5 de Mayo 301, Barrio del San Juan, 93449 Papantla, Ver.",
    phone: "7848427038",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    rating: "4.0",
    tag: "Familiar"
  },
  {
    name: "Hotel Vainilla y Descanso",
    address: "Francisco I Madero 716, Benito Juárez, 93410 Papantla de Olarte, Ver.",
    phone: "7821862711",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80",
    rating: "4.9",
    tag: "Boutique"
  },
  {
    name: "Hotel Katlen",
    address: "Barrio del San Juan, 93449 Papantla de Olarte, Ver.",
    phone: "7848423990",
    img: "https://images.unsplash.com/photo-1551882547-ff43c6148683?auto=format&fit=crop&q=80",
    rating: "4.1",
    tag: "Confort"
  },
  {
    name: "Hotel Familiar Arenas",
    address: "Juan Enríquez 307, Barrio del Naranjo, 93400 Papantla, Ver.",
    phone: "7848423366",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    rating: "4.0",
    tag: "Familiar"
  },
];

export default function HospedajePage() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredHotels = useMemo(() => {
    return hotels.filter(hotel => 
      fuzzyMatch(searchQuery, hotel.name) ||
      fuzzyMatch(searchQuery, hotel.address)
    );
  }, [searchQuery]);

  const callNumber = (phone: string) => {
    window.location.href = `tel:${phone.replace(/\s+/g, "")}`;
  };

  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen font-outfit">
      <header className="px-8 pt-32 pb-12 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Bed className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Descanso</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground leading-none uppercase">
            Hospedaje
          </h1>
        </div>

        <div className="relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar hotel o dirección..."
            className="w-full bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/5 rounded-[30px] py-6 pl-16 pr-12 text-sm font-bold focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">
               <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </header>

      <div className="px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredHotels.map((hotel, i) => (
            <motion.div
              layout
              key={hotel.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-zinc-900 rounded-[40px] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl flex flex-col group hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={hotel.img} 
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="bg-primary/90 backdrop-blur-md text-white px-3 py-1 rounded-xl text-[8px] font-black uppercase tracking-widest">
                    {hotel.tag}
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tighter leading-tight uppercase group-hover:text-primary transition-colors">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-2 text-white/70 text-[9px] font-bold">
                       <MapPin className="w-3 h-3 text-primary" />
                       <span className="line-clamp-1">{hotel.address}</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-2xl flex items-center gap-2 border border-white/10 shrink-0">
                    <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    <span className="text-xs font-black text-white">{hotel.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 mt-auto">
                <div className="flex gap-3">
                  <Link 
                    href={`/hospedaje/${hotel.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex-1 bg-gray-100 dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black py-4 rounded-2xl flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest transition-all shadow-sm"
                  >
                     Detalles <ChevronRight className="w-4 h-4" />
                  </Link>
                  <button 
                    onClick={() => callNumber(hotel.phone)}
                    className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center active:scale-90 transition-all shadow-lg shadow-primary/20"
                  >
                    <Phone className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
