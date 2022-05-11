import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getImage() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const json = await response.json();
      setData(json);
      setLoading(false);
    }

    getImage();
  }, []);

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
            <button className="button">Buscar outro cachorro</button>
          </main>
        </div>
      )}
    </>
  );
};

export default App;
