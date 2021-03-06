import CategoryList from '../components/CategoryList';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Categories(){

    const [isLoading, setIsLoading] = useState(true);
    const [loadedCategories, setLoadedCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/categories').then(res => {
            return res.json()
        }).then(data =>{
            console.log(data)
            setIsLoading(false)
            setLoadedCategories(data)
    }   )
    }, [])


    if (isLoading){
        return(<div>Laeb...</div>)
    }

    return (
        <div>
            <Link to="/add-category">
                <button><h2>Lisa uus kategooria</h2></button>
            </Link>
            <CategoryList categories={loadedCategories} />
        </div>
    )
}

export default Categories;