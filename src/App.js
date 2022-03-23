import React, { useState } from 'react';
import './App.css';

function App() {

  const [item, setItem] = useState('');
  
  const [itemList, setItemList] = useState([])

  const addItem = () => {
    setItemList([item].concat(itemList))
    setItem('')
}

  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <div className="lista-compras-container">
        <ul className="lista-items">
          {itemList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="form-add-item" action="#" method="post">
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="item">Adicionar Novo Item na Lista:</label>
            <input type="text" placeholder="Item" value={item} name="item" onChange = {e => setItem(e.target.value)} />
          </div>
          <button onClick={addItem}>Adicionar Item</button>
        </fieldset>
      </div>
    </div>
  );
}

export default App;