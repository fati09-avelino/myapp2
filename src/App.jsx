
// src/App.js
import React, { useState } from 'react';
import { MeiliSearch } from 'meilisearch';
import './App.css'; // Importa el archivo CSS

const client = new MeiliSearch({
  host: 'http://18.227.13.140',
  apiKey: 'c716781c75b1115ae1bd945fd73b87d2f12a5f2e878cfc6fbe45f68d57be',
});

const App = () => {
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]); // Resultados
  const [error, setError] = useState(null); // error

  const manejarBusqueda = async () => {
    try {
      setError(null);
      const index = client.index('movies');
      const response = await index.search(query); // búsqueda
      setResultados(response.hits); // Actualiza
    } catch (err) {
      console.error('Error al buscar:', err);
      setError('No se pudo realizar la búsqueda');
    }
  };

  return (
    <div className="container">
      <h1 className="title">¿Qué película deseas ver?</h1>
      <input
        type="text"
        placeholder="Escribe el título de una película..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input"
      />
      <button onClick={manejarBusqueda} className="button">
        Buscar
      </button>

      {error && <p className="error">{error}</p>}

      <ul className="results">
        {resultados.map((movie) => (
          <li key={movie.id} className="result-item">
            <strong>{movie.title || 'Sin título'}</strong> - {movie.genres || 'Sin género'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

