"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, User, Map as MapIcon, ChevronDown, Sparkles, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Force scrolled style if not on Home page to avoid invisible text over white background
  const isHome = pathname === "/";
  const isScrolledStyle = scrolled || !isHome;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // Small threshold for scroll
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); // Re-run on path change

  const navItemClass = (path: string) => `
    text-[10px] font-black uppercase tracking-[0.2em] transition-all relative group
    ${pathname === path ? "text-primary" : isScrolledStyle ? "text-black dark:text-white" : "text-white"}
    hover:text-primary dark:hover:text-primary transition-colors duration-300
  `;

  if (!mounted) return null;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolledStyle 
          ? "bg-white/80 dark:bg-black/90 backdrop-blur-3xl py-4 shadow-2xl border-b border-black/5 dark:border-white/5" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between relative">
        
        {/* LEFT NAV items (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 flex-1">
          <Link href="/" className={navItemClass("/")}>Inicio</Link>
          <Link href="/destinos" className={navItemClass("/destinos")}>Destinos</Link>
          <Link href="/eventos" className={navItemClass("/eventos")}>Eventos</Link>
          <Link href="/sabor" className={navItemClass("/sabor")}>Sabor</Link>
        </div>

        {/* CENTER LOGO */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center">
            <Link href="/" className="flex flex-col items-center group">
                <motion.div 
                    animate={isScrolledStyle ? { scale: 0.8 } : { scale: 1 }}
                    className="flex flex-col items-center"
                >
                    <span className={`text-2xl md:text-3xl font-black tracking-[0.2em] leading-none text-center transition-colors duration-500 ${isScrolledStyle ? "text-black dark:text-white" : "text-white"}`}>PAPANTLA</span>
                    <div className="flex items-center gap-2 mt-1">
                    <div className="h-[1px] w-4 bg-primary/40" />
                    <span className="text-[6px] md:text-[7px] font-bold text-primary uppercase tracking-[0.4em] leading-none whitespace-nowrap italic">La Ciudad que Perfuma</span>
                    <div className="h-[1px] w-4 bg-primary/40" />
                    </div>
                </motion.div>
            </Link>
        </div>

        {/* RIGHT NAV items (Desktop) */}
        <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
          <Link href="/hospedaje" className={navItemClass("/hospedaje")}>Hospedaje</Link>
          <Link href="/servicios" className={navItemClass("/servicios")}>Servicios</Link>
          <Link href="/mapa" className={navItemClass("/mapa")}>Mapa</Link>
          
          <div className="h-4 w-[1px] bg-black/10 dark:bg-white/10 mx-2" />
          
          <div className="flex items-center gap-4">
            <button className={`${isScrolledStyle ? "text-black dark:text-white" : "text-white"} text-[10px] font-black uppercase tracking-widest flex items-center gap-1 hover:text-primary transition-colors`}>
              ES <ChevronDown className="w-3 h-3" />
            </button>
            <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${isScrolledStyle ? "bg-black/5 dark:bg-white/5 text-black dark:text-white" : "bg-white/10 text-white"} hover:bg-primary hover:text-white`}
            >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${isScrolledStyle ? "bg-black/5 dark:bg-white/5 text-black dark:text-white" : "bg-white/10 text-white"} hover:bg-primary hover:text-white`}>
              <User className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* MOBILE MENU CONTROLS */}
        <div className="flex lg:hidden items-center gap-2">
            <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2.5 rounded-full transition-all ${isScrolledStyle ? "text-black bg-black/5 dark:text-white dark:bg-white/10" : "text-white bg-white/10"}`}
            >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-full transition-all ${isScrolledStyle ? "text-black bg-black/5 dark:text-white dark:bg-white/10" : "text-white bg-white/10"}`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="fixed inset-0 z-[70] bg-white/80 dark:bg-black/90 backdrop-blur-[40px] flex flex-col p-8 pt-24 lg:hidden transition-colors duration-500"
          >
            <div className="flex flex-col gap-6 overflow-y-auto no-scrollbar pb-10">
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
                  className="flex items-center justify-between py-2 group"
                >
                  <span className={`text-4xl font-black uppercase tracking-tight transition-all duration-300 ${pathname === item.path ? "text-primary italic translate-x-2" : "text-black dark:text-white"}`}>
                    {item.name}
                  </span>
                  <ChevronRight className={`w-6 h-6 transition-transform duration-300 ${pathname === item.path ? "text-primary translate-x-2" : "text-black/10 dark:text-white/10 group-hover:translate-x-1"}`} />
                </Link>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-2 gap-4 pb-12 pt-8 border-t border-black/5 dark:border-white/5">
                <button className="flex items-center justify-center gap-2 p-5 bg-black dark:bg-white text-white dark:text-black rounded-3xl font-black text-[9px] uppercase tracking-widest shadow-xl">
                   <User className="w-4 h-4" /> Perfil
                </button>
                <button 
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center justify-center gap-2 p-5 bg-gray-100 dark:bg-white/10 text-black dark:text-white rounded-3xl font-black text-[9px] uppercase tracking-widest"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />} {theme === "dark" ? "Claro" : "Oscuro"}
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
