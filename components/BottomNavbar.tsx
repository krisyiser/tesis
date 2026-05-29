"use client";

import { motion } from "framer-motion";
import { Compass, MapPin, Utensils, Calendar, Briefcase, Bed } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: Compass, label: "Inicio", href: "/" },
  { icon: MapPin, label: "Destinos", href: "/destinos" },
  { icon: Utensils, label: "Sabor", href: "/sabor" },
  { icon: Bed, label: "Hospedaje", href: "/hospedaje" },
  { icon: Calendar, label: "Eventos", href: "/eventos" },
  { icon: Briefcase, label: "Servicios", href: "/servicios" },
];

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-lg z-50">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full h-16 flex items-center justify-around px-4 shadow-2xl"
      >
        {navItems.map(({ icon: Icon, label, href }) => {
          const isActive = pathname === href;
          return (
            <Link key={label} href={href} className="relative py-2 px-3 group">
              <div className="flex flex-col items-center gap-1">
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  className={`${
                    isActive ? "text-primary" : "text-gray-400 dark:text-gray-500"
                  } transition-colors duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-tighter transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-1 w-1 h-1 bg-primary rounded-full"
                  />
                )}
              </div>
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}
