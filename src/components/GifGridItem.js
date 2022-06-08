import react from 'react';
import {PropTypes} from 'prop-types';

const GifGridItem = ({title,url}) => {
    // console.log(id,title,url);
    return (
        //como estamos trabajando en .js no podemos usar la palabra reservada class que es de html, por lo tanto, se decidió usar className en vez de class
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
}
GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifGridItem;