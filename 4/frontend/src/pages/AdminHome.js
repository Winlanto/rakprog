import ItemList from "../components/ItemList";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function AdminHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setLoadedItems(data);
      });
  }, []);

  if (isLoading) {
    return <div>Laeb...</div>;
  }

  function makeDeleteRequest(id) {
    fetch("http://localhost:8080/delete-item/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoadedItems(data);
      });
  }

  return (
    <div>
      <Link to="/add-item">
        <button><h2>Lisa uus ese</h2></button>
      </Link>
      <ItemList
        onDeleteItem={makeDeleteRequest}
        isAddToCart={false}
        items={loadedItems}
      />
    </div>
  );
}

export default AdminHome;
