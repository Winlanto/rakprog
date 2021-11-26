import '../components/ListSmth.css';

function Category(props){
    return (
        <div className="grid-elements">
            <div className="categoryName">Kategooria nimi: {props.name}</div>
            <div className="categoryType">Tüüp: {props.categoryType}</div>
        </div>
    )
}

export default Category;