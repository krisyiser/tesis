import Hero from "@/components/Hero";
import PlaceCard from "@/components/PlaceCard";

export default function Home() {
  return (
    <div className="pb-32 flex flex-col">
      {/* Cinematic Hero */}
      <Hero />

      {/* Main Content Sections */}
      <section className="px-6 py-20 flex flex-col gap-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <span className="text-primary text-sm font-black uppercase tracking-[0.4em]">Descubre</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter leading-tight italic">
            Lo <br />
            <span className="text-primary not-italic">Mejor de Papantla</span>
          </h2>
          <p className="text-gray-400 font-medium text-lg leading-relaxed">
            Explora la ciudad sagrada que perfuma al mundo con su vainilla, rodeada de historia y rituales ancestrales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>
    </div>
  );
}

