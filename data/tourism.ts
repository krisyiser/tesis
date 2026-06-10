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
    description: "Ubicado en el corazón de Papantla, el Hotel Tajín ofrece una experiencia única combinando comodidad moderna con la arquitectura tradicional del pueblo mágico.",
    imageUrl: "/images/hotels/hoteltajin.jpg",
    rating: "4.5",
    tag: "Centro",
    location: "Papantla de Olarte, Ver",
    category: "hospedaje",
    coords: [20.4470, -97.3230],
    phone: "7848420121",
    address: "José de Jesús Núñez 104, El Naranjo, 93400 Papantla, Ver.",
    details: [
      { label: "Habitaciones", value: "Aires Acondicionados", icon: "bed" },
      { label: "Servicios", value: "Alberca y Wifi", icon: "wifi" },
      { label: "Atención", value: "Desde 1951", icon: "clock" },
      { label: "Seguridad", value: "24 Horas", icon: "shield" }
    ],
    gallery: [
      "/images/hotels/tajin/facade.jpg",
      "/images/hotels/tajin/pool.jpg",
      "/images/hotels/tajin/lobby.jpg",
      "/images/hotels/tajin/room1.jpg",
      "/images/hotels/tajin/room2.jpg"
    ]
  },
  {
    id: "hotel-vista-inn",
    title: "Hotel Vista INN",
    subtitle: "Vista Panorámica",
    description: "Ubicación privilegiada con acceso fácil a los principales atractivos turísticos y comerciales del centro de Papantla.",
    imageUrl: "/images/hotels/vistainn/VISTA INN.jpg",
    rating: "4.3",
    tag: "Centro",
    location: "Centro, Papantla",
    category: "hospedaje",
    coords: [20.4465, -97.3225],
    phone: "7848425981",
    address: "Reforma 102-local 5, Centro, 93400 Papantla de Olarte, Ver.",
    gallery: [
      "/images/hotels/vistainn/VISTA INN.jpg",
      "/images/hotels/vistainn/VISTA INN1.jpg",
      "/images/hotels/vistainn/VISTA INN2.jpg",
      "/images/hotels/vistainn/VISTA INN3.jpg",
      "/images/hotels/vistainn/VISTA INN4.jpg"
    ]
  },
  {
    id: "oyo-hotel-totonacapan",
    title: "OYO Hotel Totonacapan",
    subtitle: "Esencia Totonaca",
    description: "Habitaciones confortables que reflejan la calidez de la cultura totonaca, ideal para viajeros que buscan una estancia auténtica.",
    imageUrl: "/images/hotels/oyo/OYO.jpeg",
    rating: "4.0",
    tag: "Barrio San Juan",
    location: "Papantla, Ver",
    category: "hospedaje",
    coords: [20.4450, -97.3210],
    phone: "2296903292",
    address: "s/n Olivo Centro, Barrio del San Juan, 93400 Papantla, Ver.",
    gallery: [
      "/images/hotels/oyo/OYO.jpeg",
      "/images/hotels/oyo/1OYO.jpeg",
      "/images/hotels/oyo/2HOYO.jpeg",
      "/images/hotels/oyo/3OYO.jpeg",
      "/images/hotels/oyo/OYO4.jpeg",
      "/images/hotels/oyo/OYO5.jpeg"
    ]
  },
  {
    id: "hostal-del-centro-papantla",
    title: "Hostal del Centro Papantla",
    subtitle: "Ambiente Familiar",
    description: "Una opción acogedora y económica en el corazón de la ciudad, perfecta para explorar cada rincón de Papantla.",
    imageUrl: "/images/hotels/hoteldelcentro/HOSTEL DEL CENTRO.jpg",
    rating: "4.2",
    tag: "Centro",
    location: "Centro, Papantla",
    category: "hospedaje",
    coords: [20.4460, -97.3220],
    phone: "7841023268",
    address: "Aquiles Serdán 415, Centro, 93449 Papantla, Ver.",
    gallery: [
      "/images/hotels/hoteldelcentro/HOSTEL DEL CENTRO.jpg",
      "/images/hotels/hoteldelcentro/HOSTAL DEL CENTRO1.jpg",
      "/images/hotels/hoteldelcentro/HOSTEL DEL CENTRO2.jpg",
      "/images/hotels/hoteldelcentro/HOSTEL DEL CENTRO3.jpg",
      "/images/hotels/hoteldelcentro/HOSTEL DEL CENTRO4.jpg"
    ]
  },
  {
    id: "hotel-campestre-la-colina-del-conejo",
    title: "Hotel Campestre La Colina Del Conejo",
    subtitle: "Naturaleza y Descanso",
    description: "Rodeado de vegetación, este hotel campestre es el refugio ideal para quienes buscan tranquilidad y contacto con la naturaleza.",
    imageUrl: "/images/hotels/colina/COLINA.png",
    rating: "4.6",
    tag: "Campestre",
    location: "Adolfo Lopez Mateos",
    category: "hospedaje",
    coords: [20.4550, -97.3300],
    phone: "7848219206",
    address: "Jacarandas 35, Adolfo Lopez Mateos, 93438 Papantla de Olarte, Ver.",
    gallery: [
      "/images/hotels/colina/COLINA.png",
      "/images/hotels/colina/COLINA1.png",
      "/images/hotels/colina/COLINA2.png",
      "/images/hotels/colina/COLINA3.png",
      "/images/hotels/colina/COLINA4.png"
    ]
  },
  {
    id: "hotel-santo-domingo",
    title: "Hotel Santo Domingo",
    subtitle: "Tranquilidad y Confort",
    description: "Excelente servicio y hospitalidad en una atmósfera relajada para su estancia en la ciudad perfecta para descansar.",
    imageUrl: "/images/hotels/santo/SANTO.jpeg",
    rating: "4.2",
    tag: "Barrio San Juan",
    location: "Papantla, Ver",
    category: "hospedaje",
    coords: [20.4440, -97.3200],
    phone: "7848427038",
    address: "5 de Mayo 301, Barrio del San Juan, 93449 Papantla, Ver.",
    gallery: [
      "/images/hotels/santo/SANTO.jpeg",
      "/images/hotels/santo/SANTO1.jpeg",
      "/images/hotels/santo/SANTO2.jpeg",
      "/images/hotels/santo/SANTO3.jpeg",
      "/images/hotels/santo/SANTO4.jpeg",
      "/images/hotels/santo/SANTO5.jpeg",
      "/images/hotels/santo/SANTO6.jpeg"
    ]
  },
  {
    id: "hotel-vainilla-y-descanso",
    title: "Hotel Vainilla y Descanso",
    subtitle: "Elegancia y Aroma",
    description: "Un hotel boutique que rinde homenaje al oro negro de Papantla. Experimente el lujo auténtico.",
    imageUrl: "/images/hotels/vainilla/VAINILLA.jpg",
    rating: "4.7",
    tag: "Boutique",
    location: "Benito Juárez, Papantla",
    category: "hospedaje",
    coords: [20.4490, -97.3250],
    phone: "7821862711",
    address: "Francisco I Madero 716, Benito Juárez, 93410 Papantla de Olarte, Ver.",
    gallery: [
      "/images/hotels/vainilla/VAINILLA.jpg",
      "/images/hotels/vainilla/VAINILLA1.jpg",
      "/images/hotels/vainilla/VAINILLA2.jpg",
      "/images/hotels/vainilla/VAINILLA3.jpg",
      "/images/hotels/vainilla/VAINILLA4.jpg",
      "/images/hotels/vainilla/VAINILLA5.jpg",
      "/images/hotels/vainilla/VAINILLA6.jpg",
      "/images/hotels/vainilla/VAINILLA7.png"
    ]
  },
  {
    id: "hotel-katlen",
    title: "Hotel Katlen",
    subtitle: "Hospitalidad Local",
    description: "Servicio personalizado en un entorno tradicional, ideal para disfrutar de la cultura local.",
    imageUrl: "/images/hotels/katlen/KATLEN.jpeg",
    rating: "3.9",
    tag: "Barrio San Juan",
    location: "Papantla, Ver",
    category: "hospedaje",
    coords: [20.4430, -97.3190],
    phone: "7848423990",
    address: "Barrio del San Juan, 93449 Papantla de Olarte, Ver.",
    gallery: [
      "/images/hotels/katlen/KATLEN.jpeg",
      "/images/hotels/katlen/KATLEN1.jpeg",
      "/images/hotels/katlen/KATLEN2.jpeg",
      "/images/hotels/katlen/KATLEN3.jpeg",
      "/images/hotels/katlen/KATLEN4.jpeg",
      "/images/hotels/katlen/KATLEN5.jpeg"
    ]
  },
  {
    id: "hotel-familiar-arenas",
    title: "Hotel Familiar Arenas",
    subtitle: "Estancia Cálida",
    description: "Ambiente familiar y atención amable que le hará sentirse como en casa durante su visita.",
    imageUrl: "/images/hotels/arenas/ARENAS.jpeg",
    rating: "4.0",
    tag: "Naranjo",
    location: "Barrio del Naranjo",
    category: "hospedaje",
    coords: [20.4480, -97.3240],
    phone: "7848423366",
    address: "Juan Enríquez 307, Barrio del Naranjo, 93400 Papantla, Ver.",
    gallery: [
      "/images/hotels/arenas/ARENAS.jpeg",
      "/images/hotels/arenas/ARENAS1.jpeg",
      "/images/hotels/arenas/ARENAS2.jpeg",
      "/images/hotels/arenas/ARENAS3.jpeg",
      "/images/hotels/arenas/ARENAS4.jpeg"
    ]

  }
];
