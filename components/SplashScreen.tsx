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
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FDFBF7] dark:bg-[#0A0A0A]"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-10"
          >
             {/* IMAGE E - Logo/Church Illustration */}
             <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl">
                <motion.div
                   initial={{ y: 20, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ duration: 1.5, delay: 0.5 }}
                   className="w-full h-full relative"
                >
                   <img 
                      src="/splash-logo.jpg" 
                      alt="Papantla Logo" 
                      className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal rounded-full"
                   />
                </motion.div>
                
                {/* Decorative particles */}
                <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                   className="absolute -inset-10 border-2 border-primary/10 border-dashed rounded-full"
                />
             </div>

             <div className="flex flex-col items-center gap-3">
                <motion.h1 
                   initial={{ letterSpacing: "0.2em", opacity: 0, y: 10 }}
                   animate={{ letterSpacing: "1em", opacity: 1, y: 0 }}
                   transition={{ duration: 2, delay: 0.8 }}
                   className="text-3xl md:text-5xl font-black text-[#8B2635] dark:text-[#E9C46A] uppercase tracking-[1em] mr-[-1em] flex flex-col items-center"
                >
                   <span>PAPANTLA</span>
                </motion.h1>
                <motion.p
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 2.2 }}
                   className="text-primary dark:text-primary font-bold uppercase text-[12px] tracking-[0.5em] italic"
                >
                   La Ciudad que Perfuma
                </motion.p>
             </div>
          </motion.div>

          {/* Loading Bar */}
          <div className="absolute bottom-24 w-64 h-[2px] bg-primary/10 overflow-hidden rounded-full">
             <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-primary shadow-[0_0_20px_rgba(139,38,53,0.5)]"
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
