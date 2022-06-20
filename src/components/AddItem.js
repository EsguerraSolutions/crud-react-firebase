import { useState } from 'react';

import VariationsList from './VariationsList';
import CategoriesList from './CategoriesList';

const AddItem = () => {

    {/* Define Item Description Variables */}

    const [ name , setName ] = useState('');

    const [ category , setCategory ] = useState('');
    const [ isNewCategory , setIsNewCategory ] = useState(true);

    const [ variations , setVariations ] = useState([]);

    const [ variationName , setVariationName ] = useState('');
    const [ hasVariations , setHasVariations ] = useState(false);
    const [ isNewVariation , setIsNewVariation ] = useState(false);

    const [ price , setPrice ] = useState('');
    const [ cost , setCost ] = useState('');
    const [ stockAmount , setStockAmount ] = useState('');

    
    {/* Define On Submit Event */}

    const onSubmit = (e) => {
        e.preventDefault();
    
        if (!name) {
          alert('Please add an item name')
          return
        }

        if (!category && isNewCategory) {
            alert('Please add an category name')
            return
        }
    
        setName('');
        setCategory('');
        // setVariationName('');
        // setHasVariations(false);
        //setIsNewVariation(false);
        // setPrice('');
        // setCost('');
        // setStockAmount('');
    }

    {/* Adding Variation */}
    
    const onAddVariation = () => {

        if (!variationName && isNewVariation) {
          alert('Please add a variation name')
          return
        }

        const variation = { variationName , price , cost , stockAmount };

        setVariations([...variations,variation]);
    
        // onAdd({ text, day, reminder })
        
        setVariationName('');
        setPrice('');
        setCost('');
        setStockAmount('');
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

            {/* Item Categories*/}
            <CategoriesList category={category} setCategory={setCategory} isNewCategory={isNewCategory} setIsNewCategory={setIsNewCategory}/>

            {/* Item Variations List*/}
            <VariationsList variationName={variationName} setVariationName={setVariationName} hasVariations={hasVariations} setHasVariations={setHasVariations} isNewVariation={isNewVariation} setIsNewVariation={setIsNewVariation}/>

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

        <input type='submit' value='Save Item'/>      
        </form>

        { /* Add Variation Button */ }

        { hasVariations && (
            <input type='button' value='Save Variation' onClick={() => onAddVariation()}/>  
        ) }

        { /* Delete Variation Button */ }

        { (isNewVariation === false && hasVariations) && (
            <input type='button' value='Delete Variation'/>  
        ) }

        </div>
    );
}

export default AddItem