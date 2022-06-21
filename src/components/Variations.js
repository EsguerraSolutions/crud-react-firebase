const Variations = ({ variations }) => {

  const tableBody = variations.map((variation) => {
    return (
      <tbody key={variation.variationName}>
        <td>{variation.variationName}</td>
        <td>{variation.price}</td>
        <td>{variation.cost}</td>
        <td>{variation.stockAmount}</td>
        <td>Edit</td>
        <td>Delete</td>
      </tbody>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Variation</th>
          <th>Price</th>
          <th>Cost</th>
          <th>Stock</th>
          <th colspan="2">Actions</th>
        </tr>
      </thead>
      {tableBody}
    </table>
  )
}

export default Variations