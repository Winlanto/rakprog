import './AddCategoryForm.css'
import {useRef} from "react"

function AddCategoryForm(props){

    const nameInputRef = useRef()
    const categoryTypeInputRef = useRef()

    function formSubmitHandler(e){
        e.preventDefault();
        console.log("vormi sisestus 6nnestus");
        const nameValue = (nameInputRef.current.value);
        const categoryTypeValue = (categoryTypeInputRef.current.value);
        
        const category = {
            name: nameValue,
            categoryType: categoryTypeValue
        }

        props.onAddCategory(category)
    }

    return(
        <form onSubmit={formSubmitHandler}>
            <label>Kategooria nimi</label><br />
            <input ref={nameInputRef} type="text" required placeholder="Kategooria nimi"/><br />
            <label>kategooria tüüp</label><br />
            <select ref={categoryTypeInputRef} type="text">
                <option>PREMIUM</option>
                <option>DELUXE</option>
                <option>BASIC</option>
            </select><br />
            <button>Sisesta uus kategooria</button>
        </form>
    )
}

export default AddCategoryForm;