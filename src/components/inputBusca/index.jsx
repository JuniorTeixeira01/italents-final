/*
  Neste arquivo é definido o campo de busca dos produtos.
  nele contém a importação de uma imagem de lupa usada na
  tag pai do input.
 */
import lupa from '../../assets/lupa.png';
import './inputBusca.css';
import './inputBuscaMobile.css';

const InputBusca = ({onChange, ...props}) => {
    return(
        <div className='container-busca'>
            <img src={lupa} alt="Lupa" />
            <input type={props.type} onChange={onChange} {...props} />
        </div>
    );
};
export default InputBusca;