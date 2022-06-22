const CategoryToggling = ({ category , setCategory , isNewCategory , setIsNewCategory}) => {

    const setToExistingCategory = (category) => {
        setIsNewCategory(false);
        setCategory(category);
    }

    const setToNewCategory = () => {
        setIsNewCategory(true);
        setCategory('');
    }
    
    return (
        <div className="categories">

            {/* Category List*/}
            <div className="form-group">
                <label for="category-list">Select Category</label>
                    <select id="category-list" name="categories" className="form-select" value={category} onChange={(e) => e.target.value === "new-category" ? setToNewCategory() : setToExistingCategory(e.target.value) }> 
                        <option value="new-category" selected>New Category</option>
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>
                    </select>
            </div>

            {/* Enter Category Name if New Category*/}
            { isNewCategory && (
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
            ) }

        </div>
    )
}

export default CategoryToggling;