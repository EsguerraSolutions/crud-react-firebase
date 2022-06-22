const Navbar = ({ onToggleMode , appMode }) => {
  return (
    <div id='navbar'>
        <button type='button' className="btn btn-primary" onClick={() => onToggleMode('add')}>Add Item</button>
        <button type='button' className="btn btn-success" onClick={() => onToggleMode('get')}>View Items</button>
        {appMode === 'edit' && <button type='button' className="btn btn-warning active" aria-pressed="true" id="edit-button">Edit Item</button>}
    </div>
  )
}

export default Navbar