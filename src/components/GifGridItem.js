import react from 'react';


const GifGridItem = ({id,title,url}) => {
    // console.log(id,title,url);
    return (
        //como estamos trabajando en .js no podemos usar la palabra reservada class que es de html, por lo tanto, se decidió usar className en vez de class
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
}


export default GifGridItem;