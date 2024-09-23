/* Definição do conteuso principal onde serão exibidos todos os
arquivos que compõem a página.
Importação dos componentes Banner, Footer, Header, Main, SectionUser.
 */
import './App.css';
import Banner from './components/banner';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import SectionUser from './components/sectionUser';

function App() {
  return (
    <>
       <Header />
       <Main />
       <Banner />
       <SectionUser />
       <Footer />
    </>
  );
}

export default App;
