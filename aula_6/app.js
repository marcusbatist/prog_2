const loadData = async (url) => {

    const request = await fetch(url);
    const result =await request.json();

    return result;

}

const createList= (data) => {
    const ul = document.querySelector("ul");
    data.forEach(item => {
        const li = document.createElement("li");
      //  ul.appendChild(li);
      //  li.innerText = item.brand;
        console.log(item);
    });
    
}

window.onload = async () => {

    
    const data = await loadData("data.json");

    data.sort((a,b) => a.type.localeCompare(b.type));


    const ul = createList(data);

}