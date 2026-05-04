import TelaDeCadastro from "./telaDeCadastro";
import TelaDeLogin from "./telaDeLogin";
import Titulo from "./Titulo";
import TelaDeDatas from "./telaDeDatas";

function App() {
  return (
    <div>
      <Titulo />
      <TelaDeCadastro />
      <TelaDeLogin />
      <TelaDeDatas />
    </div>
  );
  // tag vazia em react se chama fragment
}

export default App;
