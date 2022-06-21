const Items = ({ items }) => {
  const tableBody = items.map((item) => {
    return (
      <tbody key={item.name}>
        {
          item.variations.map((variation) => {
            return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{variation.variationName}</td>
                  <td>{variation.price}</td>
                  <td>{variation.cost}</td>
                  <td>{variation.stockAmount}</td>
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
          <th>Stock Amount</th>
        </tr>
      </thead>
        {tableBody}
    </table>
  );
}

export default Items;

    // {/* <div>
    //     { items.map((item) => (
    //         <Item item={item} key={item.id}/>
    //     )) }
    // </div> */}