"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, User, Map as MapIcon, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = (path: string) => `
    text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group
    ${pathname === path ? "text-primary" : "text-white dark:text-white/80 hover:text-primary dark:hover:text-primary"}
  `;

  if (!mounted) {
    return null;
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-white/80 dark:bg-black/95 backdrop-blur-xl py-4 shadow-2xl border-b border-black/5 dark:border-white/5" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 flex items-center justify-between">
        
        {/* LEFT NAV items */}
        <div className="hidden lg:flex items-center gap-8 flex-1">
          <Link href="/" className={navItemClass("/")}>Inicio</Link>
          <Link href="/destinos" className={navItemClass("/destinos")}>Destinos</Link>
          <Link href="/eventos" className={navItemClass("/eventos")}>Eventos</Link>
          <Link href="/sabor" className={navItemClass("/sabor")}>Sabor</Link>
        </div>

        {/* CENTER LOGO */}
        <Link href="/" className="flex flex-col items-center px-10 group">
          <motion.div 
            animate={scrolled ? { scale: 0.8 } : { scale: 1 }}
            className="flex flex-col items-center"
          >
            <span className={`text-3xl font-black tracking-[0.2em] leading-none text-center ${scrolled ? "text-black dark:text-white" : "text-white"}`}>PAPANTLA</span>
            <div className="flex items-center gap-2 mt-1">
               <div className="h-[1px] w-4 bg-primary/40" />
               <span className="text-[7px] font-bold text-primary uppercase tracking-[0.4em] leading-none whitespace-nowrap">La Ciudad que Perfuma</span>
               <div className="h-[1px] w-4 bg-primary/40" />
            </div>
          </motion.div>
        </Link>

        {/* RIGHT NAV items */}
        <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
          <Link href="/hospedaje" className={navItemClass("/hospedaje")}>Hospedaje</Link>
          <Link href="/servicios" className={navItemClass("/servicios")}>Servicios</Link>
          <Link href="/mapa" className={navItemClass("/mapa")}>Mapa</Link>
          
          <div className="h-4 w-[1px] bg-white/10 mx-2" />
          
          <div className="flex items-center gap-5">
            <button className={`${scrolled ? "text-black dark:text-white" : "text-white"} text-[10px] font-black uppercase tracking-widest flex items-center gap-1 hover:text-primary transition-colors`}>
              ES <ChevronDown className="w-3 h-3" />
            </button>
            <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`${scrolled ? "text-black/60 dark:text-white/60" : "text-white/60"} hover:text-primary transition-all hover:scale-110`}
            >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button className={`${scrolled ? "text-black/60 dark:text-white/60" : "text-white/60"} hover:text-primary transition-all hover:scale-110`}><User className="w-4 h-4" /></button>
          </div>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <div className="flex lg:hidden items-center gap-4">
           <button 
             onClick={() => setIsOpen(!isOpen)}
             className={`${scrolled ? "text-black" : "text-white"} p-2 hover:bg-white/10 rounded-full transition-colors`}
           >
             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-black/98 backdrop-blur-3xl border-t border-black/5 dark:border-white/10 p-10 flex flex-col items-center gap-8 lg:hidden shadow-2xl"
          >
            {[
              { name: "Inicio", path: "/" },
              { name: "Destinos", path: "/destinos" },
              { name: "Eventos", path: "/eventos" },
              { name: "Sabor", path: "/sabor" },
              { name: "Hospedaje", path: "/hospedaje" },
              { name: "Servicios", path: "/servicios" },
              { name: "Mapa", path: "/mapa" },
            ].map((item) => (
              <Link 
                key={item.path} 
                href={item.path} 
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-black uppercase tracking-[0.2em] ${pathname === item.path ? "text-primary" : "text-black dark:text-white"}`}
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
