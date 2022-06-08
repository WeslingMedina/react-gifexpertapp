import {useFetchGifs} from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';
describe("Pruebas en ele hook useFetchGifs", () => {

    test("debe de retornar el estado inicial", async () => {

        //importamos nuestro custom hook 
        //para hacer pruebas en el hook tenemos que usar un paquete de npm -> npm install --save-dev @testing-library/react-hooks

        // const {data, loading}  = useFetchGifs('One Punch');
        //para renderizar el hook lo hacemos con el paquete instalado, usamos la función renderHook y dentro de una función anonima colocamos ahora sí nuestro hook a renderizar
        //destructuramos los result
        const {result,waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        //el result.current posee nuestros elementos que retornamos {data:[],loading:true} en el custom hook los cuales son data y loading
        //data y loading son los valores iniciales lo que retorna o sea data = [] y loading = true
        const {data,loading} = result.current;
        //esta funcion es usada en la segunda prueba porque aqui el componente no se ha desmontado
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test("debe de retornar un arreglo de images y el loading en false", async() => {
        //aqui tenemos que esperar los resultados y lo hacemos usando waitForNextUpdate lo cual es una promesa
        // const {result,waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        const {result,waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        //para usar el waitForNextUpdate primero hacemos el test aync y despues hacemos el await de la función 
        //el hacer el await waitForNextUpdate() nos da error diciendo que el componente esta desmontado esto es porque tenemos dos una vez termina la primera prueba el componente es desmontando y cuando venimos a esta prueba nos da el error esto es parte de la libreria
        //para arreglar este error de momento lo que tenemos que hacer es colocar la funcion waitForNexUpdate en el primer test puesto que ahi el componente no se ha desmontado aun
        //colocamos timeout para evitar error
        await waitForNextUpdate({timeout:3000});
        const {data,loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});