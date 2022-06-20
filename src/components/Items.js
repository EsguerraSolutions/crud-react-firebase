import Item from './Item.js';

const Items = ({ items }) => {
  return (
    <div>
        { items.map((item) => (
            <Item item={item} key={item.id}/>
        )) }
    </div>
  );
}

export default Items;