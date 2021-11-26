import "./ListSmth.css";
import { Link } from "react-router-dom";

function Item(props) {
  function handleDelete(id) {
    props.deleteItem(id);
  }

  return (
    <div className="grid-elements">
      {props.isSingleItemView ? (
        <div>
          <div className="itemName">Eseme nimi: {props.name}</div>
          <div className="itemPrice">Hind: {props.price}</div>
          <div className="itemCategory">Kategooria: {props.category}</div>
        </div>
      ) : (
        <Link to={`/item/${props.id}`}>
          <div className="itemName">Eseme nimi: {props.name}</div>
          <div className="itemPrice">Hind: {props.price}</div>
          <div className="itemCategory">Kategooria: {props.category}</div>
        </Link>
      )}
      {props.isAddToCart ? (
        <div>
          <button>Lisa Ostukorvi</button>
        </div>
      ) : (
        <div>
          <button onClick={() => handleDelete(props.id)}>Kustuta</button>
          <Link to={`/edit-item/${props.id}`}>
            <button>Muuda</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Item;
