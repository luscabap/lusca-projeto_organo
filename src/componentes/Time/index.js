import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Time.css";

const Time = ({ nome, colaboradores, cor, aoDeletar, mudarCor, id, aoFavoritar }) => {
  const css = { backgroundColor: hexToRgba(cor, "0.6") };

  return (
    colaboradores.length > 0 && (
      <section className="time" style={css}>
        <input
          onChange={(evento) => mudarCor(evento.target.value, id)}
          value={cor}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: cor }}>{nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                favorito={colaborador.favorito}
                corDeFundo={cor}
                id={colaborador.id}
                key={indice}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
