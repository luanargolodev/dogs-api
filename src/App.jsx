import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getImage() {
    setLoading(true);
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    getImage();
  }, []);

  function handleImage() {
    getImage();
  }

  return (
    <>
      {loading ? (
        <div className="loading">Carregando...</div>
      ) : (
        <div className="App">
          <header>
            <h1 className="title">Dogs!</h1>
          </header>
          <main>
            <div className="card">
              <img className="image" src={data.message} alt="Cachorro" />
            </div>
            <button className="button" onClick={handleImage}>
              Buscar outro cachorro
            </button>
          </main>
        </div>
      )}
    </>
  );
};

export default App;
