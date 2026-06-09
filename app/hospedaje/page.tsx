"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bed, Star, MapPin, Phone, Calendar, Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { fuzzyMatch } from "@/utils/search";

const hotels = [
  {
    id: "hotel-tajin",
    name: "Hotel Tajín",
    address: "José de Jesús Núñez 104, El Naranjo, 93400 Papantla, Ver.",
    phone: "7848420121",
    img: "/images/hotels/hoteltajin.jpg",
    rating: "4.5",
  },
  {
    id: "hotel-vista-inn",
    name: "Hotel Vista INN",
    address: "Reforma 102-local 5, Centro, 93400 Papantla de Olarte, Ver.",
    phone: "7848425981",
    img: "/images/hotels/vistainn.jpg",
    rating: "4.3",
  },
  {
    id: "oyo-hotel-totonacapan",
    name: "OYO Hotel Totonacapan",
    address: "s/n Olivo Centro, Barrio del San Juan, 93400 Papantla, Ver.",
    phone: "2296903292",
    img: "/images/hotels/oyo.jpg",
    rating: "4.0",
  },
  {
    id: "hostal-del-centro-papantla",
    name: "Hostal del Centro Papantla",
    address: "Aquiles Serdán 415, Centro, 93449 Papantla, Ver.",
    phone: "7841023268",
    img: "/images/hotels/hoteldelcentro.jpg",
    rating: "4.2",
  },
  {
    id: "hotel-campestre-la-colina-del-conejo",
    name: "Hotel Campestre La Colina Del Conejo",
    address: "Jacarandas 35, Adolfo Lopez Mateos, 93438 Papantla de Olarte, Ver.",
    phone: "7848219206",
    img: "/images/hotels/colina.jpg",
    rating: "4.6",
  },
  {
    id: "hotel-santo-domingo",
    name: "Hotel Santo Domingo",
    address: "5 de Mayo 301, Barrio del San Juan, 93449 Papantla, Ver.",
    phone: "7848427038",
    img: "/images/hotels/santo.jpg",
    rating: "4.2",
  },
  {
    id: "hotel-vainilla-y-descanso",
    name: "Hotel Vainilla y Descanso",
    address: "Francisco I Madero 716, Benito Juárez, 93410 Papantla de Olarte, Ver.",
    phone: "7821862711",
    img: "/images/hotels/vainilla.jpg",
    rating: "4.7",
  },
  {
    id: "hotel-katlen",
    name: "Hotel Katlen",
    address: "Barrio del San Juan, 93449 Papantla de Olarte, Ver.",
    phone: "7848423990",
    img: "/images/hotels/katlen.jpg",
    rating: "3.9",
  },
  {
    id: "hotel-familiar-arenas",
    name: "Hotel Familiar Arenas",
    address: "Juan Enríquez 307, Barrio del Naranjo, 93400 Papantla, Ver.",
    phone: "7848423366",
    img: "/images/hotels/arenas.jpg",
    rating: "4.0",
  },
];

export default function HospedajePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHotels = useMemo(() => {
    return hotels.filter(hotel => 
      fuzzyMatch(searchQuery, hotel.name) ||
      fuzzyMatch(searchQuery, hotel.address)
    );
  }, [searchQuery]);

  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      <header className="px-6 pt-32 pb-10 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-lg shadow-primary/5">
            <Bed className="w-7 h-7" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-foreground uppercase">Hospedaje</h1>
        </div>

        <div className="relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar hotel o zona..."
            className="w-full bg-gray-100 dark:bg-white/5 border border-transparent dark:border-white/5 rounded-[30px] py-6 pl-16 pr-8 text-sm font-bold focus:ring-4 focus:ring-primary/10 outline-none transition-all shadow-sm"
          />
        </div>

        <p className="text-muted-foreground font-bold tracking-tight uppercase text-[10px] opacity-60">
          Descubre los mejores rincones para descansar en Papantla La Ciudad que Perfuma el Mundo
        </p>
      </header>

      <section className="px-6 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredHotels.map((hotel, i) => (
              <motion.div
                layout
                key={hotel.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-[40px] overflow-hidden shadow-2xl transition-all hover:border-primary/30 h-full flex flex-col"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image 
                    src={hotel.img} 
                    alt={hotel.name} 
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-5 right-5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 border border-white/20">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-bold text-white">{hotel.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <Link href={`/hospedaje/${hotel.id}`}>
                  <div className="p-7">
                    <h3 className="text-2xl font-black text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors uppercase">
                      {hotel.name}
                    </h3>
                  </div>
                </Link>
                
                <div className="px-7 pb-7 mt-auto">
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-start gap-2 text-muted-foreground text-[10px] leading-relaxed font-bold">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{hotel.address}</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <button 
                        onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(hotel.name + " " + hotel.address)}`, "_blank")}
                        className="flex-1 h-12 rounded-2xl bg-primary text-white font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                      >
                        <MapPin className="w-3.5 h-3.5" /> Ubicación
                      </button>
                      <button 
                        onClick={() => window.location.href = `tel:${hotel.phone}`}
                        className="flex-1 h-12 rounded-2xl bg-green-500 text-white font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 active:scale-95 transition-transform"
                      >
                        <Phone className="w-3.5 h-3.5" /> Llamar
                      </button>
                    </div>
                    <button 
                      className="w-full h-12 rounded-2xl bg-white/10 border border-black/5 dark:border-white/10 text-foreground font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/20 active:scale-95 transition-all text-center"
                    >
                      <Calendar className="w-3.5 h-3.5" /> Reservar Ahora
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
