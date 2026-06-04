"use client";

import { useParams } from "next/navigation";
import DetailView from "@/components/DetailView";
import { Clock, Users, Camera, Shield } from "lucide-react";

// In a real app, this would come from a database or shared constants
const destinationsData = {
  "zona-arqueológica-el-tajín": {
    title: "El Tajín",
    subtitle: "Ciudad del Trueno",
    description: "El Tajín es una zona arqueológica precolombina cerca de la ciudad de Papantla, Veracruz, México. La ciudad fue la capital del estado Totonaca. Tajín significa Ciudad o Lugar del trueno en el lenguaje totonaca. Uno de los edificios más interesantes es la Pirámide de los Nichos.",
    imageUrl: "/destinos/tajin.jpg",
    rating: "4.9",
    tag: "Historia",
    location: "Papantla de Olarte, Veracruz",
    details: [
      { label: "Tiempo", value: "3-4 hrs", icon: Clock },
      { label: "Guías", value: "Disponibles", icon: Users },
      { label: "Fotos", value: "Permitido", icon: Camera },
      { label: "Seguro", value: "Sí", icon: Shield },
    ],
    gallery: [
      "/destinos/tajin.jpg",
      "/images/locals/traditional.png",
      "/images/locals/cafe.png",
    ]
  }
};

export default function DestinoDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const data = destinationsData[id as keyof typeof destinationsData] || {
    title: id.replace(/-/g, ' '),
    subtitle: "Destino Turístico",
    description: "Información detallada sobre este destino próximamente. Papantla ofrece una riqueza cultural y natural inigualable que te espera para ser explorada.",
    imageUrl: "/destinos/tajin.jpg",
    rating: "4.8",
    tag: "Explorar",
    location: "Papantla, Veracruz",
    details: [
      { label: "Tiempo", value: "2 hrs", icon: Clock },
      { label: "Acceso", value: "Libre", icon: Shield },
    ]
  };

  return (
    <DetailView {...data} />
  );
}
