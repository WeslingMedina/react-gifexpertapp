import react, {useEffect, useState} from 'react';
//movido al useFetchGifs
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

const GifGrid = ({category}) => {
    //este state es movido al useFetchGifs
    // const [images, setImages] = useState([]);
    //solo usando el loading
    //para renombrar un valor en la destructuración colocamos data:images
    const {data:images, loading} = useFetchGifs(category);
    

    //el useEffect lo movemos al custom hook useFetchGifs
    // useEffect ( () => {
    //     //usando el helper geGifs que retorna una promesa
    //     getGifs(category)
    //     .then(imgs => setImages(imgs));
    //     //manera corta, debido a que el argumento de la funcion e imgs son solo una se puede hacer de la siguente forma, siempre cuando tengamos un solo argumento y se llamen igual
    //     //.then(setImages);
    //     //con [] lo que se coloca dentro es una lista de dependencias, pero sí lo dejamos vacío el codigo dentro de este useEffect solo se ejecuta una vez, cuando se renderiza el componente es un componentDidMount
    //     //cuando colocamos un argumento dentro [] lo que decimo es que useEffect se vuelva a ejecutar cuando ese argumento cambie, en este caso que se vuelva a ejectuar useEffect cuando la categoria cambie, sino que no pase esto, y de momento la categoria no cambia a menos que lo hagamos por consola
    // },[category]);

    //moviendo función a un helper getGifs.js
    // //api key generated -> QoFnYvTMXgY3hUP4fKTXO2D3OTovQO7h
    // const getGifs = async () => {
    //     //usamos encodeURI porque la categoria puede tener espacios ejemplo one punch y si lo dejamos asi no funciona con encodeURI reemplaza los espacios por lo que sea necesario para que el url funcione
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=QoFnYvTMXgY3hUP4fKTXO2D3OTovQO7h`;
    //     const resp = await fetch(url);
    //     const {data} = await resp.json();
    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             //el signo de interrogación pregunta de qu sí existe downsized_medium pues hagao uso de es key
    //             url: img.images?.downsized_medium.url
    //         }
    //     });
    //     console.log(gifs);
    //     setImages(gifs);
    // }
    
    return (
        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>
            {/* {loading ? <p>Loading</p> : null} */}
            {/* lo de arriba es lo mismo que lo de abajo el operador el operador and lo usamos para evaluar una condición basicamente lo que dice es que si loading es true me cargue un parrafo y si no es true que on haga nada */}
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    images.map(img => 
                        <GifGridItem 
                            key={img.id}
                            //podemos destructurar los parametros pasados con spread y lo que manda es el elemento id,title,.. no el objeto completo
                            {...img}
                        />
                    )
                }
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;