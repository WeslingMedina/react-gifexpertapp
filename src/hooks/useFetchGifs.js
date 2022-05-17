//para declarar un custom hook el nombre empieza con 'use' tales como useState, useContext etc.
//los custom hooks son funciones
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  //los hooks pueden tener estados
  //declaron un objeto como estado el cual posee data y un loading
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  //los useEffect no pueden ser async
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({ data: imgs, loading: false });
    });
  }, [category]);

  //el timeout para despues de ciertos segundos, se ejecute algo
  // setTimeout( () => {
  //     setState({
  //         data: [1,2,3,4,5,6,7],
  //         loading: false
  //     })
  // },3000);
  return state; //{data:[],loading:true};
};
