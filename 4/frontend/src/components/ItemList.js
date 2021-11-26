import Item from "./Item";

function ItemList(props) {
  function deleteItem(id) {
    props.onDeleteItem(id);
  }

  return (
    <div className="grid">
      {props.items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          category={item.category}
          isAddToCart={props.isAddToCart}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
}

export default ItemList;
