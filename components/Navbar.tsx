"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, User, ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const useAdaptive = !isHome || scrolled;

  const navItemClass = (path: string) => `
    text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group
    ${pathname === path ? "text-primary" : useAdaptive ? "text-foreground" : "text-white"}
    hover:text-primary dark:hover:text-primary
  `;

  if (!mounted) return null;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-3xl py-4 shadow-2xl border-b border-black/5 dark:border-white/5" 
          : isHome ? "bg-transparent py-8" : "bg-white/50 dark:bg-black/50 backdrop-blur-xl py-4 border-b border-black/5 dark:border-white/5 shadow-lg shadow-black/5"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between relative">
        
        {/* MOBILE: LEFT - Dark Mode Button */}
        <div className="flex lg:hidden items-center">
            <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2.5 rounded-full transition-all ${useAdaptive ? "text-foreground bg-black/5 dark:bg-white/10" : "text-white bg-white/10"}`}
            >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
        </div>

        {/* LEFT NAV items (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 flex-1">
          <Link href="/" className={navItemClass("/")}>Inicio</Link>
          <Link href="/destinos" className={navItemClass("/destinos")}>Destinos</Link>
          <Link href="/eventos" className={navItemClass("/eventos")}>Eventos</Link>
          <Link href="/sabor" className={navItemClass("/sabor")}>Sabor</Link>
        </div>

        {/* CENTER LOGO (Mobile & Desktop) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <Link href="/" className="flex flex-col items-center group">
                <motion.div 
                    animate={scrolled ? { scale: 0.8 } : { scale: 1 }}
                    className="flex flex-col items-center"
                >
                    {/* tracking-tighter joins text more as requested */}
                    <span className={`text-2xl md:text-3xl font-black tracking-tighter leading-none text-center transition-colors duration-500 ${useAdaptive ? "text-foreground" : "text-white"} ${!useAdaptive && "text-shadow-premium"}`}>
                        PAPANTLA
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="h-[1px] w-3 bg-primary/40" />
                    <span className="text-[6px] md:text-[7px] font-bold text-primary uppercase tracking-[0.2em] leading-none whitespace-nowrap italic">La Ciudad que Perfuma</span>
                    <div className="h-[1px] w-3 bg-primary/40" />
                    </div>
                </motion.div>
            </Link>
        </div>

        {/* RIGHT NAV items (Desktop) */}
        <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
          <Link href="/hospedaje" className={navItemClass("/hospedaje")}>Hospedaje</Link>
          <Link href="/servicios" className={navItemClass("/servicios")}>Servicios</Link>
          <Link href="/mapa" className={navItemClass("/mapa")}>Mapa</Link>
          
          <div className="h-4 w-[1px] bg-white/10 dark:bg-white/5 mx-2" />
          
          <div className="flex items-center gap-4">
            <button className={`${useAdaptive ? "text-foreground" : "text-white"} text-[10px] font-black uppercase tracking-widest flex items-center gap-1 hover:text-primary transition-colors`}>
              ES <ChevronDown className="w-3 h-3" />
            </button>
            <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all text-foreground ${useAdaptive ? "bg-black/5 dark:bg-white/5" : "bg-white/10 text-white"}`}
            >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button className={`w-9 h-9 rounded-full flex items-center justify-center transition-all text-foreground ${useAdaptive ? "bg-black/5 dark:bg-white/10" : "bg-white/10 text-white"}`}>
              <User className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* MOBILE: RIGHT - Menu Button */}
        <div className="flex lg:hidden items-center">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-full transition-all relative z-[80] ${isOpen ? "text-black dark:text-white" : useAdaptive ? "text-foreground bg-black/5 dark:bg-white/10" : "text-white bg-white/10"}`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY - Minimalist & Transparent */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-white/10 dark:bg-black/30 backdrop-blur-[40px] flex flex-col p-8 pt-32 lg:hidden"
          >
            <div className="flex flex-col gap-8 overflow-y-auto no-scrollbar pb-10">
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
                  className="flex items-center justify-between py-1 group"
                >
                  {/* Minimalist font weight and tracking */}
                  <span className={`text-5xl font-light tracking-tighter transition-all ${pathname === item.path ? "text-primary font-medium" : "text-foreground group-hover:text-primary"}`}>
                    {item.name}
                  </span>
                  <ChevronRight className={`w-6 h-6 ${pathname === item.path ? "text-primary" : "text-foreground/10"}`} />
                </Link>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-2 gap-4 pb-12 pt-8 border-t border-black/5 dark:border-white/5">
                <button className="flex items-center justify-center gap-2 p-5 bg-black dark:bg-white text-white dark:text-black rounded-[30px] font-black text-[9px] uppercase tracking-widest shadow-xl">
                   <User className="w-4 h-4" /> Perfil
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 p-5 bg-white/20 dark:bg-white/10 text-foreground border border-black/5 dark:border-white/5 rounded-[30px] font-black text-[9px] uppercase tracking-widest"
                >
                  Cerrar Menú
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
