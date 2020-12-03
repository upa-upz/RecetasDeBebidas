import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaReceta from './components/ListaRecetas';


import CategoriasProvaider from './context/CategoriasContext';
import RecetasProvaider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';


function App() {
  return (
    <CategoriasProvaider>
      <RecetasProvaider>
        <ModalProvider>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>

            <ListaReceta />
          </div>
        </ModalProvider>
      </RecetasProvaider>
    </CategoriasProvaider>
  );
}

export default App;
