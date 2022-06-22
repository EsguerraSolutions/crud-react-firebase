const Variations = ({ variations , onDeleteVariation }) => {

  const tableBody = variations.map((variation) => {
    return (
      <tbody key={variation.variationName}>
        <td>{variation.variationName}</td>
        <td>{variation.price}</td>
        <td>{variation.cost}</td>
        <td>{variation.stockAmount}</td>
        <td><button type="button" className="btn btn-danger active delete-var" onClick={() => onDeleteVariation(variation.variationID)}><i className="fa-solid fa-trash-can"></i></button></td>
      </tbody>
    );
  });

  return (
    <div className="variations-table table-responsive">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Variation</th>
          <th>Price</th>
          <th>Cost</th>
          <th>Stock</th>
          <th>Delete</th>
        </tr>
      </thead>
      {tableBody}
    </table>
    </div>
  )
}

export default Variations