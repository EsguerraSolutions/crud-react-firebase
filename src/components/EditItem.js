import { useState } from 'react';

const EditItem = ({ variationData , onToggleMode , onEditItem}) => {

    const [ itemID , setItemID ] = useState(variationData.id);
    const [ itemName , setItemName ] = useState(variationData.name);
    const [ itemCategory , setItemCategory ] = useState(variationData.category);
    const [ variationID , setVariationID ] = useState(variationData.variationID);
    const [ variationName , setVariationName ] = useState(variationData.variationName);
    const [ variationPrice , setVariationPrice ] = useState(variationData.price);
    const [ variationCost , setVariationCost ] = useState(variationData.cost);
    const [ variationStockAmount , setVariationStockAmount ] = useState(variationData.stockAmount);

    const invalidPriceCheck = () => {
        const check = !(Number(variationPrice)) || (Number(variationPrice)) < 0 ;
        if (check) {
            alert('Please add a valid price')      
        }
        return check;
    }

    const invalidCostCheck = () => {
        const check = !(Number(variationCost)) || (Number(variationCost)) < 0 ;
        if (check) {
            alert('Please add a valid cost')      
        }
        return check;
    }

    const invalidStockAmountCheck = () => {
        const check = !(Number(variationStockAmount)) || (Number(variationStockAmount)) < 0 ;
        if (check) {
            alert('Please add a valid amount of stock')      
        }
        return check;
    }

    /* Define On Submit Event */

    const onSaveEdit = () => {
    
        if (!itemName) {
            alert('Please add an item name')
            return
        }

        if (!itemCategory) {
            alert('Please add an category name')
            return
        }

        if (invalidPriceCheck() || invalidCostCheck() || invalidStockAmountCheck() ) {
            return
        }

        const editedItemData = {
            name : itemName,
            category : itemCategory
        } 

        const editedVariationData = {
            variationID,
            variationName,
            price : variationPrice,
            cost : variationCost,
            stockAmount : variationStockAmount
        }

        onEditItem(itemID,editedItemData,editedVariationData);
        onToggleMode('get'); 
    }

    return (
    <div className="form-container">
        <form className="edit-item-form">

            {/* Item Name*/}
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="form-control"
                />
            </div>

            {/* Item Categories*/}
            <div className="form-group">
                <label>Category Name</label>
                <input
                type="text"
                placeholder="Category"
                value={itemCategory}
                onChange={(e) => setItemCategory(e.target.value)}
                className="form-control"
                />
            </div>

            {/* Variation Name */}
            <div className="form-group">
                <label>Variation</label>
                <input
                    type="text"
                    placeholder="Variation"
                    value={variationName}
                    onChange={(e) => setVariationName(e.target.value)}
                    className="form-control"
                />
            </div>

            {/* Variation Price*/}
            <div className="form-group">
                <label>Price</label>
                <input
                    type="text"
                    placeholder="Price"
                    value={variationPrice}
                    onChange={(e) => setVariationPrice(e.target.value)}
                    className="form-control"
                />
            </div>

            {/* Variation Cost*/}
            <div className="form-group">
                <label>Cost</label>
                <input
                    type="text"
                    placeholder="Cost"
                    value={variationCost}
                    onChange={(e) => setVariationCost(e.target.value)}
                    className="form-control"
                />
            </div>

            {/* Variation Stock Amount*/}
            <div className="form-group">
                <label>Amount in Stock</label>
                <input
                    type="text"
                    placeholder="Amount in Stock"
                    value={variationStockAmount}
                    onChange={(e) => setVariationStockAmount(e.target.value)}
                    className="form-control"
                />
            </div>

            { /* Submit New Item */}

            <input className='btn btn-warning nav-buttons' type='button' value='Edit Item / Variation' onClick={() => onSaveEdit()}/>
            <input className='btn btn-secondary nav-buttons' type='button' value='Get Back' onClick={() => onToggleMode('get')}/>

        </form>
    </div>
    );
}

export default EditItem