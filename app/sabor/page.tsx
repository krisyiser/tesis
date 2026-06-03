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
  },
  {
    name: "La Boca",
    address: "Aquiles Serdán 700, Barrio del Zapote, 93400 Papantla de Olarte, Ver.",
    phone: "784 842 5756",
  },
  {
    name: "Restaurante Totonaco",
    address: "José de Jesús, Lázaro Muñoz 104, El Naranjo, 93400 Papantla de Olarte, Ver.",
    phone: "784 112 2581",
  },
  {
    name: "Don Pope Restaurante",
    address: "Francisco I Madero 206, Barrio del San Juan, 93449 Papantla, Ver.",
    phone: "784 213 5289",
  },
  {
    name: "Restaurante Papantla Kachikin",
    address: "Chote - Papantla, Barrio del Zapote, 93400 Papantla de Olarte, Ver.",
    phone: "784 133 5190",
  },
  {
    name: "Centro Turístico Saberes Ancestrales de la Vainilla",
    address: "Revolución 116, Barrio del Zapote, 93400 Papantla de Olarte, Ver.",
    phone: "784 115 0077",
  },
  {
    name: "Restaurante Humo",
    address: "93400, Cjon 16 de Septiembre 104, Santa Cruz, 93400 Papantla, Ver.",
    phone: "784 842 0400",
  },
  {
    name: "Al Son del Chapala",
    address: "Reforma #100 altos, Centro, 93400 Papantla, Ver.",
    phone: "784 842 3517",
  },
  {
    name: "Plaza Pardo",
    address: "Juan Enríquez 105, Centro, 93449 Papantla de Olarte, Ver.",
    phone: "784 842 0059",
  },
  {
    name: "Restaurante la Parroquia de Papantla",
    address: "Cjon 16 de Septiembre 114, Barrio del Naranjo, 93400 Papantla de Olarte, Ver.",
    phone: "784 888 5904",
  },
  {
    name: "Restaurante Pipos",
    address: "Juan Enríquez 302-304, Barrio del Naranjo, 93400 Papantla de Olarte, Ver.",
    phone: "784 842 3932",
  },
];

