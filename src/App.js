import React from 'react';
import dadosIniciais from './data/dados.json';
import Banner from './components/Banner';

function App() {
  return (
    <article className="banner">
      <Banner
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url = {dadosIniciais.categorias[0].videos[0].url}
        videoDescription = {"By Pedro Martins"}
      />
    </article>
  );
}

export default App;
