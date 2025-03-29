export default function Select() {
    return (
      <section className="bg-[#D96A33]  rounded-tl-[80px] py-8 ">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white font-semibold text-lg md:w-1/3">
            <p>Capacite-se com o conhecimento. A qualquer hora e em qualquer lugar!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-around items-center md:w-2/3">
            <div className="text-center px-4">
              <p className="text-xl font-bold">+200</p>
              <p className="text-gray-600">Cursos Online</p>
            </div>
            <div className="text-center px-4">
              <p className="text-xl font-bold">+3450</p>
              <p className="text-gray-600">Estudantes Ativos</p>
            </div>
            <div className="text-center px-4">
              <p className="text-xl font-bold">+35</p>
              <p className="text-gray-600">Profissionais Especialistas</p>
            </div>
          </div>
        </div>
      </section>
      
    );
  }