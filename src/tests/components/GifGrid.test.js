import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
//con jest.mock se finge una llamada al archivo o ruta y controlar la información retornada, esto porque necesitamos tener informacion en el componente
jest.mock("../../hooks/useFetchGifs");

describe("pruebas en el componente <GifGrid/>", () => {
  const category = "One Punch";
  test("hacer match con el snapshot", () => {
    //con solo le jest.mock, no funciona ocupamos falsear la data haciendo lo siguiente
    //dentro del mockReturn inicializamos el objeto que ocupamos en este caso es {data: [],loading: true} este objeto esta en el hook useFetchGifs.js
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imágenes usando el custom hook useFetchGifs", () => {
    //mock => fingir o falsear algo
    //falseando las imagenes
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.png",
        title: "Cualquier cosa",
      },
    ];
    //ya en esta parte de la prueba el loading deberia ser false porque ya posee data
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    // expect(wrapper).toMatchSnapshot();
    //validando que el parrafo ya no este en cargando esto para probar el loading
    // o sea que si no existe un p ya no está cargando
    expect(wrapper.find("p").exists()).toBe(false);
    //verificando que la información se muestre esto se hace buscando si existe un GifGridItem dentro del GifGrid component
    //para buscar un componente lo hacemo con el find y verificamos que la cantidad de GifGridItem renderizados sean iguales a la cantidad de gifs que tenemos, esto porque cada gif es un GifGridItem
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
