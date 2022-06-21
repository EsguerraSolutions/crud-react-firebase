import { useState , useEffect } from 'react';

import startFireBase from './services/firebase';
import { ref , set , onValue, get , update , remove, child } from 'firebase/database';

import Header from './components/Header';
import Items from './components/Items';
import AddItem from './components/AddItem';

function App() {
  const [ items , setItems ] = useState([]);
  const db = startFireBase();

  //Get Items from Server
  useEffect(() => {
    const getItems = async() => {
      const itemsFromServer = await fetchItems();
      setItems(itemsFromServer);
    }
    getItems();
  });

  // Fetch Items
  const fetchItems = async () => {
    const dbref = ref(db);
    const snapshot = await get(child(dbref, 'Item/'));
    const dataObj = snapshot.val();
    const dataArr = [];
    for (let data in dataObj) {
      dataArr.push(dataObj[data])
    }
    return dataArr;
  }

  //Add Items
  const onAddItem = (item) => {
    set(ref(db, 'Item/' + item.name), item);
    setItems([...items,item]);
    alert('Item Added');
  }

      /* Deleting Variation */

  const onDeleteItem = (name) => {
    remove(ref(db, 'Item/' + name));
    setItems(items.filter((item) => 
        item.name !== name
    ));

    alert('Item Deleted');
  }

  return (
    <div className="App">
      <Header/>
      <AddItem onAddItem={onAddItem}/>
      <Items items={items} onDeleteItem={onDeleteItem}/>
    </div>
  );
}

export default App;
