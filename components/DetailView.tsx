"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Share2, Star, Clock, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface DetailViewProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  rating?: string;
  tag?: string;
  location?: string;
  details?: { label: string; value: string; icon: any }[];
  gallery?: string[];
}

export default function DetailView({
  title,
  subtitle,
  description,
  imageUrl,
  rating,
  tag,
  location,
  details,
  gallery,
}: DetailViewProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Cinematic Header Image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Top Controls */}
        <div className="absolute top-12 left-6 right-6 flex items-center justify-between z-10">
          <button 
            onClick={() => router.back()}
            className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-3xl border border-white/20 flex items-center justify-center text-white active:scale-90 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-3xl border border-white/20 flex items-center justify-center text-white active:scale-90 transition-all">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-12 left-8 right-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2"
          >
            {tag && (
              <span className="bg-primary px-3 py-1 rounded-full text-white text-[9px] font-black uppercase tracking-widest w-fit mb-2">
                {tag}
              </span>
            )}
            <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-none uppercase">
              {title}
            </h1>
            <p className="text-muted-foreground font-bold tracking-widest uppercase text-[10px]">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-8 flex flex-col gap-10 -mt-6 relative z-10 lg:max-w-4xl lg:mx-auto">
        
        {/* Quick Stats - Centered and small */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {rating && (
            <div className="bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-3 px-5 flex items-center gap-3 shadow-xl backdrop-blur-md">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <div className="flex flex-col">
                <span className="text-sm font-black leading-none">{rating}</span>
                <span className="text-[8px] text-muted-foreground font-black uppercase tracking-widest mt-0.5">Rating</span>
              </div>
            </div>
          )}
          {details?.map((detail, i) => (
            <div key={i} className="bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-3 px-5 flex items-center gap-3 shadow-xl backdrop-blur-md">
              <detail.icon className="w-4 h-4 text-primary" />
              <div className="flex flex-col">
                <span className="text-sm font-black leading-none">{detail.value}</span>
                <span className="text-[8px] text-muted-foreground font-black uppercase tracking-widest mt-0.5">{detail.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-black tracking-tight flex items-center gap-3">
             <Info className="w-6 h-6 text-primary" />
             Información
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* Gallery Section */}
        {gallery && gallery.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-black tracking-tight">Galería de Imágenes</h2>
            <div className="grid grid-cols-2 gap-4">
              {gallery.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square relative rounded-[30px] overflow-hidden border border-black/5 dark:border-white/5 shadow-xl"
                >
                  <Image src={img} alt={`Gallery ${i}`} fill className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Location Section */}
        {location && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-black tracking-tight flex items-center gap-3">
               <MapPin className="w-6 h-6 text-primary" />
               Ubicación
            </h2>
            <div className="w-full bg-gray-100 dark:bg-white/5 rounded-[40px] border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-2xl">
               <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
               </div>
               
               <div className="p-8 pb-32">
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                     </div>
                     <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Dirección Exacta</span>
                        <p className="text-lg font-bold text-foreground leading-snug">
                           {location}
                        </p>
                        <p className="text-xs text-muted-foreground font-medium">
                           Papantla de Olarte, Veracruz, México.
                        </p>
                     </div>
                  </div>
               </div>

               <div className="h-48 w-full bg-zinc-200 dark:bg-zinc-800 relative">
                  {/* Stylized Map View */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="relative">
                        <div className="w-20 h-20 bg-primary/20 rounded-full animate-ping absolute -inset-6 opacity-30"></div>
                        <div className="w-8 h-8 bg-primary rounded-full border-4 border-white dark:border-zinc-900 shadow-xl relative z-10 flex items-center justify-center">
                           <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                     </div>
                  </div>
                  
                  {/* Open Maps Button Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  <button 
                     onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(title + " " + location)}`, "_blank")}
                     className="absolute bottom-6 right-6 bg-primary text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl flex items-center gap-3 group-hover:scale-105 active:scale-95 transition-all"
                  >
                     <ExternalLink className="w-4 h-4" /> Abrir en Google Maps
                  </button>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const ExternalLink = ({ className }: { className: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
);
