"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on first load per session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (!hasSeenSplash) {
      setIsVisible(true);
      sessionStorage.setItem("hasSeenSplash", "true");
      
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-8"
          >
             {/* STYLIZED LOGO (Based on Image D descriptions) */}
             <div className="relative w-32 h-32">
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0"
                >
                   {/* Geometric petals */}
                   {[...Array(8)].map((_, i) => (
                      <div 
                         key={i} 
                         className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-12 rounded-full opacity-60"
                         style={{ 
                            transform: `rotate(${i * 45}deg) translateY(-20px)`,
                            backgroundColor: ['#8B2635', '#D4A373', '#E9C46A', '#2A9D8F'][i % 4]
                         }}
                      />
                   ))}
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center bg-black rounded-full border-2 border-primary shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                   <span className="text-4xl font-black text-white italic">P</span>
                </div>
             </div>

             <div className="flex flex-col items-center gap-2">
                <motion.h1 
                   initial={{ letterSpacing: "0.2em", opacity: 0 }}
                   animate={{ letterSpacing: "0.8em", opacity: 1 }}
                   transition={{ duration: 1.5, delay: 0.5 }}
                   className="text-4xl font-black text-white uppercase tracking-[0.8em] mr-[-0.8em]"
                >
                   PAPANTLA
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1.2 }}
                   className="text-primary font-bold uppercase text-[10px] tracking-[0.4em] italic"
                >
                   La Ciudad que Perfuma
                </motion.p>
             </div>
          </motion.div>

          {/* Loading Bar */}
          <div className="absolute bottom-20 w-48 h-[1px] bg-white/10 overflow-hidden">
             <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-primary shadow-[0_0_10px_#8B2635]"
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
