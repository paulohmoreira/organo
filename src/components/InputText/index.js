import './InputText.css';

const InputText = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input
        required={props.obrigatorio}
        type='text'
        placeholder={props.placeholder}
        value={props.valor}
        onChange={aoDigitado}
      />
    </div>
  );
};

export default InputText;
