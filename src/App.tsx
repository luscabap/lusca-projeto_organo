import { useState } from "react";
import Banner from './componentes/Banner'
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
// import { v4 as uuidv4 } from "uuid";
import { IColaborador } from "./shared/interfaces/IColaborador";
import { ITime } from "./shared/interfaces/ITime";

function App() {
  const [times, setTimes] = useState<ITime[]>([
    {
      id: 1,
      nome: "Programação",
      cor: "#D9F7E9",
    },
    {
      id: 2,
      nome: "Front-End",
      cor: "#E8F8FF",
    },
    {
      id: 3,
      nome: "Data Science",
      cor: "#F0F8E2",
    },
    {
      id: 4,
      nome: "Devops",
      cor: "#FDE7E8",
    },
    {
      id: 5,
      nome: "UX e Design",
      cor: "#FAE9F5",
    },
    {
      id: 6,
      nome: "Mobile",
      cor: "#FFF5D9",
    },
    {
      id: 7,
      nome: "Inovação e Gestão",
      cor: "#FFEEDF",
    },
  ]);

  const inicial = [
    {
      id: 1,
      favorito: false,
      nome: "LUCAS BAPTISTA DA SILVA",
      cargo: "Desenvolvedor Júnior Front-End",
      imagem:
        "https://github.com/luscabap.png",
      time: times[0].nome,
    },
    
    /*
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[5].nome,
    },
    */
  ];

  const [colaboradores, setColaboradores] = useState<IColaborador[]>(inicial);

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador(id: string) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime({cor, id}: any) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime: any){
    setTimes([...times, { ...novoTime, id: 1 } ])
  }

  function resolverFavorito(id: any){
    setColaboradores(
      colaboradores.map((colaborador) => {
        if(colaborador.id === id){
          colaborador.favorito = !colaborador.favorito
        };
        return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner 
        enderecoImagem="/imagens/banner.png"
        textoAlternativo="O banner principal da página do Organo"
      />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador:any) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {times.map((time, indice) => {
        return (
          <Time
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime}
            id={time.id}
            key={indice}
            nome={time.nome}
            cor={time.cor}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
          />
        );
      })}
      <Rodape />
    </div>
  );
}

export default App;
