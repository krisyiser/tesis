export interface TourismItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  rating: string;
  tag: string;
  location: string;
  category: "destinos" | "sabor" | "hospedaje" | "eventos" | "mural";
  coords: [number, number];
  phone?: string;
  details?: { label: string; value: string; icon: string }[];
  gallery?: string[];
}

export const tourismData: TourismItem[] = [
  // DESTINOS
  {
    id: "zona-arqueológica-el-tajín",
    title: "El Tajín",
    subtitle: "Patrimonio Mundial UNESCO",
    description: "La ciudad del trueno, antigua capital de la cultura totonaca. Famosa por la Pirámide de los Nichos y su impresionante arquitectura prehispánica.",
    imageUrl: "/destinos/tajin.jpg",
    rating: "4.9",
    tag: "Historia",
    location: "Papantla de Olarte, Ver.",
    category: "destinos",
    coords: [20.4485, -97.3245],
    gallery: ["/destinos/tajin.jpg"]
  },
  {
    id: "centro-histórico",
    title: "Centro Histórico",
    subtitle: "Pueblo Mágico",
    description: "El corazón de Papantla, donde convergen la tradición y la modernidad. Hogar de la Catedral de Nuestra Señora de la Asunción.",
    imageUrl: "/destinos/centro.jpg",
    rating: "4.8",
    tag: "Cultura",
    location: "Centro, Papantla",
    category: "destinos",
    coords: [20.4465, -97.3225],
    gallery: ["/destinos/centro.jpg"]
  },
  {
    id: "mural-a-la-cultura-totonaca",
    title: "Mural Totonaca",
    subtitle: "Obra de Teodoro Cano",
    description: "Relato visual de la cosmogonía Totonaca tallado en piedra.",
    imageUrl: "/destinos/mural.jpg",
    rating: "4.7",
    tag: "Arte",
    location: "Centro, Papantla",
    category: "mural",
    coords: [20.4460, -97.3228],
  },
  // SABORES
  {
    id: "restaurante-nakú",
    title: "Restaurante Nakú",
    subtitle: "Sabor Totonaca",
    description: "Especialistas en comida regional con un toque gourmet.",
    imageUrl: "/images/locals/traditional.png",
    rating: "4.9",
    tag: "Gourmet",
    location: "El Naranjo, Papantla",
    category: "sabor",
    coords: [20.4455, -97.3215],
    phone: "7848420121"
  },
  {
    id: "la-boca",
    title: "La Boca",
    subtitle: "Mariscos y Más",
    description: "Tradición marinera en el corazón de la ciudad.",
    imageUrl: "/images/locals/seafood.png",
    rating: "4.6",
    tag: "Mariscos",
    location: "Centro, Papantla",
    category: "sabor",
    coords: [20.4430, -97.3210],
  },
  // HOSPEDAJE
  {
    id: "hotel-tajín",
    title: "Hotel Tajín",
    subtitle: "Confort Tradicional",
    description: "Ubicado en el centro histórico, ofrece las mejores vistas de la ciudad.",
    imageUrl: "/images/hotels/hotel_1.png",
    rating: "4.5",
    tag: "Hospedaje",
    location: "Centro, Papantla",
    category: "hospedaje",
    coords: [20.4470, -97.3230],
    phone: "7848420121"
  }
];