const foodBusinesses = [
  { name: "Café Catedral", address: "Curato s/n, Barrio del Naranjo, 93400 Poza Rica de Hidalgo, Ver.", phone: "784 842 5317", categories: ["Cafetería"] },
  { name: "La choza de Lucy", address: "Cjon 16 de Septiembre centro 829, Barrio del Zapote, 93400 Papantla de Olarte, Ver.", phone: "784 842 4980", categories: ["Mariscos"] },
  { name: "Las Canastas", address: "José Azueta 105, Barrio del San Juan, 93400 Papantla de Olarte, Ver.", phone: "784 144 2168", categories: ["Comida Típica", "Antojitos"] },
  { name: "Zacahuil \"Perla\"", address: "Cjon 16 de Septiembre 907, Barrio del Zapote, 93400 Papantla de Olarte, Ver.", phone: "784 134 6603", categories: ["Comida Típica"] },
  { name: "SUSHI & DRINKS MR. ROLLO", address: "C. José de J. Núñez 18, Barrio del Naranjo, 93400 Papantla de Olarte, Ver.", phone: "", categories: ["Sushi y Comida Asiática", "Bares y Cantinas", "Snacks"] },
  { name: "Mexicanísimas", address: "Juan Enríquez 213, Barrio del Naranjo, 93400 Papantla de Olarte, Ver.", phone: "784 114 0955", categories: ["Comida Típica"] },
  { name: "Café Del Centro", address: "Artes 108, Barrio del San Juan, 93400 Papantla, Ver.", phone: "784 842 1163", categories: ["Cafetería", "Snacks", "Pizzería, Tortas, Hamburguesas"] },
  { name: "Me Perdonas ☕", address: "C. Rodolfo Curti 118, Santa Cruz, 93400 Papantla de Olarte, Ver.", phone: "784 121 8557", categories: ["Cafetería", "Snacks"] },
  { name: "Clandestino", address: "C. Andrés Q.R. 201, Barrio del Naranjo, 93400 Papantla de Olarte, Ver.", phone: "784 849 9423", categories: ["Pizzería, Tortas, Hamburguesas", "Snacks"] },
  { name: "La Jarochita", address: "Leandro Valle s/n, Centro, 93449 Papantla de Olarte, Ver.", phone: "784 134 4357", categories: ["Mariscos", "Bebidas y coctelería", "Bares y Cantinas"] },
  { name: "Tacos Rojos", address: "Barrio del San Juan, 93449 Papantla de Olarte, Ver.", phone: "", categories: ["Taquería"] },
  { name: "Taqueria Pozo del Zanjon", address: "C. Josefa Ortiz de Domínguez 101, Barrio del Zapote, 93400 Papantla de Olarte, Ver.", phone: "", categories: ["Taquería"] },
  { name: "Taqueria EL TIZON", address: "Veracruz - Poza Rica 505, Barrio del San Juan, 93400 Papantla de Olarte, Ver.", phone: "", categories: ["Taquería"] },
  { name: "Super Taquería \"El Gordo\"", address: "93400 calle Francisco I. Madero FRENTE A WALDOS, A UN LADO DE SUBODEGA FRENTE A WALDOS EL, Barrio del San Juan, 93400 Papantla, Ver.", phone: "784 108 7880", categories: ["Taquería"] },
  { name: "Taquería Serpet", address: "93400, Barrio del San Juan, 93400 Papantla, Ver.", phone: "", categories: ["Taquería"] },
  { name: "Antojitos Doña Carmen", address: "De La Libertad 308, Barrio del Zapote, 93440 Papantla de Olarte, Ver.", phone: "784 688 1200", categories: ["Antojitos"] },
  { name: "Las tortugas", address: "Centro Frente al Mural de Papantla, C. José de J. Núñez Col, Barrio del Naranjo, 93400 Papantla de Olarte, Ver.", phone: "784 121 4753", categories: ["Pizzería, Tortas, Hamburguesas"] },
];

const categories = [
  "Todos",
  "Comida Típica",
  "Antojitos",
  "Cafetería",
  "Sushi y Comida Asiática",
  "Taquería",
  "Pizzería, Tortas, Hamburguesas",
  "Mariscos",
  "Snacks",
  "Helados y Postres",
  "Bebidas y coctelería",
  "Bares y Cantinas",
];

