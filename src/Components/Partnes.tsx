import Image from "next/image";

export default function Partnes() {
  const partnes = [
    "/logo.jpg",
    "/logo.jpg",
    "/logo.jpg",
    "/logo.jpg",
    "/logo.jpg",
    "/logo.jpg",
    "/logo.jpg",
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">Conheça Nossos Parceiros</h2>
        
        {/* Contêiner Responsivo */}
        <div className="flex flex-wrap justify-center gap-6">
          {partnes.map((src, index) => (
            <div key={index} className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src={src}
                alt={`Parceiro ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-full border-2 border-orange-500 shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}