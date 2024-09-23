/*
  Neste arquivo faço o uso da propriedade props para usa-los nos 
  formulários da página,
  inputName: define o nome da tag label
  onChange: Define o que é digitado pelo usuário.
  ...props: irá definir as demais propriedades do input usado. 
*/
import './inputComponent.css';
import './inputComponentMobile.css';

const InputComponent = ({inputName, onChange, ...props}) => {
    return(
        <div className='container-input-component'>
            <label>{inputName}</label>
            <input type={props.type} onChange={onChange} {...props} />
        </div>
    );
};
export default InputComponent;