import AddCategory from "../../components/AddCategory";
import { shallow } from "enzyme";
describe("pruebas en el componente <AddCategory/>", () => {
  //jest ofrece crear una oficion para no tener el () => {} vacio
  //const setCategories = () => {};
  //jest.fn() es lo mismo a lo de arriba, la diferencia es que jest.fn() posee diferentes propiedades es mas que una función vacia
  const setCategories = jest.fn();
  let wrapper;

  //el before each se llama antes de cada prueba y hacemos nuestro código
  beforeEach(() => {
    //limpiamos el mock o simulaciónes
    jest.clearAllMocks();
    //debido a que en la tercera prueba no queremos que el inputvalue tenga un valor tenemos que resetearlo (el inputvalue tiene un valor porque en la segunda prueba lo seteamos para hacer pruebas)
    //reseteamos el componente de la siguiente manera
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });



  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de text", () => {
    const input = wrapper.find("input");

    //simulando el onChange del input
    //como la función change del componente AddCategory recibe un evento(e), entonces tenemos que mandarlo aqui de la siguiente manera
    //como la funcion recibe un parametro e esto lo simulamos con el objeto {}, el target y el value y de esta forma creamos nuestro propio evento e
    const value = "hola mundo";
    //si el key y value se llaman igual solo mandamos un nombre ejemplo {value:value} es igual a {value}
    input.simulate("change", { target: { value } });
    //el trim elimina los espacios a la izquierda y derecha de los strings
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test("No debe de postear la informacińo on submit", () => {
    //al igual que el metodo change del test de arriba el metodo submit envia el paramentro e por lo tanto esto lo simulamos con {} y como se usa la función preventdefault de e lo simulamos con una funcón vacía
    wrapper.find('form').simulate('submit',{preventDefault(){}});

    //y para testear que hizo el llamado a la funcón setCategories usamos una propieda de jest.fn()
    //una funcionalidad del just.fn() es que podemos saber si ha sido llamada la funcion con toHaveBeenCalled
    //.not.toHaveBeenCalled() para decir que no se haya llamado y .toHaveBeenCalled() para decir que se haya llamado
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe de llamar el setcategories y limpiar la caja de texto',()=>{
    //1. simular el inputChange
    //2. simular el submit
    //3. setCategories se debe haber llamado
    //4. el valor del input debe de estar ''
    const value = "hola mundo";
    //1
    wrapper.find('input').simulate("change",{target:{value}});
    //expect(wrapper.find("p").text().trim()).toBe(value);
    //2
    wrapper.find("form").simulate("submit",{preventDefault(){}});
    //3
    expect(setCategories).toHaveBeenCalled();
    //existe otro metodo como el toHvaBeenCalledTimes(1) el argumento es las veces que suponemos que se llamo en este caso una vez de
    //para evaluar que una función haya llamado otra funcion usamos otro metodo, esto porque setCategories llama otra función que es un callback
    //lo hacemos de la siguiente manera
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    //4
    expect(wrapper.find("input").prop('value')).toBe('');
  })
});
