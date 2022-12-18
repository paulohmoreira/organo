import Button from '../Button';
import InputText from '../InputText';
import ListDropdown from '../ListDropdown';
import './Form.css';

const Form = () => {
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ];

  const aoSalvar = (event) => {
    event.preventDefault();
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText
          obrigatorio={true}
          label='Nome'
          placeholder='Digite seu nome'
        />
        <InputText
          obrigatorio={true}
          label='Cargo'
          placeholder='Digite seu cargo'
        />
        <InputText label='Imagem' placeholder='Digite o endereço da imagem' />
        <ListDropdown obrigatorio={true} label='Time' itens={times} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
