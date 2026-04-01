"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, UtensilsCrossed, Hotel, Map as MapIcon, Search, Globe, Moon, Sun, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Inicio", icon: Home, path: "/" },
  { label: "Eventos", icon: Calendar, path: "/events" },
  { label: "Sabor", icon: UtensilsCrossed, path: "/gastronomy" },
  { label: "Hoteles", icon: Hotel, path: "/lodging" },
  { label: "Mapa", icon: MapIcon, path: "/map" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState("ES");

  // Dark Mode Toggle
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark" || (!savedMode && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/* Top Desktop Nav (Visit Puebla Style) */}
      <header className="hidden md:flex fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 w-full px-10">
          
          {/* Left Links */}
          <nav className="flex gap-8 items-center flex-1">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-primary",
                  pathname === item.path ? "text-primary" : "text-gray-500 dark:text-gray-400"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Centered Logo */}
          <Link href="/" className="flex flex-col items-center group">
            <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white uppercase leading-none">
              Papantla
            </span>
            <span className="text-[8px] font-bold text-primary tracking-[0.4em] uppercase mt-1">
              La Ciudad que Perfuma
            </span>
          </Link>

          {/* Right Links & Tools */}
          <div className="flex items-center justify-end gap-8 flex-1">
            <nav className="flex gap-8 items-center">
              {navItems.slice(3).map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-primary",
                    pathname === item.path ? "text-primary" : "text-gray-500 dark:text-gray-400"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-6 pl-8 border-l border-gray-200 dark:border-white/10">
              <button 
                onClick={() => setLang(lang === "ES" ? "EN" : "ES")}
                className="text-[10px] font-black hover:text-primary dark:text-white transition-colors"
              >
                {lang}
              </button>
              
              <button onClick={toggleDarkMode} className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <Link href="/auth" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                <User className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Title Header for Mobile */}
      <div className="md:hidden sticky top-0 bg-white/80 dark:bg-black/80 z-40 px-6 py-4 flex items-center justify-between border-b border-gray-200/50 dark:border-white/10 backdrop-blur-lg">
        <h1 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight">
          {navItems.find(i => i.path === pathname)?.label === 'Inicio' ? 'Papantla' : 
           navItems.find(i => i.path === pathname)?.label}
        </h1>
        <div className="flex gap-4 items-center">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-gray-400" />}
          </button>
          <User className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Bottom Nav for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 border-t border-gray-200 dark:border-white/10 px-6 flex justify-between h-20 items-center shadow-2xl backdrop-blur-xl">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.path} 
              href={item.path} 
              className={cn(
                "flex flex-col items-center gap-1 transition-all",
                isActive ? "text-primary scale-110" : "text-gray-400"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "stroke-[2.5px]" : "stroke-2")} />
              <span className="text-[8px] font-black uppercase tracking-wider">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

