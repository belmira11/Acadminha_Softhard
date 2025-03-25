import Image from 'next/image';

const honors = [
  { id: 1, src: '/menino.jpeg', alt: 'Estudante 1' },
  { id: 2, src: '/jovem.jpeg', alt: 'Estudante 2' },
  { id: 3, src: '/MENINAS.jpeg', alt: 'Estudante 3' },
  { id: 4, src: '/Estudante.jpeg', alt: 'Estudante 4' },
  { id: 5, src: '/ESTUDAR.jpeg', alt: 'Estudante 5' },
];

export default function Quadroh() {
  return (
    <section className=" bg-white text-center py-10 px-4">
      <h2 className="text-xl md:text-2xl font-bold">
        Será que tens o que é preciso para entrar no nosso 
        <span className="text-black"> QUADRO DE HONRA?</span>
      </h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        Aqui Só Entram Os Melhores! Dá O Teu Máximo, Destaca-Te Nos Treinos E Garante O Teu Lugar No Nosso Quadro De Honra. Estás Pronto Para O Desafio?
      </p>
      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center">
        {honors.slice(0, 3).map((student) => (
          <div key={student.id} className="relative w-40 h-52 md:w-48 md:h-60 rounded-lg overflow-hidden shadow-lg">
            <Image src={student.src} alt={student.alt} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-40">
        {honors.slice(3).map((student) => (
          <div key={student.id} className="relative w-40 h-52 md:w-48 md:h-60 rounded-lg overflow-hidden shadow-lg">
            <Image src={student.src} alt={student.alt} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
