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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const useAdaptive = !isHome || scrolled;

  const navItemClass = (path: string) => `
    text-[11px] font-black uppercase tracking-[0.15em] transition-all relative group
    ${pathname === path ? "text-primary" : useAdaptive ? "text-foreground" : "text-white"}
    hover:text-primary dark:hover:text-primary
  `;

  const themeIcon = mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-700 ${
        scrolled 
          ? "bg-white/10 dark:bg-black/10 backdrop-blur-[24px] py-3 shadow-2xl border-b border-white/20 dark:border-white/10" 
          : isHome ? "bg-transparent py-6" : "bg-white/40 dark:bg-black/40 backdrop-blur-xl py-3 border-b border-black/5 dark:border-white/10 shadow-lg shadow-black/5"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between relative">
        
        {/* MOBILE: LEFT - Dark Mode Button */}
        <div className="flex lg:hidden items-center">
            <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2 rounded-full transition-all ${useAdaptive ? "text-foreground bg-black/5 dark:bg-white/10" : "text-white bg-white/10"}`}
            >
                {themeIcon}
            </button>
        </div>

        {/* LEFT NAV items (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 flex-1">
          <Link href="/" className={navItemClass("/")}>Inicio</Link>
          <Link href="/destinos" className={navItemClass("/destinos")}>Destinos</Link>
          <Link href="/eventos" className={navItemClass("/eventos")}>Eventos</Link>
          <Link href="/sabor" className={navItemClass("/sabor")}>Sabor</Link>
        </div>

        {/* CENTER LOGO (Mobile & Desktop) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <Link href="/" className="flex flex-col items-center group">
                <motion.div 
                    animate={scrolled ? { scale: 0.85 } : { scale: 1 }}
                    className="flex flex-col items-center"
                >
                    <span className={`text-2xl md:text-3xl font-black tracking-tighter leading-none text-center transition-colors duration-500 ${useAdaptive ? "text-foreground" : "text-white"}`}>
                        PAPANTLA
                    </span>
                    <div className="flex items-center gap-1 mt-0.5 opacity-80">
                      <div className="h-[1px] w-1.5 bg-primary/40" />
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[0.12em]">La Ciudad que Perfuma</span>
                      <div className="h-[1px] w-1.5 bg-primary/40" />
                    </div>
                </motion.div>
            </Link>
        </div>

        {/* RIGHT NAV items (Desktop) */}
        <div className="hidden lg:flex items-center justify-end gap-6 flex-1">
          <Link href="/hospedaje" className={navItemClass("/hospedaje")}>Hospedaje</Link>
          <Link href="/servicios" className={navItemClass("/servicios")}>Servicios</Link>
          <Link href="/mapa" className={navItemClass("/mapa")}>Mapa</Link>
          
          <div className="h-3 w-[1px] bg-black/10 dark:bg-white/10 mx-2" />
          
          <div className="flex items-center gap-3">
            <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${useAdaptive ? "bg-black/5 dark:bg-white/5 text-foreground" : "bg-white/10 text-white"}`}
            >
                {themeIcon}
            </button>
            <button className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${useAdaptive ? "bg-black/5 dark:bg-white/10 text-foreground" : "bg-white/10 text-white"}`}>
              <User className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* MOBILE: RIGHT - Menu Button */}
        <div className="flex lg:hidden items-center">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full transition-all relative z-[10001] ${isOpen ? "bg-primary text-white" : useAdaptive ? "text-foreground bg-black/5 dark:bg-white/10" : "text-white bg-white/10"}`}
            >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10000] p-4 pt-24 pb-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full h-full bg-white/5 dark:bg-white/5 backdrop-blur-[32px] saturate-[180%] rounded-[40px] shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden flex flex-col p-8"
            >
              <div className="flex flex-col gap-4 overflow-y-auto no-scrollbar py-6">
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
                    className="flex items-center justify-between py-3 group border-b border-black/5 dark:border-white/5 last:border-0"
                  >
                    <span className={`text-[13px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${pathname === item.path ? "text-primary px-3" : "text-foreground opacity-70 group-active:text-primary group-active:opacity-100"}`}>
                      {item.name}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${pathname === item.path ? "bg-primary text-white" : "bg-black/5 dark:bg-white/5"}`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/5 grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 p-4 bg-primary text-white rounded-[24px] font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/20">
                     <User className="w-4 h-4" /> Perfil
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="flex-1 flex items-center justify-center gap-2 p-4 bg-white/20 dark:bg-white/5 backdrop-blur-md text-foreground border border-black/5 dark:border-white/10 rounded-[24px] font-black text-[10px] uppercase tracking-widest"
                  >
                    Cerrar
                  </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}


