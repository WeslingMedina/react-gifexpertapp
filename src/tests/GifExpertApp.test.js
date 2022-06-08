import GifExpertApp from "../GifExpertApp";
import {shallow} from "enzyme";
describe("Pruebas en el componente <GifExpertApp/>", () => {

    test("hacer match con el snapshot", () => {
       const wrapper = shallow(<GifExpertApp/>); 
       expect(wrapper).toMatchSnapshot();
    });

    test("debe de mostrar una lista de categorias", () => {
        const categories = ["One Punch", "Dragon Ball"];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>); 
        expect(wrapper).toMatchSnapshot();
        //buscamos en el componente que tengamos dos GifGrid para darnos cuenta de que se esta mostrando bien la lista, dos porque son dos categories las que estamos pasando
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});