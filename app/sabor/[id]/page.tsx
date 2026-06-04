"use client";

import { useParams } from "next/navigation";
import DetailView from "@/components/DetailView";
import { Utensils, Clock, Star, MapPin, Phone } from "lucide-react";

const foodData = {
  "vainilla-y-descanso": {
    title: "Vainilla y Descanso",
    subtitle: "Restaurante Gourmet",
    description: "Especialista en platillos regionales con un toque contemporáneo. Nuestro famoso mole papanteco y las enchiladas de vainilla son imperdibles. Disfruta de una cena en nuestra terraza con vista al centro histórico.",
    imageUrl: "/images/locals/traditional.png",
    rating: "4.9",
    tag: "Gourmet",
    location: "Centro Histórico, Papantla",
    details: [
      { label: "Cocina", value: "Regional", icon: Utensils },
      { label: "Espero", value: "15-20 min", icon: Clock },
    ],
    gallery: [
      "/images/locals/traditional.png",
      "/images/locals/cafe.png",
    ]
  }
};

export default function SaborDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const data = foodData[id as keyof typeof foodData] || {
    title: id.replace(/-/g, ' '),
    subtitle: "Sabor Auténtico",
    description: "Descubre la explosión de sabores tradicionales en este rincón gastronómico de Papantla. Cada platillo cuenta una historia de tradición y cultura totonaca.",
    imageUrl: "/images/locals/traditional.png",
    rating: "4.7",
    tag: "Gastronomía",
    location: "Papantla, Veracruz",
    details: [
      { label: "Tipo", value: "Comida Local", icon: Utensils },
      { label: "Ambiente", value: "Familiar", icon: Star },
    ]
  };

  return (
    <DetailView {...data} />
  );
}
