import PlaceCard from "@/components/PlaceCard";

export default function Home() {
  return (
    <div className="px-6 pt-10 pb-32 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl font-black text-gray-900 tracking-tighter leading-none italic">
          Descubre lo <br />
          <span className="text-[#F16B24] not-italic">Mejor de Papantla</span>
        </h2>
        <p className="text-gray-400 font-medium text-lg leading-snug">
          Encuentra los rincones más mágicos de la ciudad que perfuma al mundo con su vainilla.
        </p>
      </div>

      <PlaceCard
        title="Zona Arqueológica El Tajín"
        description="La ciudad prehispánica más importante de la costa norte de Veracruz y Patrimonio Mundial de la UNESCO."
        imageUrl="https://images.unsplash.com/photo-1627997092120-d66a6ef413d7?auto=format&fit=crop&q=80"
        icon="clock"
        label="9:00 - 17:00"
        rating="4.9 (500+ reseñas)"
        buttonText="Ver más"
      />

      <PlaceCard
        title="Centro Histórico de Papantla"
        description="Corazón de la ciudad, con su iglesia de Nuestra Señora de la Asunción, quiosco y ritual de voladores."
        imageUrl="https://images.unsplash.com/photo-1548174786-8a30d9515bd1?auto=format&fit=crop&q=80"
        icon="clock"
        label="Abierto 24h"
        rating="4.8 (200+ reseñas)"
        buttonText="Ver más"
      />

      <PlaceCard
        title="Mural de la Cultura Totonaca"
        description="Gran obra escultórica que narra la historia mitológica del pueblo totonaco y de México."
        imageUrl="https://images.unsplash.com/photo-1626081498877-c93d8e57eeff?auto=format&fit=crop&q=80"
        icon="eye"
        label="Visible 24h"
        rating="4.7 (100+ reseñas)"
        buttonText="Ver más"
      />
    </div>
  );
}
