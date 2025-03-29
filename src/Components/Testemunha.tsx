import { FaStar } from "react-icons/fa";

export default function Testemunha() {
  const testemunha = [
    {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "A Melhor Plataforma Que Já Experimentei!",
      text: "Uma plataforma incrível para aprendizado.",
      user: "Nome do Usuário",
    },
    {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Experiência Fantástica!",
      text: "Aprender nunca foi tão fácil.",
      user: "Outro Usuário",
    },
    {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Ótimo Conteúdo!",
      text: "Professores excelentes e suporte incrível.",
      user: "Usuário Satisfeito",
    },
    {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Recomendo a Todos!",
      text: "Material de qualidade e acessível.",
      user: "Mais um Usuário",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-6">O que seus colegas dizem?</h2>
        <p className="text-gray-500 mb-10">
          Veja o que os alunos estão falando sobre a plataforma.
        </p>

        {/* Container com rolagem horizontal */}
        <div className="bg-white flex overflow-x-auto space-x-6 p-6">
          {testemunha.map((item, index) => (
            <div
              key={index}
              className="bg-[#D96A33]  p-6 rounded-lg shadow-xl flex items-center w-[500px] h-[250px] flex-shrink-0"
            >
              {/* Vídeo ocupando toda a altura da div */}
              <div className="h-full w-48 flex-shrink-0">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={item.videoUrl}
                  title={`Vídeo de ${item.user}`}
                  allowFullScreen
                ></iframe>
              </div>

              {/* Texto à direita */}
              <div className="text-white text-left ml-6 flex-1">
                {/* Ícones de Estrela */}
                <div className="flex mb-3 text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="mr-1" />
                  ))}
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-base">{item.text}</p>
                <p className="mt-3 font-semibold">👤 {item.user}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
