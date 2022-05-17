export const getGifs = async (category) => {
  //usamos encodeURI porque la categoria puede tener espacios ejemplo one punch y si lo dejamos asi no funciona con encodeURI reemplaza los espacios por lo que sea necesario para que el url funcione
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=QoFnYvTMXgY3hUP4fKTXO2D3OTovQO7h`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      //el signo de interrogación pregunta de qu sí existe downsized_medium pues hagao uso de es key
      url: img.images?.downsized_medium.url,
    };
  });
  //esto retorna una promesa con los elementos por lo tanto donde llamemos esta funciones tenemos que usar el .then
  return gifs;
};
