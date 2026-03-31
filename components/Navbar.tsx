"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, UtensilsCrossed, Hotel, Map as MapIcon, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", icon: Home, path: "/" },
  { label: "Eventos", icon: Calendar, path: "/events" },
  { label: "Sabor", icon: UtensilsCrossed, path: "/gastronomy" },
  { label: "Hoteles", icon: Hotel, path: "/lodging" },
  { label: "Mapa", icon: MapIcon, path: "/map" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Top Desktop Nav */}
      <header className="hidden md:flex fixed top-0 w-full z-40 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center justify-between h-16 w-full px-6">
          <Link href="/" className="font-bold text-xl text-[#F16B24] tracking-tight">
            Papantla.pwa
          </Link>
          <nav className="flex gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-semibold transition-all",
                  pathname === item.path 
                    ? "bg-orange-50 text-[#F16B24] border border-orange-100" 
                    : "text-gray-500 hover:text-[#F16B24] hover:bg-orange-50/50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Title Header for Mobile (Image-like) */}
      <div className="md:hidden sticky top-0 bg-[#F8F8F8] z-30 px-6 py-4 flex items-center justify-between border-b border-gray-200/50 backdrop-blur-lg">
        <h1 className="text-xl font-bold text-gray-900">
          {navItems.find(i => i.path === pathname)?.label === 'Inicio' ? 'Explora Papantla' : 
           navItems.find(i => i.path === pathname)?.label}
        </h1>
        <div className="flex gap-4">
          <Search className="w-5 h-5 text-gray-400" />
          <MapIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Bottom Nav for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-6 flex justify-between h-20 items-center shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.path} 
              href={item.path} 
              className={cn(
                "flex flex-col items-center gap-1 transition-all",
                isActive ? "text-[#F16B24] scale-110" : "text-gray-400"
              )}
            >
              <item.icon className={cn("w-6 h-6", isActive ? "stroke-[2.5px]" : "stroke-2")} />
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
