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

  return (
    <section className='formulario'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText label='Nome' placeholder='Digite seu nome' />
        <InputText label='Cargo' placeholder='Digite seu cargo' />
        <InputText label='Imagem' placeholder='Digite o endereço da imagem' />
        <ListDropdown label='Time' itens={times} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
