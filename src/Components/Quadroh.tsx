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
    <section className="bg-white text-center py-12 px-6">
      <h2 className="text-2xl font-bold">
        Será que tens o que é preciso para entrar no nosso{' '}
        <span className="text-[#D96A33]">QUADRO DE HONRA?</span>
      </h2>
      <p className="mt-2 text-gray-600 max-w-xl mx-auto">
        Aqui só entram os melhores! Dá o teu máximo, destaca-te nos treinos e garante o teu lugar no nosso Quadro de Honra. Estás pronto para o desafio?
      </p>

      {/* Linha superior com 3 imagens próximas */}
      <div className="mt-8 flex justify-center gap-25">
        {honors.slice(0, 3).map((student) => (
          <div key={student.id} className="relative w-44 h-56 md:w-48 md:h-60 overflow-hidden shadow-lg">
            <Image src={student.src} alt={student.alt} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>

      {/* Linha inferior com 2 imagens centralizadas */}
      <div className="mt-6 flex justify-center gap-30">
        {honors.slice(3).map((student) => (
          <div key={student.id} className="relative w-44 h-56 md:w-48 md:h-60 overflow-hidden shadow-lg">
            <Image src={student.src} alt={student.alt} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

