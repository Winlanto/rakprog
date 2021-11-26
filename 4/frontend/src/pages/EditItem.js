import { useState, useEffect, useRef } from "react";

function EditItem() {
const [item, setItem] = useState(null);
const nameInputRef = useRef()
const priceInputRef = useRef()
const categoryInputRef = useRef()

  useEffect(() => {
    const id = window.location.href.split("/edit-item/")[1];
    fetch("http://localhost:8080/view-item/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setItem(data);
      });
  }, []);

  if (!item) {
    return <div>Laeb...</div>;
  }

    function formSubmitHandler(e){
        e.preventDefault();
        console.log("vormi sisestus 6nnestus");
        const nameValue = (nameInputRef.current.value);
        const priceValue = (priceInputRef.current.value);
        const categoryValue = (categoryInputRef.current.value);
        
        const itemSubmitted = {
            id: item.id,
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }

        fetch('http://localhost:8080/edit-item', {
            method: 'POST',
            body: JSON.stringify(itemSubmitted),
            headers: {'Content-Type' : 'application/json'}      
        });

    }

  return (
  <form onSubmit={formSubmitHandler}>
    <label htmlFor="name">Eseme nimi</label><br />
    <input id="name" type="text"ref={nameInputRef} required placeholder="nimi" defaultValue = {item.name}/><br />
    <label htmlFor="price">Eseme hind</label><br />
    <input id="price" ref={priceInputRef} type="number" required placeholder="hind" defaultValue = {item.price}/><br />
    <label htmlFor="category">Eseme kategooria</label><br />
    <input id="category" type="text" ref={categoryInputRef} required placeholder="kategooria" defaultValue = {item.category}/><br />
    <button>Sisesta uus ese</button>
</form>
  );
  
}

export default EditItem
