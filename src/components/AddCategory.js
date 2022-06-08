import react, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //aqui es util usar el callback de la funcín setCategories debido a que no tengo categories y el callback ya posee ese valor anterior
        //con trim validamos que el campo no esté vacio
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue,...cats]);
            setInputValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* usado para asegurarnos que en las pruebas cuando simulamos el change este inputValue realmente este cambiando */}
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );

}

AddCategory.propTypes = {
    //de esta forma hacemos una función requerida
    setCategories : PropTypes.func.isRequired,
}
export default AddCategory;