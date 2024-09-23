/*
 Neste componente é definido os botões da página, aqui faço o uso da 
 propriedade props  buttonName: para definir o nome do botão
 e onClick para definir a função de click da página, também faço o 
 uso do event.preventDefault para evitar o comportamento default
 do botão submit.
*/
import './buttonComponent.css';
import './buttonComponentMobile.css';

const ButtonComponent = ({buttonName, onClick}) => {
    return(
        <div className='container-button'>
            <button onClick={(event) => {
                event.preventDefault();
                onClick();
            }}>{buttonName}</button>
        </div>
    );
};
export default ButtonComponent;