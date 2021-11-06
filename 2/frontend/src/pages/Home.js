import Item from '../components/Item';

function Home(){
    return (
        <div>
            Tere
            <Item name="Item 1" price="10" category="mobile" />
            <Item name="Item 2" price="20" category="laptop" />
        </div>
    )
}

export default Home;