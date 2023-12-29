import "./campoTexto.css";

interface CampoTextoProps {
  aoAlterado: (valor: string) => void
  placeholder?: string
  label: string
  type?: 'text' | 'password' | 'date' | 'email' | 'number' | 'color'
  valor: string
}

const CampoTexto = ({aoAlterado, type = 'text' , label, valor} : CampoTextoProps) => {

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
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

export default CampoTexto;
