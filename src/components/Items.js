const Items = ({ items }) => {
    const tableBody = items.map((item) => {
      return (
        <tbody key={item.name}>
            {
              item.variations.map((variation,index) => {
                return (
                    <tr key={variation.name}>
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
                      <td>Edit</td>
                      <td>Delete</td>
                    </tr>
                );
              })
            }
        </tbody>
      );
    });
  return (
    <table>
      <thead>
        <tr>
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
  );
}

export default Items;