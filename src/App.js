import './App.css';
import { useState } from 'react';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import Header from './Components/Header/Header';
function App() {

  const [Items,setItems] = useState([]);
  const addItem = item => {
    const newItems = [item,...Items];
    setItems(newItems);
    console.log(...Items);
  }
  return (
      <div>
        <Header/>
        <div className="App">
          <List Items = {Items}/>
          <Form onSub = {addItem} />
        </div>
      </div>
    );
}

export default App;
