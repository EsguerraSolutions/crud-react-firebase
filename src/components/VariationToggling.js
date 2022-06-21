const VariationToggling = ({ variationName , setVariationName , hasVariations , setHasVariations}) => {

    return (
        <div className="variations">

            {/* Check Variations*/}
            <div className='form-control form-control-check'>
                <label>Variations</label>
                <input
                type='checkbox'
                checked={hasVariations}
                value={hasVariations}
                onChange={(e) => setHasVariations(e.currentTarget.checked)}
                />
            </div>

            {/* Enter Variation Name if New Variation*/}
            { (hasVariations) && (
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

export default VariationToggling;