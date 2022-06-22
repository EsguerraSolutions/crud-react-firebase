const Navbar = ({ onToggleMode , appMode }) => {
  return (
    <div id='navbar'>
        <button type='button' className="btn btn-primary nav-buttons" onClick={() => onToggleMode('add')}>Add Item</button>
        <button type='button' className="btn btn-success nav-buttons" onClick={() => onToggleMode('get')}>View Items</button>
        {appMode === 'edit' && <button type='button' className="btn btn-warning active nav-buttons" aria-pressed="true" id="edit-button">Edit Item</button>}
    </div>
  )
}

export default Navbar