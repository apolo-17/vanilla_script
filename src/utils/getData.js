const API = "http://rickandmortyapi.com/api/character/";

const getData = async id => {
    const apiURL = id ? `${API}${id}` : API;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Fetch catch: ", error);
    }
};

export default getData;