import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import GlobalStyle from './GlobalStyle';
import Page404 from './pages/Page404'
import NuevoVideo from './pages/NuevoVideo';
import NuevaCategoria from './pages/NuevaCategoria';
import Footer from './components/Footer';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Define el elemento de la aplicación

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/nuevovideo' element={ <NuevoVideo /> }/>
          <Route path='/nuevacategoria' element={ <NuevaCategoria /> }/>
          <Route path='*' element={ <Page404/> } />
        </Routes>
        <Footer/>
      </Router>



      {/* <button onClick={()=>setModalOpen(true)}>Abrir Modal</button>
      {modalOpen &&(
      <Modal onSubmit={null} onCancel={null} onClose={manejarModal}>
        <h1>Eliminar Video</h1>
        <p>¿Desea continuar con esta acción?</p>
      </Modal>  
      )} */}
    </div>
  );
}

export default App;
