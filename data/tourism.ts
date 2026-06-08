export interface TourismItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  rating: string;
  tag: string;
  location: string;
  category: "destinos" | "sabor" | "hospedaje" | "eventos" | "mural" | "servicios";
  coords: [number, number];
  phone?: string;
  details?: { label: string; value: string; icon: string }[];
  gallery?: string[];
  address?: string;
}

export const tourismData: TourismItem[] = [
  // DESTINOS
  {
    id: "tajin",
    title: "El Tajín",
    subtitle: "Patrimonio Mundial UNESCO",
    description: "La ciudad del trueno antigua capital de la cultura totonaca Famosa por la Pirámide de los Nichos y su impresionante arquitectura prehispánica",
    imageUrl: "/destinos/tajin.jpg",
    rating: "4.9",
    tag: "Historia",
    location: "Papantla de Olarte Ver",
    category: "destinos",
    coords: [20.4485, -97.3245],
    gallery: ["/destinos/tajin.jpg"]
  },
  {
    id: "centro-historico",
    title: "Centro Histórico",
    subtitle: "Pueblo Mágico",
    description: "El corazón de Papantla donde convergen la tradición y la modernidad Hogar de la Catedral de Nuestra Señora de la Asunción",
    imageUrl: "/destinos/centro.jpg",
    rating: "4.8",
    tag: "Cultura",
    location: "Centro Papantla",
    category: "destinos",
    coords: [20.4465, -97.3225],
    gallery: ["/destinos/centro.jpg"]
  },
  // SABORES
  {
    id: "restaurante-naku",
    title: "Restaurante Nakú",
    subtitle: "Sabor Totonaca",
    description: "Especialistas en comida regional con un toque gourmet",
    imageUrl: "/images/locals/traditional.png",
    rating: "4.9",
    tag: "Gourmet",
    location: "El Naranjo Papantla",
    category: "sabor",
    coords: [20.4455, -97.3215],
    phone: "7848420121"
  },
  // HOSPEDAJE
  {
    id: "hotel-tajin",
    title: "Hotel Tajín",
    subtitle: "Confort Tradicional",
    description: "Ubicado en el centro histórico ofrece las mejores vistas de la ciudad",
    imageUrl: "/images/hotels/hotel_1.png",
    rating: "4.5",
    tag: "Hospedaje",
    location: "Centro Papantla",
    category: "hospedaje",
    coords: [20.4470, -97.3230],
    phone: "7848420121"
  },
  {
    id: "hotel-vainilla",
    title: "Hotel Vainilla y Descanso",
    subtitle: "Elegancia y Aroma",
    description: "Un hotel boutique que rinde homenaje al oro negro de Papantla",
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80",
    rating: "4.7",
    tag: "Hospedaje",
    location: "Benito Juárez Papantla",
    category: "hospedaje",
    coords: [20.4490, -97.3250],
    phone: "7821862711"
  }
];
