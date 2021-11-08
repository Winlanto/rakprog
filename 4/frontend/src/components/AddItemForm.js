import './AddItemForm.css'
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
            <label>Eseme nimi</label><br />
            <input ref={nameInputRef} type="text" required placeholder="nimi"/><br />
            <label>Eseme hind</label><br />
            <input ref={priceInputRef} type="number" required placeholder="hind"/><br />
            <label>Eseme kategooria</label><br />
            <input ref={categoryInputRef} type="text" required placeholder="kategooria"/><br />
            <button>Sisesta uus ese</button>
        </form>
    )
}

export default AddItemForm;