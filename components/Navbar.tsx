"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, User, Map as MapIcon } from "lucide-react";
import { usePathname } from "next/navigation";

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
        scrolled ? "bg-black/90 backdrop-blur-xl py-4 shadow-lg" : "bg-black/40 py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        
        {/* LEFT NAV items (Desktop) */}
        <div className="hidden md:flex items-center gap-10 flex-1">
          <Link href="/" className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${pathname === '/' ? "text-primary" : "text-white hover:text-primary"}`}>Inicio</Link>
          <Link href="/eventos" className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${pathname === '/eventos' ? "text-primary" : "text-white hover:text-primary"}`}>Eventos</Link>
          <Link href="/sabor" className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${pathname === '/sabor' ? "text-primary" : "text-white hover:text-primary"}`}>Sabor</Link>
        </div>

        {/* CENTER LOGO */}
        <Link href="/" className="flex flex-col items-center flex-1">
          <span className="text-2xl font-black text-white tracking-widest leading-none">PAPANTLA</span>
          <span className="text-[6px] font-bold text-primary uppercase tracking-[0.3em] mt-1 leading-none">La Ciudad que Perfuma</span>
        </Link>

        {/* RIGHT NAV items (Desktop) */}
        <div className="hidden md:flex items-center justify-end gap-8 flex-1">
          <Link href="/hospedaje" className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${pathname === '/hospedaje' ? "text-primary" : "text-white hover:text-primary"}`}>Hoteles</Link>
          <Link href="/mapa" className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${pathname === '/mapa' ? "text-primary" : "text-white hover:text-primary"}`}>Mapa</Link>
          
          <div className="h-4 w-[1px] bg-white/20 mx-2" />
          
          <button className="text-white text-[10px] font-black uppercase tracking-widest">ES</button>
          <button className="text-white opacity-60 hover:opacity-100 transition-opacity"><Sun className="w-4 h-4" /></button>
          <button className="text-white opacity-60 hover:opacity-100 transition-opacity"><User className="w-4 h-4" /></button>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <div className="flex md:hidden items-center gap-4">
           <button 
             onClick={() => setIsOpen(!isOpen)}
             className="text-white p-2"
           >
             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
           </button>
        </div>
      </div>

      {/* MOBILE MENU (Fallback if BottomNavbar isn't enough) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-3xl border-t border-white/5 p-8 flex flex-col gap-6 md:hidden"
          >
            {[
              { name: "Inicio", path: "/" },
              { name: "Destinos", path: "/destinos" },
              { name: "Sabor", path: "/sabor" },
              { name: "Hospedaje", path: "/hospedaje" },
              { name: "Eventos", path: "/eventos" },
              { name: "Servicios", path: "/servicios" },
            ].map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                onClick={() => setIsOpen(false)}
                className="text-white text-xl font-black uppercase tracking-widest text-center"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
