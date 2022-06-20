const VariationsList = ({ variationName , setVariationName , hasVariations , setHasVariations , isNewVariation , setIsNewVariation }) => {

    const toggleVariations = (e) => {
        const checked = e.currentTarget.checked;
        setHasVariations(checked);
        setIsNewVariation(checked);
    }

    return (
        <div className="variations">

            {/* Check Variations*/}
            <div className='form-control form-control-check'>
                <label>Variations</label>
                <input
                type='checkbox'
                checked={hasVariations}
                value={hasVariations}
                onChange={(e) => toggleVariations(e)}
                />
            </div>

            {/* Variations List if Item has Variation */}

            { hasVariations && (
                <div className="form-control">
                    <label for="variation-list">Select Variation</label>
                        <select id="variation-list" name="variations" onChange={(e) => e.target.value === "new-variation" ? setIsNewVariation(true) : setIsNewVariation(false) }>
                            <option value="new-variation" selected>New Variation</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                </div>
            ) }

            {/* Enter Variation Name if New Variation*/}
            { (hasVariations && isNewVariation) && (
                <div className="form-control">
                    <label>Variation Name</label>
                    <input
                        type="text"
                        placeholder="Variation"
                        value={variationName}
                        onChange={(e) => setVariationName(e.target.value)}
                    />
                </div>
            ) }

        </div>
    )
}

export default VariationsList;