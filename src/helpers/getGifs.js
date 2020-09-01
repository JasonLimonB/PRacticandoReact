export const getGifs = async(cat)=>{
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(cat) }&api_key=dX5Yn5ChVPLM0t41qHKq3aCLCwDMXMQY`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            image : img.images?.downsized_medium.url
        }
    });
    return gifs;
}