import { useState } from "react";
import TelaDeCadastro from "./telaDeCadastro";
import TelaDeLogin from "./telaDeLogin";

function Agendamento() {
  const [tela, setTela] = useState(null) 
  return (
  <>
  <h1> Agendamento </h1>
  <input onClick={() => setTela ("cadastro")}type="button" value="Faça seu cadastro aqui"/><br></br>
  <input onClick={() => setTela ("login")} type="button" value="Faça seu login aqui"/>
  {tela == "cadastro" && <TelaDeCadastro /> }
  {tela == "login" && <TelaDeLogin />}
  </>
  );
  //tag vazia em react se chama fragment 
}

export default Agendamento