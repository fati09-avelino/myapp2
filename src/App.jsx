
// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  return (
    <div className="container">
      <h1 className="title">¿Qué película deseas ver?</h1>
      <input
        type="text"
        placeholder="Escribe la pelicula que desees"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input"
      />
    </div>
  );
};

export default App;
