"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, User, ChevronRight } from "lucide-react";
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

  // Ensure scroll to top on navigation and close menu
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  const isHome = pathname === "/";
  const showGlass = !isHome || scrolled;
  const themeIcon = mounted && theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />;

  const navItemClass = (path: string) => `
    text-[11px] font-black uppercase tracking-[0.15em] transition-all relative group
    ${pathname === path ? "text-primary" : showGlass ? "text-foreground" : "text-white"}
    hover:text-primary
  `;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 overflow-visible ${
          showGlass 
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-2xl py-3 border-b border-black/5 dark:border-white/10 shadow-xl" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between relative">
          
          {/* THEME TOGGLE (MOBILE) */}
          <div className="flex lg:hidden flex-1">
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-full transition-all ${showGlass ? "text-foreground bg-black/5 dark:bg-white/10" : "text-white bg-white/10"}`}
            >
              {themeIcon}
            </button>
          </div>

          {/* DESKTOP NAV LEFT */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            <Link href="/" className={navItemClass("/")}>Inicio</Link>
            <Link href="/destinos" className={navItemClass("/destinos")}>Destinos</Link>
            <Link href="/sabor" className={navItemClass("/sabor")}>Sabor</Link>
          </div>

          {/* LOGO */}
          <div className="flex flex-col items-center">
            <Link href="/" className="flex flex-col items-center">
              <span className={`text-2xl md:text-3xl font-black tracking-tighter leading-none transition-colors duration-500 ${showGlass ? "text-foreground" : "text-white"}`}>
                PAPANTLA
              </span>
              <span className="text-[9px] font-bold text-primary uppercase tracking-[0.15em] mt-1">La Ciudad que Perfuma</span>
            </Link>
          </div>

          {/* DESKTOP NAV RIGHT */}
          <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
            <Link href="/hospedaje" className={navItemClass("/hospedaje")}>Hospedaje</Link>
            <Link href="/eventos" className={navItemClass("/eventos")}>Eventos</Link>
            <div className="flex items-center gap-3 ml-4">
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${showGlass ? "bg-black/5 dark:bg-white/10 text-foreground" : "bg-white/10 text-white"}`}
              >
                {themeIcon}
              </button>
            </div>
          </div>

          {/* MENU TOGGLE (MOBILE) - ALWAYS ON TOP */}
          <div className="flex lg:hidden flex-1 justify-end">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full bg-primary text-white shadow-lg shadow-primary/20 relative z-[10001] active:scale-90 transition-transform"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-white/95 dark:bg-black/95 backdrop-blur-3xl flex flex-col p-8 pt-32"
          >
            <div className="flex flex-col gap-2 max-w-sm mx-auto w-full">
              {[
                { name: "Inicio", path: "/" },
                { name: "Destinos", path: "/destinos" },
                { name: "Sabor", path: "/sabor" },
                { name: "Hospedaje", path: "/hospedaje" },
                { name: "Eventos", path: "/eventos" },
                { name: "Servicios", path: "/servicios" },
              ].map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    href={item.path}
                    className={`flex items-center justify-between p-5 rounded-[24px] transition-all ${pathname === item.path ? "bg-primary text-white" : "hover:bg-primary/10 text-foreground"}`}
                  >
                    <span className="text-lg font-black uppercase tracking-widest">{item.name}</span>
                    <ChevronRight className={`w-5 h-5 ${pathname === item.path ? "text-white" : "text-primary"}`} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
