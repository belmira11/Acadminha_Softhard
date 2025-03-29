
import Header from "@/Components/Header";
import Banner from "@/Components/Banner";
import Select from "@/Components/Select";
import CursosMaisProcurados from "@/Components/CursosMaisProcurados"
import Video from "@/Components/Video";
import BT from "@/Components/BT";
import Partnes from "@/Components/Partnes";
import Testemunha from "@/Components/Testemunha";
import Footer from "@/Components/Footer"
import Quadroh from "@/Components/Quadroh";
import Questoes from "@/Components/Questoes";
import LogoutButon from "@/Components/LogoutButton"

export default function Home() {
  return (
    <>
      
      <Header />
      <Banner /> <br/>
      <Select /> <br/>
      <BT />
      <CursosMaisProcurados />
      <Video />
      < Partnes/>
      < Testemunha/>
      < Quadroh/>
      < Questoes/>
      
      < Footer/>
      < LogoutButon/>
      
    </>
  );
}
