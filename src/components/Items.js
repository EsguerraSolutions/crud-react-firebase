const Items = ({ items , onDeleteItem , onToggleMode , onGetVariationData }) => {

      /* Toggling to Edit Mode*/

      const onClickEdit = (id, name, category, variation) => {

        onToggleMode('edit');
        const forEditVariationData = {id, name, category, ...variation};
        onGetVariationData(forEditVariationData);
    
    }

    const tableBody = items.map((item) => {
      return (
        <tbody key={item.id}>
            {
              item.variations.map((variation,index) => {
                return (
                    <tr key={variation.variationID}>
                      { index === 0 && (
                        <>
                          <td rowspan={item.variations.length}>{item.name}</td>
                          <td rowspan={item.variations.length}>{item.category}</td>
                        </>
                      ) }
                      <td>{variation.variationName}</td>
                      <td>{variation.price}</td>
                      <td>{variation.cost}</td>
                      <td>{variation.stockAmount}</td>
                      <td><button type="button" className="btn btn-warning" onClick={ () => onClickEdit(item.id, item.name, item.category, variation) } ><i className="fa-solid fa-pen-to-square"></i></button></td>
                      <td><button type="button" className="btn btn-danger" onClick={ () => onDeleteItem(item.id) } ><i className="fa-solid fa-trash-can"></i></button></td>

                    </tr>
                );
              })
            }
        </tbody>
      );
    });
  return (
    <div className="table-responsive">
    <table className="table items-table">
      <thead>
        <tr className="table-dark">
          <th>Name</th>
          <th>Category</th>
          <th>Variation</th>
          <th>Price</th>
          <th>Cost</th>
          <th>Stock</th>
          <th colspan="2">Actions</th>
        </tr>
      </thead>
        {tableBody}
    </table>
    </div>
  );
}

export default Items;