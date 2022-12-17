import './InputText.css';

const InputText = () => {
  return (
    <div className='campo-texto'>
      <label>Nome</label>
      <input type='text' placeholder='Digite seu nome' />
    </div>
  );
};

export default InputText;
