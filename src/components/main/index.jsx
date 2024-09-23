/* Nesta primeira parte faço a importação do useState para definir estado
dos componentes useEfect para controlar a importação dos dados do
backEnd.
"prototipoObject": tem definido nele um objeto com imagem, nome e descrição
vazios para ser usado no estado do useState.
  Faço a importação dos botões, do cards, do formulário
  do campo de busca e do inputComponent
*/
import { useState, useEffect  } from 'react';
import { prototipoObject } from '../../data';
import ButtonComponent from '../buttonComponent';
import Cards from '../cards';
import FormComponent from '../formComponent';
import InputBusca from '../inputBusca';
import InputComponent from '../inputComponent';
import './main.css';
import './mainMobile.css';

const Main = () => {

/* Aqui são definidos os estados da página através do uso do useState*/
    const [produtos, setProdutos] = useState([]);
    const [textoBusca, setTextoBusca] = useState("");
    const [produtoForm, setProdutoForm] = useState(prototipoObject);

/* Uso do useEffect para controlar os dados vindos do backEnd*/

    useEffect(() => {
         getDbProdutos()
    }, [])

     
/* Funções: handleClick, handleBusca, handleCategorias, getDbProdutos
   e handleClickForm .
   com o uso da função assincrona async 
   para permitir o uso do programa enquanto  para que ele responda 
   enquanto outros programas são executados
   e o uso do await para a execução de uma função async para 
   aguardar o response.
 */
     const handleClick = async (categoria) => {
        const response = await fetch("http://localhost:3005/produtos")
        const dados = await response.json(); 

         setProdutos(dados.filter((produto) => produto.categoria === categoria));
         setTextoBusca("")
     };

    const handleBusca = async (textoDigitado) => {
        setTextoBusca(textoDigitado);
        const response = await fetch("http://localhost:3005/produtos")
        const data = await response.json(); 

        
        setProdutos(data.filter((produto) => 
            produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
            produto.categoria.toLowerCase().includes(textoDigitado.toLowerCase())
            ));
    };

    const handleCategorias = async () => {
        const response = await fetch("http://localhost:3005/produtos")
        const data = await response.json(); 
        setProdutos(data);
        setTextoBusca("");
    };

    const handleProductForm = (event) => {
        
        setProdutoForm({...produtoForm, 
            [event.target.name]: event.target.value 
        });
    };


    const getDbProdutos = async () => {
        const response = await fetch("http://localhost:3005/produtos")
        const data = await response.json();
        setProdutos(data)
};

const handleClickForm = async () => {
       
    const response = await fetch("http://localhost:3005/produtos", {
         method: 'POST',
         headers: new Headers({
             "Content-type": "Aplication/json"
         }),
         body: JSON.stringify(produtoForm)
     });

     const data = await response.json()
     alert(`Produto ${data.nome} cadastrado com sucesso.`);
     
     getDbProdutos();
     setProdutoForm(prototipoObject)
 };


    return(
        <>
          <main id='produtos' className='container-main'>
              <section className='container-seletores'>
                 <ButtonComponent buttonName={"Cobertura"} onClick={() => handleClick("cobertura")}/>
                 <ButtonComponent buttonName={"caramelizados"} onClick={() => handleClick("caramelizado")}/>
                 <InputBusca  type={"text"} value={textoBusca} onChange={(event) => handleBusca(event.target.value)} placeholder={"Digite uma Busca"}/>
                 <ButtonComponent buttonName={"Simples"} onClick={() => handleClick("simples")}/>
                 <ButtonComponent buttonName={"Bolo de Pote"} onClick={() => handleClick("bolo de pote")}/>
                 <ButtonComponent buttonName={"Categorias"} onClick={() => handleCategorias()}/>
              </section>
            
            
             <ul className='container-main_lista'>
                 {produtos.map(produto => 
                 <Cards
                    key={produto.index}
                    imagem={produto.imagem}
                    nome={produto.nome}
                    descricao={produto.descricao} 
                 />)}
             </ul>
            
          </main>

          <section id='cadastrar-produto' className='container-form_produto'>

                <h2>Cadastro de Produtos</h2>
                <FormComponent>
                    <InputComponent inputName={"Imagem"} name="imagem" type="text" value={produtoForm.imagem} onChange={(event) => handleProductForm(event)} placeholder={"Insira a URL da imagem"}/>
                    <InputComponent inputName={"Nome"} name="nome" type="text" value={produtoForm.nome} onChange={(event) => handleProductForm(event)}/>
                    <InputComponent inputName={"Descrição"} name="descricao" type="text" value={produtoForm.descricao} onChange={(event) => handleProductForm(event)}/>
                    <InputComponent inputName={"Categoria"} name="categoria" type="text" value={produtoForm.categoria.toLowerCase()} onChange={(event) => handleProductForm(event)}/>
                    <ButtonComponent buttonName={"Submit"} type={"submit"} onClick={handleClickForm}/>
                </FormComponent>
          </section>

        </>
    );
};
export default Main;