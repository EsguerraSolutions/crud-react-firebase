import { useState } from 'react';

import Header from './components/Header';
import Items from './components/Items';
import itemsModel from './models/items.model';
import AddItem from './components/AddItem';

function App() {
  const [ items , setItems ] = useState(itemsModel);
  const onAddItem = (item) => {
    const newItem = {...item};
    setItems([...items,newItem]);
  }
  return (
    <div className="App">
      <Header/>
      <AddItem onAddItem={onAddItem}/>
      <Items items={items}/>
    </div>
  );
}

export default App;
