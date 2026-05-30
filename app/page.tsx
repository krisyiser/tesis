"use client";

import { motion } from "framer-motion";
import { ChevronRight, Sparkles, MapPin, ArrowDown } from "lucide-react";
import Image from "next/image";

const destinations = [
  {
    title: "El Tajín",
    subtitle: "Ciudad Sagrada",
    desc: "Testigo monumental de la cultura Totonaca, famosa por su Pirámide de los Nichos y su energía ancestral.",
    img: "https://images.unsplash.com/photo-1627997092120-d66a6ef413d7?auto=format&fit=crop&q=80",
  },
  {
    title: "Corazón Histórico",
    subtitle: "Cultura Viva",
    desc: "Camina por calles que huelen a vainilla, admira la Parroquia de la Asunción y la hospitalidad de su gente.",
    img: "https://images.unsplash.com/photo-1548174786-8a30d9515bd1?auto=format&fit=crop&q=80",
  },
];

export default function Home() {
  const heroBg = "media_b2b042ec-759e-4b92-8ee0-9a502344ac1e_1780100778743.jpg"; // Path for Image B in brain (or mapped to storage)
  // Note: I will use absolute path if possible or the one I found in the brain directory for the mockup purpose.
  // Assuming the user wants me to use the specific Image B.
  const imgBPath = "file:///C:/Users/Dell/.gemini/antigravity/brain/b2b042ec-759e-4b92-8ee0-9a502344ac1e/.tempmediaStorage/media_b2b042ec-759e-4b92-8ee0-9a502344ac1e_1780100778743.jpg";

  return (
    <div className="flex flex-col bg-background">
      {/* HERO SECTION - IMAGE A DESIGN */}
      <section className="relative h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center text-center">
         {/* BACKGROUND (Image B) */}
         <div className="absolute inset-0 z-0">
            <img 
               src={imgBPath} 
               alt="Papantla Hero" 
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
         </div>

         {/* CONTENT (Image A layout) */}
         <div className="relative z-10 flex flex-col items-center">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1 }}
               className="flex flex-col items-center"
            >
               <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-8 bg-white/40" />
                  <span className="text-white text-[10px] font-black tracking-[0.5em] uppercase">México</span>
                  <div className="h-[1px] w-8 bg-white/40" />
               </div>

               <h1 className="text-8xl md:text-[12rem] font-black text-white leading-[0.8] tracking-tight">
                  PAPANTLA
               </h1>

               <div className="flex items-center gap-4 mt-8">
                  <div className="w-2 h-2 bg-primary rotate-45" />
                  <span className="text-white text-lg md:text-2xl font-black uppercase tracking-widest italic drop-shadow-2xl">
                     LA CIUDAD QUE PERFUMA
                  </span>
                  <div className="w-2 h-2 bg-primary rotate-45" />
               </div>

               <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-16 px-12 py-4 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-white/20"
               >
                  Explorar Más
               </motion.button>
            </motion.div>
         </div>

         {/* VERTICAL DOTS (A style) */}
         <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full py-6 px-3 flex flex-col gap-4 border border-white/5">
               {['I', 'F', 'T', 'Y'].map((l) => (
                  <span key={l} className="text-white/60 text-[10px] font-black hover:text-primary cursor-pointer transition-colors px-2">{l}</span>
               ))}
            </div>
         </div>

         <div className="absolute bottom-10 animate-bounce opacity-40">
            <ArrowDown className="text-white w-6 h-6" />
         </div>
      </section>

      {/* ADDITIONAL SECTIONS (Vertical Scrolling) */}
      {destinations.map((section, i) => (
        <section key={i} className="relative h-screen w-full overflow-hidden flex items-center">
            <div className="absolute inset-0 z-0">
                <Image 
                  src={section.img} 
                  alt={section.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                <motion.div
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8 }}
                   className="flex flex-col gap-4 max-w-2xl"
                >
                   <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                      {section.title}
                   </h2>
                   <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed max-w-lg mt-4">
                      {section.desc}
                   </p>
                </motion.div>
            </div>
        </section>
      ))}

      {/* FOOTER-ISH SECTION */}
      <section className="bg-white dark:bg-black py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="flex flex-col gap-8">
                 <h3 className="text-4xl font-black tracking-tight text-foreground italic">Historia & <span className="text-primary not-italic">Cultura</span></h3>
                 <p className="text-gray-500 text-xl font-medium leading-relaxed">
                    Papantla no es solo un destino, es un viaje en el tiempo. Desde el aroma de la vainilla que perfuma nuestras plazas hasta el estruendo de los tambores de los Voladores.
                 </p>
             </div>
             <div className="relative rounded-[60px] overflow-hidden aspect-square border-8 border-gray-50 dark:border-white/5 shadow-2xl">
                <Image 
                   src="https://images.unsplash.com/photo-1626081498877-c93d8e57eeff?auto=format&fit=crop&q=80" 
                   alt="Cultura" 
                   fill 
                   className="object-cover"
                />
             </div>
          </div>
      </section>
    </div>
  );
}
