import Image from "next/image";

export default function CursosMaisProcurados() {
  return (
    <section className="container mx-auto bg-white px-4 py-10 flex flex-col lg:flex-row gap-8">
      
      {/* Área da esquerda */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        {/* Texto */}
        <div>
          <h2 className="text-xl font-bold mb-3">CURSOS MAIS PROCURADOS</h2>
          <p className="text-gray-600 text-sm">
            Moeda para os estudantes da Softhard. Se um estudante conseguir trazer 1 aluno, recebe 1000 SoftCoins 
            (equivalente a 1000 Kwanzas) e pode acumular até pagar um curso.
          </p>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* Cartão abaixo do texto */}
        <div className="border rounded-lg shadow-md p-3 bg-white">
          <Image 
            src="/menino.jpeg" 
            alt="Curso" 
            width={300} 
            height={120} 
            className="w-full h-55 object-cover rounded-md"
          />
          <p className="text-xs text-gray-500 font-bold mt-2">TREINAMENTO</p>
          <h3 className="text-sm font-semibold">COMO CONSEGUIR EMPREGO PELA INTERNET</h3>
          <p className="text-gray-600 text-xs mt-1">
            O WITZ e a Kode criaram conteúdos até 10 vezes mais rápido. Nosso bootcamp é intensivo, 
            baseado em resultados com testes contínuos para máxima produtividade.
          </p>
          <div className="flex justify-between items-center mt-3">
            <span className="text-xs text-gray-600">PRAZO: 2 DIAS</span>
            <span className="font-bold text-sm">10.500 KZS</span>
          </div>
        </div>
      </div>

      {/* Área da direita com os 4 cartões organizados em 2x2 */}
      <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(4)].map((_, index) => ( 
          <div key={index} className="border rounded-lg shadow-md p-3 bg-white">
            <Image 
              src="/menino.jpeg" 
              alt="Curso" 
              width={300} 
              height={120} 
              className="w-full h-55 object-cover rounded-md"
            />
            <p className="text-xs text-gray-500 font-bold mt-2">TREINAMENTO</p>
            <h3 className="text-sm font-semibold">COMO CONSEGUIR EMPREGO PELA INTERNET</h3>
            <p className="text-gray-600 text-xs mt-1">
              O WITZ e a Kode criaram conteúdos até 10 vezes mais rápido. Nosso bootcamp é intensivo, 
              baseado em resultados com testes contínuos para máxima produtividade.
            </p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-xs text-gray-600">PRAZO: 2 DIAS</span>
              <span className="font-bold text-sm">10.500 KZS</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}