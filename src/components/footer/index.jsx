/*
  Neste arquivo temos o componente Footer utilizando uma imagem importada
  e uma tag parágrafo para a sua definição.
*/
import espelho from '../../assets/rodape.jpg';
import './footer.css';
import './footerMobile.css';

const Footer = () => {
    return(
        <footer className='container-footer'>
            <section className='container-footer_secao'>
              <img src={espelho} alt="Imagem confeitaria" />
              <p>&copy; Desenvolvido por Junior Teixeira</p>
              <img src={espelho} alt="Imagem confeitaria" />
              </section>
        </footer>
    );
};

export default Footer;