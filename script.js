const API_URL = 'https://chocolatefeast.herokuapp.com';


const HTMLResponse = document.querySelector("#dinero1");
const ul = document.createDocumentFragment();

fetch( `${API_URL}/api/casos/`)
    .then((response) => response.json())
    .then((casos) => {
        Array.from(casos).forEach(caso => {
            let elem = document.createElement('label');
            elem.appendChild(
                document.createTextNode(`${caso.n} ${caso.c} ${caso.m}`)
            );
            ul.appendChild(elem);
        })
        console.log(casos)
       
        HTMLResponse.appendChild(ul);
    })

function asignar(n, c, m){
    var Dinero = document.getElementById("dinero1")
    var Chocolate = document.getElementById("chocolate")
    var Envoltura = document.getElementById("envolturas")

    Dinero.innerText = `Bobby tiene: ${n} dinero`;
    Chocolate.innerText = `Bobby tiene: ${c} dinero`;
    Envoltura.innerText = `Bobby tiene: ${m} dinero`;
}




function chocolateFeast(n, c, m) {
    var chocolates = Math.floor(n / c);
    return chocolates + Math.floor((chocolates - 1) / (m - 1));
}