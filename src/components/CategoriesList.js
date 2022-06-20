const CategoriesList = ({ category , setCategory , isNewCategory , setIsNewCategory}) => {
    
    return (
        <div className="categories">

            {/* Category List*/}
            <div className="form-control">
                <label for="category-list">Select Category</label>
                    <select id="category-list" name="categories" onChange={(e) => e.target.value === "new-category" ? setIsNewCategory(true) : setIsNewCategory(false) }> 
                        <option value="new-category" selected>New Category</option>
                        <option value="foods">Foods</option>
                        <option value="drinks">Drinks</option>
                        <option value="desserts">Desserts</option>
                    </select>
            </div>

            {/* Enter Category Name if New Category*/}
            { isNewCategory && (
                <div className="form-control">
                    <label>Category Name</label>
                    <input
                        type="text"
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
            ) }

        </div>
    )
}

export default CategoriesList;