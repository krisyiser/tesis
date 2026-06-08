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
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rating && (
            <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-[30px] p-6 flex flex-col items-center gap-2 shadow-xl shadow-black/5">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <span className="text-2xl font-black">{rating}</span>
              <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Valoración</span>
            </div>
          )}
          {details?.map((detail, i) => (
            <div key={i} className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-[30px] p-6 flex flex-col items-center gap-2 shadow-xl shadow-black/5">
              <detail.icon className="w-6 h-6 text-primary" />
              <span className="text-xl font-black">{detail.value}</span>
              <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{detail.label}</span>
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
            <div className="h-64 w-full bg-gray-100 dark:bg-white/5 rounded-[40px] border border-black/5 dark:border-white/5 relative overflow-hidden group">
               {/* Placeholder for Map - In real app, we'd use Leaflet here too */}
               <div className="absolute inset-0 bg-primary/5 flex items-center justify-center p-8 text-center text-muted-foreground italic font-medium">
                  {location}
               </div>
               <button 
                  onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(title + " " + location)}`, "_blank")}
                  className="absolute bottom-6 right-6 bg-primary text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-2 group-hover:scale-105 transition-transform"
               >
                  <ExternalLink className="w-4 h-4" /> Abrir Mapas
               </button>
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
