/*
 Nesta parte faço a importação do useState para definir o estado do 
 formulário de cadastro do usuário
 Importo o botão
 o componenete Form.
 o componente input
 e faço a importação do prototipoObjectUser que vem com um objeto
 do arquivo data com um nome e email vazio para ser usado na variável
 de estado 
*/
import { useState } from 'react';
import ButtonComponent from '../buttonComponent';
import FormComponent from '../formComponent';
import InputComponent from '../inputComponent';
import { prototipoObjectUser } from '../../data';
import './sectionUser.css';

const SectionUser = () => {

    /* Uso da variável de estado para o formulário de cadastro de usuários */
    const [user, setUser] = useState(prototipoObjectUser);

    /*Função para pegar os valores digitados pelo usuário */
    const handleUser = (event) => {
       setUser({
        ...user,
        [event.target.name]: event.target.value
        
       });
       console.log(user)
    };

    /* Uso do async para permitir que a função execute mesmo com
    uso prolongado de outros programas e do await para aguardar a
    resposta de do response, faço uso do metodo POST
    para cadastrar o usuário */
    const handleClickUser = async () => {
        const response = await fetch("http://localhost:3812/user", {
            method: "POST",
            headers: new Headers({
                "Content-type": "Aplication/json"
            }),
            body: JSON.stringify(user)
        }
      );
      const data = await response.json();
      alert(`Usuário ${data.nome} cadastrado com sucesso!`);
      setUser(prototipoObjectUser)
    };

    return(
        <section id='cadastre-se' className='container-user'>
            <h2>Cadastro de Usuário</h2>
            <FormComponent>
                <InputComponent inputName={"Nome"} type="text" value={user.nome} name="nome" onChange={(event) =>handleUser(event)}/>
                <InputComponent inputName={"Email"} type="email" value={user.email} name="email" onChange={(event) =>handleUser(event)}/>
                <ButtonComponent buttonName={"Submit"} type={"submit"} onClick={handleClickUser}/>
            </FormComponent>
        </section>
    );
};

export default SectionUser;