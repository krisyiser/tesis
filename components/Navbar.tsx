"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Map as MapIcon, Globe, Search } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Destinos", path: "/destinos" },
  { name: "Sabor", path: "/sabor" },
  { name: "Hospedaje", path: "/hospedaje" },
  { name: "Eventos", path: "/eventos" },
  { name: "Servicios", path: "/servicios" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black italic text-xl shadow-lg group-hover:scale-110 transition-transform">P</div>
          <div className="flex flex-col leading-none">
            <span className={`font-black text-xl tracking-tighter ${scrolled ? "text-foreground" : "text-white"}`}>PAPANTLA</span>
            <span className={`text-[8px] font-bold uppercase tracking-[0.3em] ${scrolled ? "text-gray-400" : "text-white/60"}`}>Turismo Premium</span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`text-sm font-bold tracking-tight transition-colors hover:text-primary ${
                pathname === item.path 
                  ? "text-primary" 
                  : scrolled ? "text-gray-600 dark:text-gray-300" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button className={`p-2 rounded-full transition-colors ${scrolled ? "hover:bg-gray-100 text-gray-600" : "hover:bg-white/10 text-white"}`}>
            <MapIcon className="w-5 h-5" />
          </button>
          <button className="px-6 py-2.5 bg-primary text-white rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
            Explora
          </button>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex md:hidden items-center gap-4">
          <button className={`p-2 rounded-full ${scrolled ? "text-gray-800" : "text-white"}`}>
            <MapIcon className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-full ${scrolled ? "text-gray-800" : "text-white"}`}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-black/5 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold p-2 ${pathname === item.path ? "text-primary" : "text-gray-600 dark:text-gray-300"}`}
              >
                {item.name}
              </Link>
            ))}
            <hr className="border-black/5" />
            <div className="flex gap-4">
               <button className="flex-1 py-4 bg-primary text-white rounded-2xl font-black uppercase text-xs tracking-widest">
                  Mapa Interactivo
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
