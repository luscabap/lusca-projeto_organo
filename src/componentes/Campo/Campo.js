import "./campo.css";

export const Campo = ({
  type = "text",
  aoAlterado,
  label,
  valor,
}) => {
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
      />
    </div>
  );
};
