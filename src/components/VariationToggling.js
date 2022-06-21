const VariationToggling = ({ variationName , setVariationName , hasVariations , setHasVariations}) => {

    const toggleVariation = (checked) => {
        setVariationName('');
        setHasVariations(checked);
    }

    return (
        <div className="variations">

            {/* Check Variations*/}
            <div className='form-check'>
                <label className="form-check-label">Variations</label>
                <input
                type='checkbox'
                checked={hasVariations}
                value={hasVariations}
                onChange={(e) => toggleVariation(e.currentTarget.checked)}
                className="form-check-input"
                />
            </div>

            {/* Enter Variation Name if New Variation*/}
            { (hasVariations) && (
                <div className="form-group">
                    <label>Variation Name</label>
                    <input
                        type="text"
                        placeholder="Variation"
                        value={variationName}
                        onChange={(e) => setVariationName(e.target.value)}
                        className="form-control"
                    />
                </div>
            ) }

        </div>
    )
}

export default VariationToggling;