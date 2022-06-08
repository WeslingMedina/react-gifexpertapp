import GifGridItem from "../../components/GifGridItem";
import {shallow} from "enzyme";
describe("testing gifGridItem", () => {
    const data = {
        title : "Un titulo", 
        url : "https://localhost/logo.png"
    }
    const wrapper = shallow(<GifGridItem {...data}/>);

    test("should show the component in a right way",() => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un párrafo con el title del objeto data',() => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(data.title);
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.html());//si colocamos el .html() podemos ver el objeto completo
        // console.log(img.props());//se puede ver las propiedades de la imagen, el src y alt en un objeto
        // console.log(img.prop('src'));//con esto sacamos una propiedad en especifico tambien se puede hacer con el .props().src

        expect(img.prop('src')).toBe(data.url);
        expect(img.prop('alt')).toBe(data.title);
    });

    //evaluando las clases del div principal del hook GifGridItem
    test("debe de tener la clase animate__fadeIn", () => {
        const div = wrapper.find('div');
        expect(div.props().className.includes("animate__fadeIn")).toBe(true);
    });

});