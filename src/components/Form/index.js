import { useState } from 'react';
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

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');

  const aoSalvar = (event) => {
    event.preventDefault();
    console.log('Form foi submetido => ', nome, cargo, imagem);
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText
          obrigatorio={true}
          label='Nome'
          placeholder='Digite seu nome'
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <InputText
          obrigatorio={true}
          label='Cargo'
          placeholder='Digite seu cargo'
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <InputText
          label='Imagem'
          placeholder='Digite o endereço da imagem'
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListDropdown obrigatorio={true} label='Time' itens={times} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
