import  galeria from "./Galery.js";

window.onload = async () => {
    const request = await fetch("data.json");
    const result = await request.json();

}


