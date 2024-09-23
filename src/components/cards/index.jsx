/*
  Componente cards, neste componente faço o uso da propriedade props
  para distribuir uma lista de cards com a imagem o nome e a descrição 
  de cada card, que é distribuída dentro do componente main, que 
  contém uma tag <ul> para a distribuição da lista.
*/
import './cards.css';
import './cardsMobile.css';

const Cards = ({index,imagem, nome,descricao}) => {
    return(
        <li className='container-card'>
            <img src={imagem} alt={nome} />
            <div className='container-card_descricao'>
                <h3>{nome}</h3>
                <p>{descricao}</p>
            </div>
        </li>
    );
};
export default Cards