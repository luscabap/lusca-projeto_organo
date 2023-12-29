import { useState } from "react";
import { IColaboradorCadastrado } from "../../shared/interfaces/IColaboradorCadastrado";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaboradorCadastrado) => void
  times: string[]
  cadastrarTime: any
}

const Formulario = ({ aoColaboradorCadastrado, times, cadastrarTime }: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");
  const [data, setData] = useState("");

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
      data
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          label="Nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />

        <CampoTexto
          label="Cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />

        <CampoTexto
          label="Imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <CampoTexto
          label="Data de entrada no time"
          valor={data}
          aoAlterado={valor => setData(valor)}
          type="date"
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />

        <Botao>Criar Card</Botao>
      </form>

      {/*--------------------------FORMULÁRIO TIME*--------------------------*/}

      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <CampoTexto
          label="Nome"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <CampoTexto
          type="color"
          label="Cor"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>
          Criar um novo Time
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
