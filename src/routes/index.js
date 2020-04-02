import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

//Se genera un objeto que dentro se establescan las rutas y se les va hacer render a cada una de ellas
const routes = {
    //con los dos puntos le indicas que esa ruta va hacer render de HOME
    "/": Home,
    //en este caso le indicas que el id sera dinamico, por eso le pones los dos puntos dentro de la ruta
    "/:id": Character,
    "/contact": "Contact"
};
//Async ??
const router = async() => {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content");

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
};

export default router;