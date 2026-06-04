"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IOSCard from "@/components/IOSCard";
import { 
  Utensils, 
  MapPin, 
  ChevronRight, 
  Pizza, 
  ChefHat, 
  Phone, 
  ArrowLeft,
  Coffee,
  Fish,
  Flame,
  IceCream,
  Wine,
  Search
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const traditionalMenu = [
  { title: "Zacahuil", sub: "Rey de los tamales", img: "/images/sabores/zacahuil.jpg" },
  { title: "Mole Papanteco", sub: "Sabor ancestral", img: "/images/sabores/mole.jpg" },
  { title: "Bocoles", sub: "Maíz y Tradición", img: "/images/sabores/bocoles.jpg" },
  { title: "Beso Papanteco", sub: "Dulce herencia", img: "/images/sabores/beso.jpg" },
  { title: "Atole Morado", sub: "Bebida sagrada", img: "/images/sabores/atole.jpg" },
];

const traditionalRestaurants = [
  {
    name: "Restaurante Nakú",
    address: "Heroico Colegio Militar s/n-s/n, Manantiales, 93400 Papantla de Olarte, Ver.",
    phone: "784 842 3112",
    mapUrl: "https://maps.app.goo.gl/1B8GdK4MsHbvT99B6",
    image: "/images/locals/traditional.png"
  },
  {
    name: "La Boca",
    address: "Aquiles Serdán 700, Barrio del Zapote, 93400 Papantla de Olarte, Ver.",
    phone: "784 842 5756",
    mapUrl: "https://maps.app.goo.gl/p8kS9FGC1SPZArc87",
    image: "/images/locals/seafood.png"
  },
  {
    name: "Restaurante Totonaco",
    address: "José de Jesús, Lázaro Muñoz 104, El Naranjo, 93400 Papantla de Olarte, Ver.",
    phone: "784 112 2581",
    mapUrl: "https://maps.app.goo.gl/v1k7ytRULDZcV88XA",
    image: "/images/locals/traditional.png"
  },
  {
    name: "Don Pope Restaurante",
    address: "Francisco I Madero 206, Barrio del San Juan, 93449 Papantla, Ver.",
    phone: "784 213 5289",
    mapUrl: "https://maps.app.goo.gl/fgVBoLuKatkTSvBf7",
    image: "/images/locals/traditional.png"
  },
  {
    name: "Restaurante Papantla Kachikin",
    address: "Chote - Papantla, Barrio del Zapote, 93400 Papantla de Olarte, Ver.",
    phone: "784 133 5190",
    mapUrl: "https://maps.app.goo.gl/SwYGng9L6wLUYb3JA",
    image: "/images/locals/traditional.png"
  },
  {
    name: "Centro Turístico Saberes Ancestrales de la Vainilla",
    address: "Revolución 116, Barrio del Zapote, 93400 Papantla de Olarte, Ver.",
    phone: "784 115 0077",
    mapUrl: "https://maps.app.goo.gl/ikLEed7rgApJyF6M7",
    image: "/images/locals/traditional.png"
  },
  {
    name: "Restaurante Humo",
    address: "Cjon 16 de Septiembre 104, Santa Cruz, 93400 Papantla, Ver.",
    phone: "784 842 0400",
    mapUrl: "https://maps.app.goo.gl/o3nV7Vq5trXB2jsC9",
    image: "/images/locals/traditional.png"
  },
  {
    name: "Al Son del Chapala",
    address: "Reforma #100 altos, Centro, 93400 Papantla, Ver.",
    phone: "784 842 3517",
    mapUrl: "https://maps.app.goo.gl/xP2cWBsnHaMQjGpAA",
    image: "/images/locals/traditional.png"
  },
  {
    name: "Plaza Pardo",
    address: "Juan Enríquez 105, Centro, 93449 Papantla de Olarte, Ver.",
    phone: "784 842 0059",
    mapUrl: "https://maps.app.goo.gl/s1WTaBJCYQrvkhHr9",
    image: "/images/locals/traditional.png"
  },
  {
    name: "Restaurante la Parroquia de Papantla",
    address: "Cjon 16 de Septiembre 114, Barrio del Naranjo, 93400 Papantla de Olarte, Ver.",
    phone: "784 888 5904",
    mapUrl: "https://maps.app.goo.gl/R3Nd1hT6jdGC3jG98",
    image: "/images/locals/traditional.png"
  },
  {
    name: "Restaurante Pipos",
    address: "Juan Enríquez 302-304, Barrio del Naranjo, 93400 Papantla de Olarte, Ver.",
    phone: "784 842 3932",
    mapUrl: "https://maps.app.goo.gl/2JN4tTV7q3Wnh69LA",
    image: "/images/locals/traditional.png"
  },
];

const foodBusinesses = [
  { name: "Café Catedral", address: "Curato s/n, Barrio del Naranjo, 93400 Poza Rica de Hidalgo, Ver.", phone: "784 842 5317", mapUrl: "https://maps.app.goo.gl/Xk78Zq2sGodrBbMz8", categories: ["Cafetería"], image: "/images/locals/cafe.png" },
  { name: "La choza de Lucy", address: "Cjon 16 de Septiembre centro 829, Barrio del Zapote, 93400 Papantla de Olarte, Ver.", phone: "784 842 4980", mapUrl: "https://maps.app.goo.gl/ZH4ME7xq2ynUotJc8", categories: ["Mariscos"], image: "/images/locals/seafood.png" },
  { name: "Las Canastas", address: "José Azueta 105, Barrio del San Juan, 93400 Papantla de Olarte, Ver.", phone: "784 144 2168", mapUrl: "https://maps.app.goo.gl/t9JHDca26PVxULpH8", categories: ["Comida Típica", "Antojitos"], image: "/images/locals/traditional.png" },
  { name: "Zacahuil \"Perla\"", address: "Cjon 16 de Septiembre 907, Barrio del Zapote, 93400 Papantla de Olarte, Ver.", phone: "784 134 6603", mapUrl: "https://maps.app.goo.gl/sZgU1sqJPnqZMnqW9", categories: ["Comida Típica"], image: "/images/locals/traditional.png" },
  { name: "SUSHI & DRINKS MR. ROLLO", address: "C. José de J. Núñez 18, Barrio del Naranjo, 93400 Papantla de Olarte, Ver.", phone: "", mapUrl: "https://maps.app.goo.gl/dhzD1EHxZC44JK9b8", categories: ["Sushi y Comida Asiática", "Snacks"], image: "/images/locals/traditional.png" },
  { name: "Mexicanísimas", address: "Juan Enríquez 213, Barrio del Naranjo, 93400 Papantla de Olarte, Ver.", phone: "784 114 0955", mapUrl: "https://maps.app.goo.gl/SbMdHBw4hghZmcNQ9", categories: ["Comida Típica"], image: "/images/locals/traditional.png" },
  { name: "Café Del Centro", address: "Artes 108, Barrio del San Juan, 93400 Papantla, Ver.", phone: "784 842 1163", mapUrl: "https://maps.app.goo.gl/mcuXHDvVN4Vymr4Z8", categories: ["Cafetería", "Snacks", "Pizzería", "Hamburguesas"], image: "/images/locals/cafe.png" },
  { name: "Me Perdonas ☕", address: "C. Rodolfo Curti 118, Santa Cruz, 93400 Papantla de Olarte, Ver.", phone: "784 121 8557", mapUrl: "https://maps.app.goo.gl/BURRJANMVhE74zd6A", categories: ["Cafetería", "Snacks"], image: "/images/locals/cafe.png" },
  { name: "Clandestino", address: "C. Andrés Q.R. 201, Barrio del Naranjo, 93400 Papantla de Olarte, Ver.", phone: "784 849 9423", mapUrl: "https://maps.app.goo.gl/BF1V2jTwzacvyUx39", categories: ["Pizzería", "Hamburguesas", "Snacks"], image: "/images/locals/tacos.png" },
  { name: "La Jarochita", address: "Leandro Valle s/n, Centro, 93449 Papantla de Olarte, Ver.", phone: "784 134 4357", mapUrl: "https://maps.app.goo.gl/wvJmUfWwtEweX3tr7", categories: ["Mariscos", "Bares y Cantinas"], image: "/images/locals/seafood.png" },
  { name: "Tacos Rojos", address: "Barrio del San Juan, 93449 Papantla de Olarte, Ver.", phone: "", mapUrl: "https://maps.app.goo.gl/UzQLrQURAViDvh1A7", categories: ["Taquería"], image: "/images/locals/tacos.png" },
  { name: "Taqueria Pozo del Zanjon", address: "C. Josefa Ortiz de Domínguez 101, Barrio del Zapote, 93400 Papantla de Olarte, Ver.", phone: "", mapUrl: "https://maps.app.goo.gl/f2HKzufattpntCSs6", categories: ["Taquería"], image: "/images/locals/tacos.png" },
  { name: "Taqueria EL TIZON", address: "Veracruz - Poza Rica 505, Barrio del San Juan, 93400 Papantla de Olarte, Ver.", phone: "", mapUrl: "https://maps.app.goo.gl/APH3EuA9Jw1vuwgv7", categories: ["Taquería"], image: "/images/locals/tacos.png" },
  { name: "Super Taquería \"El Gordo\"", address: "calle Francisco I. Madero, Barrio del San Juan, 93400 Papantla, Ver.", phone: "784 108 7880", mapUrl: "https://maps.app.goo.gl/2jPkouqjDNF1C6mq6", categories: ["Taquería"], image: "/images/locals/tacos.png" },
  { name: "Taquería Serpet", address: "Barrio del San Juan, 93400 Papantla, Ver.", phone: "", mapUrl: "https://maps.app.goo.gl/xvArA9h59CsAor6i9", categories: ["Taquería"], image: "/images/locals/tacos.png" },
  { name: "Antojitos Doña Carmen", address: "De La Libertad 308, Barrio del Zapote, 93440 Papantla de Olarte, Ver.", phone: "784 688 1200", mapUrl: "https://maps.app.goo.gl/TdZfzCBfTW5W344M7", categories: ["Antojitos"], image: "/images/locals/traditional.png" },
  { name: "Las tortugas", address: "C. José de J. Núñez Col, Barrio del Naranjo, 93400 Papantla de Olarte, Ver.", phone: "784 121 4753", mapUrl: "https://maps.app.goo.gl/z3rgAuksDregf8Z28", categories: ["Pizzería", "Hamburguesas"], image: "/images/locals/tacos.png" },
];

const categories = [
  "Todos",
  "Comida Típica",
  "Antojitos",
  "Cafetería",
  "Taquería",
  "Pizzería",
  "Hamburguesas",
  "Mariscos",
  "Snacks",
  "Bares y Cantinas",
];

export default function SaborPage() {
  const [activeSection, setActiveSection] = useState<"menu" | "sabores" | "alimentos">("menu");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredBusinesses = foodBusinesses.filter(biz => 
    selectedCategory === "Todos" || biz.categories.includes(selectedCategory)
  );

  const openMap = (url: string) => {
    window.open(url, "_blank");
  };

  const callNumber = (phone: string) => {
    if (!phone) return;
    window.location.href = `tel:${phone.replace(/\s/g, "")}`;
  };

  return (
    <div className="pb-32 flex flex-col bg-background min-h-screen font-sans">
      <AnimatePresence mode="wait">
        {activeSection === "menu" ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <header className="px-6 pt-32 pb-10 flex flex-col gap-4 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                  <Utensils className="w-8 h-8" />
                </div>
                <h1 className="text-4xl font-black tracking-tighter text-foreground mt-2">Gastronomía</h1>
              </div>
              <p className="text-gray-400 font-medium tracking-tight max-w-xs mx-auto">
                Sabores ancestrales y el perfume de la vainilla en cada rincón de Papantla.
              </p>
            </header>

            <section className="px-6 flex flex-col gap-6">
              <h2 className="text-xl font-black tracking-tight flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                Platillos Tradicionales
              </h2>
              <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar snap-x">
                {traditionalMenu.map((dish, i) => (
                  <div key={i} className="min-w-[240px] snap-start">
                    <IOSCard title={dish.title} subtitle={dish.sub} imageUrl={dish.img} />
                  </div>
                ))}
              </div>
            </section>

            <section className="px-6 mt-10 grid grid-cols-1 gap-5">
              <motion.button 
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveSection("sabores")}
                className="relative overflow-hidden group bg-primary p-8 rounded-[40px] flex items-center gap-6 shadow-2xl shadow-primary/30 text-left"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white backdrop-blur-md">
                  <ChefHat className="w-7 h-7" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-white font-black text-xl tracking-tight">Sabores Papantecos</span>
                  <span className="text-white/60 text-[10px] uppercase font-bold tracking-[0.2em] mt-1">Restaurantes de Tradición</span>
                </div>
                <ChevronRight className="ml-auto text-white group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button 
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveSection("alimentos")}
                className="relative overflow-hidden group bg-white dark:bg-white/5 p-8 rounded-[40px] border border-black/5 flex items-center gap-6 shadow-xl text-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center text-primary shadow-inner">
                  <Pizza className="w-7 h-7" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-black text-xl tracking-tight">Alimentos y bebidas</span>
                  <span className="text-gray-400 text-[10px] uppercase font-bold tracking-[0.2em] mt-1">Directorio de Negocios</span>
                </div>
                <ChevronRight className="ml-auto text-gray-300 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </section>
          </motion.div>
        ) : activeSection === "sabores" ? (
          <motion.div
            key="sabores"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="px-6"
          >
            <header className="pt-20 pb-8 flex flex-col gap-4">
              <button 
                onClick={() => setActiveSection("menu")}
                className="w-12 h-12 rounded-full bg-white dark:bg-white/5 border border-black/5 flex items-center justify-center text-primary shadow-sm active:scale-90 transition-all mb-4"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-4xl font-black tracking-tighter text-foreground">Sabores Papantecos</h1>
              <p className="text-gray-400 font-medium tracking-tight">Especialidades locales que preservan el legado Totonaca.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-10">
              {traditionalRestaurants.map((resto, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-zinc-900 rounded-[32px] border border-black/5 dark:border-white/5 flex flex-col overflow-hidden shadow-lg group hover:border-primary/30 transition-all"
                >
                  <Link href={`/sabor/${resto.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image 
                        src={resto.image} 
                        alt={resto.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <h3 className="font-black text-xl tracking-tight text-white mb-1 group-hover:text-primary transition-colors">{resto.name}</h3>
                        <div className="flex items-start gap-1.5 text-white/70 text-[10px]">
                          <MapPin className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1 leading-relaxed">{resto.address}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="p-4 flex gap-2 bg-white dark:bg-transparent">
                    <button 
                      onClick={() => openMap(resto.mapUrl)}
                      className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary py-3 rounded-xl flex items-center justify-center gap-2 font-black text-xs transition-all active:scale-95"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Ubicación
                    </button>
                    <button 
                      onClick={() => callNumber(resto.phone)}
                      className="flex-1 bg-green-500/10 hover:bg-green-500/20 text-green-600 py-3 rounded-xl flex items-center justify-center gap-2 font-black text-xs transition-all active:scale-95"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Llamar
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="alimentos"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="px-6"
          >
            <header className="pt-20 pb-8 flex flex-col gap-4">
              <button 
                onClick={() => setActiveSection("menu")}
                className="w-12 h-12 rounded-full bg-white dark:bg-white/5 border border-black/5 flex items-center justify-center text-primary shadow-sm active:scale-90 transition-all mb-4"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-4xl font-black tracking-tighter text-foreground">Alimentos y Bebidas</h1>
              <p className="text-gray-400 font-medium tracking-tight">Directorio completo de delicias gastronómicas.</p>
            </header>

            {/* CATEGORIES SCROLL */}
            <div className="flex gap-2 overflow-x-auto pb-8 -mx-6 px-6 no-scrollbar snap-x">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3.5 rounded-2xl font-black text-sm whitespace-nowrap transition-all snap-start ${
                    selectedCategory === cat 
                      ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105" 
                      : "bg-white dark:bg-white/5 text-gray-400 border border-black/5 hover:border-primary/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
              {filteredBusinesses.map((biz, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-zinc-900 rounded-[32px] border border-black/5 dark:border-white/5 flex flex-col overflow-hidden shadow-lg group hover:border-primary/30 transition-all"
                >
                  <Link href={`/sabor/${biz.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image 
                        src={biz.image} 
                        alt={biz.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute top-3 left-4 flex flex-wrap gap-1.5">
                        {biz.categories.map(c => (
                          <span key={c} className="text-[8px] uppercase font-black tracking-widest text-white bg-primary px-2.5 py-1 rounded-lg backdrop-blur-md bg-opacity-80">
                            {c}
                          </span>
                        ))}
                      </div>
                      <div className="absolute bottom-4 left-5 right-5">
                        <h3 className="font-black text-xl tracking-tight text-white mb-1 line-clamp-1 group-hover:text-primary transition-colors">{biz.name}</h3>
                        <div className="flex items-start gap-1.5 text-white/70 text-[9px]">
                          <MapPin className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{biz.address}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="p-4 flex gap-2 bg-white dark:bg-transparent">
                    <button 
                      onClick={() => openMap(biz.mapUrl)}
                      className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary py-3 rounded-xl flex items-center justify-center gap-2 font-black text-xs transition-all active:scale-95"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Ubicación
                    </button>
                    {biz.phone && (
                      <button 
                        onClick={() => callNumber(biz.phone)}
                        className="flex-1 bg-green-500/10 hover:bg-green-500/20 text-green-600 py-3 rounded-xl flex items-center justify-center gap-2 font-black text-xs transition-all active:scale-95"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Llamar
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

