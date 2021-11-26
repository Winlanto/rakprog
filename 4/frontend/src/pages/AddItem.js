import AddItemForm from "../components/AddItemForm"
import '../components/Form.css';

function AddItem(){

    function itemSubmitHandler(item){
        fetch('http://localhost:8080/items', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {'Content-Type' : 'application/json'}      
        });
    }

    return(
        <div className="container">
            <h1>Lisa uus ese</h1>
            <AddItemForm onAddItem={itemSubmitHandler}/>
        </div>
    )
}

export default AddItem