export default function SaborPage() {
  const [activeSection, setActiveSection] = useState<"menu" | "sabores" | "alimentos">("menu");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredBusinesses = foodBusinesses.filter(biz => 
    selectedCategory === "Todos" || biz.categories.includes(selectedCategory)
  );

  const openMap = (address: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, "_blank");
  };

  const callNumber = (phone: string) => {
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
            <header className="px-6 pt-32 pb-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <Utensils className="w-6 h-6" />
                </div>
                <h1 className="text-3xl font-black tracking-tighter text-foreground">Sabor</h1>
              </div>
              <p className="text-gray-400 font-medium tracking-tight">
                Gastronomía Totonaca: El perfume de la vainilla en cada bocado.
              </p>
            </header>

            <section className="px-6 flex flex-col gap-6">
              <h2 className="text-lg font-bold tracking-tight">Platillos Tradicionales</h2>
              <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar snap-x">
                {traditionalMenu.map((dish, i) => (
                  <div key={i} className="min-w-[220px] snap-start">
                    <IOSCard title={dish.title} subtitle={dish.sub} imageUrl={dish.img} />
                  </div>
                ))}
              </div>
            </section>

            <section className="px-6 mt-10 grid grid-cols-1 gap-4">
              <motion.button 
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveSection("sabores")}
                className="bg-primary p-6 rounded-4xl flex items-center gap-5 shadow-2xl shadow-primary/20 text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-start overflow-hidden">
                  <span className="text-white font-black text-lg tracking-tight">Sabores Papantecos</span>
                  <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Restaurantes Típicos</span>
                </div>
                <ChevronRight className="ml-auto text-white flex-shrink-0" />
              </motion.button>

              <motion.button 
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveSection("alimentos")}
                className="bg-white dark:bg-white/5 p-6 rounded-4xl border border-black/5 flex items-center gap-5 shadow-sm text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center text-primary">
                  <Pizza className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-start overflow-hidden">
                  <span className="font-black text-lg tracking-tight">Alimentos y bebidas</span>
                  <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Directorio de Negocios</span>
                </div>
                <ChevronRight className="ml-auto text-gray-300 flex-shrink-0" />
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
            <header className="pt-32 pb-10 flex flex-col gap-4">
              <button 
                onClick={() => setActiveSection("menu")}
                className="flex items-center gap-2 text-primary font-bold mb-2 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Volver</span>
              </button>
              <h1 className="text-3xl font-black tracking-tighter text-foreground">Sabores Papantecos</h1>
              <p className="text-gray-400 font-medium tracking-tight">La mejor comida tradicional en el corazón de Papantla.</p>
            </header>

            <div className="flex flex-col gap-4">
              {traditionalRestaurants.map((resto, i) => (
                <div 
                  key={i} 
                  className="bg-white dark:bg-white/5 p-6 rounded-4xl border border-black/5 flex flex-col gap-4 shadow-sm"
                >
                  <div className="flex flex-col">
                    <h3 className="font-black text-xl tracking-tight">{resto.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-start gap-2">
                       <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                       {resto.address}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => openMap(resto.address)}
                      className="flex-1 bg-primary/10 text-primary py-3 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm"
                    >
                      <MapPin className="w-4 h-4" />
                      Ubicación
                    </button>
                    <button 
                      onClick={() => callNumber(resto.phone)}
                      className="flex-1 bg-secondary/10 text-secondary py-3 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      Llamar
                    </button>
                  </div>
                </div>
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
            <header className="pt-32 pb-10 flex flex-col gap-4">
              <button 
                onClick={() => setActiveSection("menu")}
                className="flex items-center gap-2 text-primary font-bold mb-2 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Volver</span>
              </button>
              <h1 className="text-3xl font-black tracking-tighter text-foreground">Alimentos y Bebidas</h1>
              <p className="text-gray-400 font-medium tracking-tight">Encuentra todo tipo de delicias y lugares para disfrutar.</p>
            </header>

            {/* CATEGORIES SCROLL */}
            <div className="flex gap-2 overflow-x-auto pb-6 -mx-6 px-6 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-2xl font-bold text-sm whitespace-nowrap transition-all ${
                    selectedCategory === cat 
                      ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105" 
                      : "bg-white dark:bg-white/5 text-gray-400 border border-black/5 hover:border-primary/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {filteredBusinesses.map((biz, i) => (
                <div 
                  key={i} 
                  className="bg-white dark:bg-white/5 p-6 rounded-4xl border border-black/5 flex flex-col gap-4 shadow-sm"
                >
                  <div className="flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {biz.categories.map(c => (
                        <span key={c} className="text-[10px] uppercase font-black tracking-widest text-primary/60 bg-primary/5 px-2 py-1 rounded-md">
                          {c}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-black text-xl tracking-tight">{biz.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-start gap-2">
                       <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                       {biz.address}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => openMap(biz.address)}
                      className="flex-1 bg-primary/10 text-primary py-3 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm"
                    >
                      <MapPin className="w-4 h-4" />
                      Ubicación
                    </button>
                    {biz.phone && (
                      <button 
                        onClick={() => callNumber(biz.phone)}
                        className="flex-1 bg-secondary/10 text-secondary py-3 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        Llamar
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
