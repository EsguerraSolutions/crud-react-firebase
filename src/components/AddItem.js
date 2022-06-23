import { useState , useEffect } from 'react';

import startFireBase from '../services/firebase';
import { ref , get , child } from 'firebase/database';

import VariationToggling from './VariationToggling';
import Variations from './Variations';

const AddItem = ({ onAddItem }) => {

    /* Define Item Description Variables */
    const db = startFireBase();

    const [ id , setID ] = useState(0);

    const [ name , setName ] = useState('');

    const [ category , setCategory ] = useState('');

    const [ variations , setVariations ] = useState([]);
    const [ variationName , setVariationName ] = useState('');
    const [ hasVariations , setHasVariations ] = useState(false);

    const [ variationID , setVariationID ] = useState(0);
    const [ price , setPrice ] = useState('');
    const [ cost , setCost ] = useState('');
    const [ stockAmount , setStockAmount ] = useState('');

    //Get ID from Server
    useEffect(() => {
    const getLatestID = async() => {
        const idFromServer = await fetchID();
        setID(idFromServer + 1);
    }
    getLatestID();
    },[]);

    // Fetch ID
    const fetchID = async () => {
        const dbref = ref(db);
        const snapshot = await get(child(dbref, 'Item/'));
        const dataObj = snapshot.val();
        const dataArr = [];
        for (let data in dataObj) {
            dataArr.push(dataObj[data])
        }
        const sortedArr = dataArr.sort((a,b) => a.id - b.id);
        const latestID = sortedArr[sortedArr.length-1].id;
        return latestID;
    }

    const invalidPriceCheck = () => {
        const check = !(Number(price)) || (Number(price)) < 0 ;
        if (check) {
            alert('Please add a valid price')      
        }
        return check;
    }

    const invalidCostCheck = () => {
        const check = !(Number(cost)) || (Number(cost)) < 0 ;
        if (check) {
            alert('Please add a valid cost')      
        }
        return check;
    }

    const invalidStockAmountCheck = () => {
        const check = !(Number(stockAmount)) || (Number(stockAmount)) < 0 ;
        if (check) {
            alert('Please add a valid amount of stock')      
        }
        return check;
    }

    const variationReset = () => {
        setVariationName('');
        setPrice('');
        setCost('');
        setStockAmount('');
    }
    
    /* Define On Submit Event */

    const onSubmit = (e) => {
        e.preventDefault();
    
        if (!name) {
          alert('Please add an item name')
          return
        }

        if (!category) {
            alert('Please add an category name')
            return
        }

        if (variations.length === 0 ) {

            if (invalidPriceCheck() || invalidCostCheck() || invalidStockAmountCheck() ) {
                return
            }

            variations.push({
                variationID,
                variationName : variationName === '' ? 'No Variation' : variationName,
                price,
                cost,
                stockAmount
            });
        }

        onAddItem({ id , name , category , variations});
    
        setName('');
        setID(id + 1);
        setCategory('');
        setVariations([]);
        setVariationID(0);
        variationReset();
    }

    /* Adding Variation */
    
    const onAddVariation = () => {

        if (!variationName) {
          alert('Please add a variation name')
          return
        }

        if (invalidPriceCheck() || invalidCostCheck() || invalidStockAmountCheck() ) {
            return
        }

        const newVariation = { variationID , variationName , price , cost , stockAmount };

        setVariations([...variations,newVariation]);
        setVariationID(variationID + 1);
        
        variationReset();
    }

    /* Deleting Variation */

    const onDeleteVariation = (id) => {

        setVariations(variations.filter((variation) => 
            variation.variationID !== id
        ));
        
        variationReset();
    }

    return (
        <div className="form-container">
        <form className="add-item-form" onSubmit={onSubmit}>

            {/* Item Name*/}
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                />
            </div>

            {/* Item Categories*/}
            <div className="form-group">
                <label>Category Name</label>
                <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-control"
                />
            </div>

            {/* Item Variations Toggleable*/}
            <VariationToggling variationName={variationName} setVariationName={setVariationName} hasVariations={hasVariations} setHasVariations={setHasVariations}/>

            {/* Item Price*/}
            <div className="form-group">
                <label>Price</label>
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control"
                />
            </div>

            {/* Item Cost*/}
            <div className="form-group">
                <label>Cost</label>
                <input
                    type="text"
                    placeholder="Cost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    className="form-control"
                />
            </div>

            {/* Item Stock Amount*/}
            <div className="form-group">
                <label>Amount in Stock</label>
                <input
                    type="text"
                    placeholder="Amount in Stock"
                    value={stockAmount}
                    onChange={(e) => setStockAmount(e.target.value)}
                    className="form-control"
                />
            </div>

            { /* Add Variation Button */ }

            { hasVariations && (
                <input type='button' value='Add Variation'  className='btn btn-primary' onClick={() => onAddVariation()}/>  
            ) }

            { /* Monitoring Variations List */}

            { variations.length > 0 ? (

            <Variations variations={variations} onDeleteVariation={onDeleteVariation}/>

            ) : ( <p id="variation-message">'No variations saved. If you want to save multiple variations for your item, you can tick the Variations Checkbox, then input your details and click the "Add Variation" button to add variations'</p> ) }

            { /* Submit New Item */}

            <input className='btn btn-primary' type='submit' value='Save Item'/>

        </form>

        </div>
    );
}

export default AddItem