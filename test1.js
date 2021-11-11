//1.Que me imprime por consola?
const amazonOnboarding = true;
let candidates = 4;

if (amazonOnboarding) {
    let candidates = 7
    candidates += 2;
}

console.log(candidates);


//2.Mejoralo con una arrow function
setTimeout(function () {
    alert('2000 candidates have been imported');
},4000);


let arrowfunction = setTimeout( () => {
    alert('2000 candidates have been imported');
},4000);

//3a. Cambiala a arrow function
/*function greeting (name) {
 //3b. Imprime dinámicamente (con variables) un mensaje de Bienvenida al usario:
 //tal como : 'Hola Eduardo, buenos días!'  
 console.log();
}*/

//3a.
let greeting = (nombre) => {
    return `Hola ${nombre}, buenos dias!`;
}
//3b.
//---> llama a la función con tu nombre :
console.log(greeting(Eduardo));


//4. Que me imprime por consola?
let array1 = ['x', 'y', 'z'];
let array2 = [...array1, 1, 2, 3];
console.log(array2);  

//agarra directamente con destructuring la variable apellido para imprimirla por consola
const spanishCandidate = {
    name: 'Ronald',
    surname: 'Pineda',
    age: '18',
    likesSport: true
}


//const ......
//console.log(variable)
const {surname} = spanishCandidate;
console.log(surname);
/* 
Tareas:
1.Clonar este repo  <-- para clonar el repo, hacerlo por SSH --> aprender a cofigurar SSH en tu ordenador
2.Poner las soluciones (crear una nueva rama, develop, y hacer los cambios necesarios). Gurdar cambios y comitear.
3.Hacer una Pull request (hacerlo en la rama develop, ni en Master ni en Main), 
*/