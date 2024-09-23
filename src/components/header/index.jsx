/*
  Componente Header é definido neste arquivo um container pai
  com uso do display flex e suas propriedades um título e um
  container filho que compreende uma lista de links que direcionam 
  o usuário diretamente para a parte desejada da página:
  produtos
  Cadastrar produtos
  Cadastrar Usuário.
*/
import './header.css';
import './headerMobile.css';

const Header = () => {
    return(
        <header className='container-header'>
            <h1>Confeitaria</h1>
            <ul className='container-header_listas'>
                <li> <a href="#produtos">Produtos</a></li>
                <li> <a href="#cadastrar-produto">Cadastrar Produtos</a></li>
                <li> <a href="#cadastre-se">Cadastre-se</a></li>
            </ul>
        </header>
    );
};

export default Header;