//pagina para animaciones -> https://animate.style/
import react, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);
    /* const handleAdd = () => {
        setCategories([...categories,"Naruto"]);
    } */
    
    return(
        <>
        <div className="wrapper">
            <h1 className="right">Costa Rica, 8 de Junio de 2022</h1>
            <p>Asunto: La dedicación de una canción</p>
            <br/>
            <p>Srta. Sara</p>
            <p>Directora general de GOAT</p>
            <p>Se le ha realizado este sitio web por motivos de que escuche la siguiente canción</p>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/sruVq3ZrmPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Saludos cordiales</p>
            <p>Wesling Hernández Medina</p>
        </div>
            {/* <h2>GifExpertApp</h2>
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
            </ol> */}
        </>
    );
}

export default GifExpertApp;