//pagina para animaciones -> https://animate.style/
import react, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    /* const handleAdd = () => {
        setCategories([...categories,"Naruto"]);
    } */
    
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
        
            <ol>
                {
                    // el map recibe dos valores el elemento y un indice (category, i)
                    categories.map(category => 
                        <GifGrid 
                            key = {category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;