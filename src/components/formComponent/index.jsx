/*
 Neste arquivo é defino os formulários da página nele faço a definição 
 da propriedade children para que possa ser utilizado os inputs como
 propriedade filhos dentro dele.
 */

import './formComponent.css';
import './formComponentMobile.css';

const FormComponent = ({children}) => {
    return(
        <form action="" className='container-form'>{children}</form>
    );
};
export default FormComponent;