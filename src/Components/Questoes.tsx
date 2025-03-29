"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "Como Funcionam Os Cursos Da Academia Softhard?", answer: "Aqui está a resposta para essa pergunta." },
  { question: "Os Cursos Oferecem Certificado?", answer: "Sim, todos os nossos cursos oferecem certificados." },
  { question: "Quanto Tempo Tenho Para Concluir Um Curso?", answer: "O tempo varia conforme o curso escolhido." },
  { question: "Quais São As Formas De Pagamento?", answer: "Aceitamos cartões de crédito, débito e Pix." },
  { question: "Posso Estudar Pelo Telemóvel?", answer: "Sim, nossa plataforma é responsiva e funciona em celulares." },
  { question: "Porquê Escolher A Vossa Plataforma E Não Uma Outra?", answer: "Nossa plataforma oferece cursos de alta qualidade e suporte dedicado." },
];

export default function Questoes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white w-full py-12 px-6">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold">Dúvidas? Nós temos as respostas!</h2>
        <p className="text-gray-500 text-sm mt-2">
          Se ainda tens questões sobre os nossos cursos, funcionamento da plataforma ou certificações, não te preocupes!
          Aqui estão as perguntas mais frequentes. E se precisares de mais ajuda, fala conosco!
        </p>
      </div>

      <div className="mt-6 space-y-2 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden w-full">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
            </button>
            {openIndex === index && <p className="p-4 text-gray-600 bg-gray-50">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
