"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Map, Bed, Calendar, Utensils } from "lucide-react";

const items = [
  { name: "Inicio", path: "/", icon: Home },
  { name: "Destinos", path: "/destinos", icon: Compass },
  { name: "Sabor", path: "/sabor", icon: Utensils },
  { name: "Hospedaje", path: "/hospedaje", icon: Bed },
  { name: "Eventos", path: "/eventos", icon: Calendar },
];

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
      <div className="bg-black/90 backdrop-blur-2xl rounded-full px-6 py-3 flex items-center justify-between shadow-2xl border border-white/10">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          return (
            <Link key={item.path} href={item.path} className="relative flex flex-col items-center gap-1">
              <div className={`p-2 rounded-xl transition-all ${isActive ? "text-primary scale-110" : "text-gray-400"}`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className={`text-[8px] font-bold uppercase tracking-tighter ${isActive ? "text-primary" : "text-gray-500"}`}>
                {item.name}
              </span>
              {isActive && (
                <div className="absolute -top-1 left-1.2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary-rgb),0.8)]" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
