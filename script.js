const API_URL = 'https://chocolatefeast.herokuapp.com';

const HTMLResponse = document.querySelector("#dinero1");
const ul = document.createDocumentFragment();

fetch( `${API_URL}/api/casos/1`)
    .then((response) => response.json())
    .then((casos) => {
        Array.from(casos).forEach(caso => {
            let elem = document.createElement('li');
            elem.appendChild(
                document.createTextNode(`${caso.n}`)
            );
            ul.appendChild(elem);
        })

        HTMLResponse.appendChild(ul);
    })


function chocolateFeast(n, c, m) {
    var chocolates = Math.floor(n / c);
    return chocolates + Math.floor((chocolates - 1) / (m - 1));
}