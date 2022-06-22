import { useState , useEffect } from 'react';

import startFireBase from './services/firebase';
import { ref , set , get , update , remove, child } from 'firebase/database';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Items from './components/Items';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import itemsModel from './models/items.model';

function App() {
  const [ items , setItems ] = useState([]);
  const [ variationData , setVariationData ] = useState({});
  const [ appMode , setAppMode ] = useState('add');
  const db = startFireBase();

  //Get Items from Server
  useEffect(() => {
    const getItems = async() => {
      const itemsFromServer = await fetchItems();
      setItems(itemsFromServer);
    }
    getItems();
  },[]);

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

  /* Setting App Mode */
  const onToggleMode = (mode) => {
    setAppMode(mode);
  }

  /* Add Items */
  const onAddItem = (item) => {
    set(ref(db, 'Item/' + item.id), item);
    setItems([...items,item]);
    alert('Item Added');
  }

  /* Getting Variation Data */
  const onGetVariationData = (variation) => {
    setVariationData(variation);
  } 

  /* Editing Variation */

  const onEditItem = (id, itemDataObj, variationDataObj) => {

    const modifiedItems = items.map((item) => {
        if (item.id === id) {
          return {
            id : id,
            ...itemDataObj,
            variations: item.variations.map((variation)=>{
              if(variation.variationID === variationDataObj.variationID) {
                return {
                  ...variationDataObj
                }
              }

              else {
                return variation;
              }
            })
          }
        }
        
        else {
          return item;
        }
    });
    update(ref(db, 'Item/' + id), itemDataObj);
    update(ref(db, 'Item/' + id + '/variations/' + variationDataObj.variationID), variationDataObj);
    setItems(modifiedItems);

    alert('Item Edited');
  }

  /* Deleting Variation */

  const onDeleteItem = (id) => {
    remove(ref(db, 'Item/' + id));
    setItems(items.filter((item) => 
        item.id !== id
    ));

    alert('Item Deleted');
  }

  return (
    <div className="App">
      <Header/>
      <Navbar  onToggleMode={onToggleMode} appMode={appMode}/>
      { appMode === 'add' && <AddItem onAddItem={onAddItem}/> }
      { appMode === 'get' && <Items items={items} onToggleMode={onToggleMode} onGetVariationData={onGetVariationData} onDeleteItem={onDeleteItem}/> }
      { appMode === 'edit' && <EditItem variationData={variationData} onEditItem={onEditItem} onToggleMode={onToggleMode}/> }
    </div>
  );
}

export default App;
