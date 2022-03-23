import React, { useState } from 'react';
import './App.css';

function Lista({ listaItem }) {

  return (<ul className="lista-items">
    {listaItem.map((item) => (
      <li>{item}</li>
    ))}
  </ul>)
}

function Input ({item, setItem }){

  return (
  
    <div className="form-group mb-3">
      <label htmlFor="item">Adicionar Novo Item na Lista:</label>
      <input type="text" className="form-control" value={item} name="item" onChange={e => setItem(e.target.value)} />
    </div>)
  
  }

function App() {

  const [item, setItem] = useState('');

  const [itemList, setItemList] = useState([])

  const addItem = () => {
    setItemList(prevState => [...prevState, item])
    setItem('')
  }

  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <div className="lista-compras-container">
        <Lista listaItem={itemList} />
      </div>
      <div className="form-add-item">
        <fieldset>
          <Input item = {item} setItem = {setItem} />
          <button className="btn btn-primary" type="submit" onClick={addItem}>Adicionar Item</button>
        </fieldset>
      </div>
    </div>
  );
}

export default App;