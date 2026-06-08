"use client";

import { motion } from "framer-motion";
import { Bed, Star, MapPin, Phone, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const hotels = [
  {
    name: "Hotel Tajin",
    address: "José de Jesús Nuñez 104, El Naranjo, 93400 Papantla, Ver.",
    phone: "7848420121",
    img: "/images/hotels/hotel_1.png",
    rating: "4.5",
  },
  {
    name: "Hotel Vista Inn",
    address: "Reforma 102-local 5, Centro, 93400 Papantla de Olarte, Ver.",
    phone: "7848425981",
    img: "/images/hotels/hotel_2.png",
    rating: "4.3",
  },
  {
    name: "OYO Hotel Totonacapan",
    address: "s/n Olivo Centro, Barrio del San Juan, 93400 Papantla, Ver.",
    phone: "2296903292",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    rating: "4.0",
  },
  {
    name: "Hostel del Centro Papantla",
    address: "Aquiles Serdán 415, Centro, 93449 Papantla, Ver.",
    phone: "+527841023268",
    img: "https://images.unsplash.com/photo-1555854817-276f53416790?auto=format&fit=crop&q=80",
    rating: "4.2",
  },
  {
    name: "Hotel Quinta de Los Leones",
    address: "Vereda Tropical #1, Colonia Centro, 93400 Papantla de Olarte, Ver.",
    phone: "7848885994",
    img: "/images/hotels/hotel_1.png",
    rating: "4.6",
  },
  {
    name: "Hotel Casa Blanca",
    address: "Cjon B Juárez 305, Centro, 93449 Papantla, Ver.",
    phone: "7848420681",
    img: "/images/hotels/hotel_2.png",
    rating: "4.1",
  },
  {
    name: "Hotel Vainilla y Descanso",
    address: "Francisco I Madero 716, Benito Juárez, 93410 Papantla de Olarte, Ver.",
    phone: "7821862711",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80",
    rating: "4.7",
  },
  {
    name: "Hotel Santo Domingo",
    address: "5 de Mayo 301, Barrio del San Juan, 93449 Papantla, Ver.",
    phone: "7848427038",
    img: "/images/hotels/hotel_1.png",
    rating: "4.2",
  },
  {
    name: "Hotel Carlota",
    address: "C. Obispo de Las Casas 103, Barrio del Naranjo, 93400 Papantla de Olarte, Ver.",
    phone: "7848424353",
    img: "/images/hotels/hotel_2.png",
    rating: "4.4",
  },
  {
    name: "Hotel Katlen",
    address: "Barrio del San Juan, 93449 Papantla de Olarte, Ver.",
    phone: "7848423990",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    rating: "3.9",
  },
  {
    name: "Hotel Familiar Arenas",
    address: "Juan Enríquez 307, Barrio del Naranjo, 93400 Papantla, Ver.",
    phone: "7848423366",
    img: "/images/hotels/hotel_1.png",
    rating: "4.0",
  },
  {
    name: "Hotel Pulido",
    address: "Juan Enríquez 205, Centro, 93400 Papantla, Ver.",
    phone: "7848420036",
    img: "/images/hotels/hotel_2.png",
    rating: "3.8",
  },
  {
    name: "Hotel Farolito",
    address: "González Ortega 304, Barrio del Naranjo, 93400 Papantla de Olarte, Ver.",
    phone: "7848426513",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80",
    rating: "4.1",
  },
];

export default function HospedajePage() {
  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen">
      <header className="px-6 pt-24 pb-10 flex flex-col gap-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-lg shadow-primary/5">
            <Bed className="w-6 h-6" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-foreground">Hospedaje</h1>
        </motion.div>
        <p className="text-muted-foreground font-medium leading-tight max-w-sm">
          Descubre los mejores rincones para descansar en Papantla, "La Ciudad que Perfuma el Mundo".
        </p>
      </header>

      <section className="px-6 flex flex-col gap-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {hotels.map((hotel, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
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
              <Link href={`/hospedaje/${hotel.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="p-7">
                  <h3 className="text-2xl font-black text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {hotel.name}
                  </h3>
                </div>
              </Link>
              
              <div className="px-7 pb-7">
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-start gap-2 text-muted-foreground text-xs leading-relaxed">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{hotel.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <span>{hotel.phone}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <button 
                      onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(hotel.name + " " + hotel.address)}`, "_blank")}
                      className="flex-1 h-12 rounded-2xl bg-primary text-white font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                    >
                      <MapPin className="w-3.5 h-3.5" /> Ubicación
                    </button>
                    <button 
                      onClick={() => window.location.href = `tel:${hotel.phone}`}
                      className="flex-1 h-12 rounded-2xl bg-green-500 text-white font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 active:scale-95 transition-transform"
                    >
                      <Phone className="w-3.5 h-3.5" /> Llamar
                    </button>
                  </div>
                  <button 
                    className="w-full h-12 rounded-2xl bg-white/10 border border-white/10 text-foreground font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/20 active:scale-95 transition-all text-center"
                  >
                    <Calendar className="w-3.5 h-3.5" /> Reservar Ahora
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

