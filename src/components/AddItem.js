import { useState } from 'react';

import VariationToggling from './VariationToggling';
import CategoryToggling from './CategoryToggling';
import Variations from './Variations';

const AddItem = ({ onAddItem }) => {

    /* Define Item Description Variables */

    const [ name , setName ] = useState('');

    const [ category , setCategory ] = useState('');
    const [ isNewCategory , setIsNewCategory ] = useState(true);

    const [ variations , setVariations ] = useState([]);
    const [ variationName , setVariationName ] = useState('');
    const [ hasVariations , setHasVariations ] = useState(false);

    const [ price , setPrice ] = useState('');
    const [ cost , setCost ] = useState('');
    const [ stockAmount , setStockAmount ] = useState('');

    const priceCheck = () => {
        if (!(Number(price)) || (Number(price)) < 0) {
            alert('Please add a valid price')
            return            
        }
    }

    const costCheck = () => {
        if (!(Number(cost)) || (Number(cost)) < 0) {
            alert('Please add a valid cost')
            return            
        }
    }

    const stockAmountCheck = () => {
        if (!(Number(stockAmount)) || (Number(stockAmount)) < 0) {
            alert('Please add a valid amount of stock')
            return            
        }
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
            priceCheck();
            costCheck();
            stockAmountCheck();
            variations.push({
                variationName : 'No Variation',
                price,
                cost,
                stockAmount
            });
        }

        onAddItem({ name , category , variations});
    
        setName('');
        setCategory('');
        setIsNewCategory(true);
        setVariations([]);
        variationReset();
    }

    /* Adding Variation */
    
    const onAddVariation = () => {

        if (!variationName) {
          alert('Please add a variation name')
          return
        }

        const newVariation = { variationName , price , cost , stockAmount };

        setVariations([...variations,newVariation]);
        
        variationReset();
    }

    return (
        <div>
        <form className="add-item-form" onSubmit={onSubmit}>

            {/* Item Name*/}
            <div className="form-control">
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            {/* Item Categories Toggleable*/}
            <CategoryToggling category={category} setCategory={setCategory} isNewCategory={isNewCategory} setIsNewCategory={setIsNewCategory}/>

            {/* Item Variations Toggleable*/}
            <VariationToggling variationName={variationName} setVariationName={setVariationName} hasVariations={hasVariations} setHasVariations={setHasVariations}/>

            {/* Item Price*/}
            <div className="form-control">
                <label>Price</label>
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>

            {/* Item Cost*/}
            <div className="form-control">
                <label>Cost</label>
                <input
                    type="text"
                    placeholder="Cost"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
            </div>

            {/* Item Stock Amount*/}
            <div className="form-control">
                <label>Amount in Stock</label>
                <input
                    type="text"
                    placeholder="Amount in Stock"
                    value={stockAmount}
                    onChange={(e) => setStockAmount(e.target.value)}
                />
            </div>

            { /* Add Variation Button */ }

            { hasVariations && (
                <input type='button' value='Save Variation' onClick={() => onAddVariation()}/>  
            ) }

            { /* Monitoring Variations List */}

            <Variations variations={variations}/>

            { /* Submit New Item */}

            <input type='submit' value='Save Item'/>

        </form>

        </div>
    );
}

export default AddItem