// // Ejemplo de JavaScript Sincrónico
// console.log("Tarea 1");
// console.log("Tarea 2");
// console.log("Tarea 3");

// // Ejemplo de JavaScript Asincrónico con setTimeout
// console.log("Inicio");
// setTimeout(() => {
//     console.log("Tarea Asincrónica");
// }, 2000);
// console.log("Fin");

// // Ejemplo de Promesa
// let promesa = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Operación Completada"), 3000);
// });
// promesa.then(resultado => console.log(resultado));

console.log("test")

// Ejemplo de async/await
async function fetchData() {
    let respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await respuesta.json();
    for(let i = 0; i < data.length;i++){
        console.log(data[i].title);
        const table = document.getElementById("tabla1")
            const tr = document.createElement("tr")
            console.log(data[i])
            elementos = data [i]
            for(let [clave, valor] of Object.entries(elementos)){
                const td = document.createElement("td")
                td.innerHTML = valor
                tr.appendChild(td)
                table.appendChild(tr)
            }
    }

}

fetchData();