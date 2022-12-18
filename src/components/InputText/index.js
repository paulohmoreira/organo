import './InputText.css';

const InputText = (props) => {
  let valor = '';

  const aoDigitado = (evento) => {
    valor = evento.target.value;
    console.log(valor);
  };

  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input
        required={props.obrigatorio}
        type='text'
        placeholder={props.placeholder}
        // value={valor}
        onChange={aoDigitado}
      />
    </div>
  );
};

export default InputText;
