"use client";

import { useParams } from "next/navigation";
import DetailView from "@/components/DetailView";
import { Bed, User, Shield, Wifi, Coffee } from "lucide-react";

const hotelsData = {
  "hotel-tajin": {
    title: "Hotel Tajín",
    subtitle: "Confort en el corazón de Papantla",
    description: "Ubicado en el centro histórico, el Hotel Tajín ofrece una experiencia única combinando la hospitalidad tradicional con servicios modernos. Ideal para viajeros que buscan comodidad y cercanía a los principales atractivos de la ciudad.",
    imageUrl: "/images/hotels/hotel_1.png",
    rating: "4.5",
    tag: "Favorito",
    location: "José de Jesús Nuñez 104, El Naranjo, 93400 Papantla, Ver.",
    details: [
      { label: "Habitaciones", value: "Sencilla/Doble", icon: Bed },
      { label: "Servicios", value: "Wifi/TV", icon: Wifi },
      { label: "Desayuno", value: "Incluido", icon: Coffee },
      { label: "Seguridad", value: "24/7", icon: Shield },
    ],
    gallery: [
      "/images/hotels/hotel_1.png",
      "/images/hotels/hotel_2.png",
    ]
  }
};

export default function HotelDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const data = hotelsData[id as keyof typeof hotelsData] || {
    title: id.replace(/-/g, ' '),
    subtitle: "Hospedaje de Calidad",
    description: "Este establecimiento ofrece todas las comodidades necesarias para una estancia placentera en Papantla. Disfruta de la calidez de nuestra gente y la belleza de nuestro pueblo mágico.",
    imageUrl: "/images/hotels/hotel_1.png",
    rating: "4.2",
    tag: "Hospedaje",
    location: "Papantla de Olarte, Veracruz",
    details: [
      { label: "Habitaciones", value: "Disponibles", icon: Bed },
      { label: "Seguridad", value: "Garantizada", icon: Shield },
    ]
  };

  return (
    <DetailView {...data} />
  );
}
