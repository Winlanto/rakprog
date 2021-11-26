import {useRef} from "react"

function AddItemForm(props){

    const nameInputRef = useRef()
    const priceInputRef = useRef()
    const categoryInputRef = useRef()

    function formSubmitHandler(e){
        e.preventDefault();
        console.log("vormi sisestus 6nnestus");
        const nameValue = (nameInputRef.current.value);
        const priceValue = (priceInputRef.current.value);
        const categoryValue = (categoryInputRef.current.value);
        
        const item = {
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }

        props.onAddItem(item)
    }

    return(
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="name">Eseme nimi</label><br />
            <input id="name" type="text"ref={nameInputRef} required placeholder="nimi"/><br />
            <label htmlFor="price">Eseme hind</label><br />
            <input id="price" ref={priceInputRef} type="number" required placeholder="hind"/><br />
            <label htmlFor="category">Eseme kategooria</label><br />
            <input id="category" type="text" ref={categoryInputRef} required placeholder="kategooria"/><br />
            <button>Sisesta uus ese</button>
        </form>
    )
}

export default AddItemForm;