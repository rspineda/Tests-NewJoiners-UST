import axios from 'axios';

//1.
const members = ['San', 'Gust', 'Jos', 'Paul', 'Ron']
const newMembers = ['Edu', 'Pil']

//Unelos en un solo array e imprímelo por consola: 

const members1 =  [...members,...newMembers];
console.log(members1)


//2. Crea una función que demuestre el uso de un let partiendo de la varible dada.
const number = 5;

const myFunction =() => {
    let number = 3;
    console.log(number)
}
myFunction();
console.log(number)

//3. / 4. / 5. Dado el objeto newMember --> Crea una función que me imprima por consola el nombre del nuevo miembro
// con un saludo ameno como: 'Hola Pil que tal  estas' (utilizando arrow function, destructuring y template strings)
const newMember = {
  name: 'Pil',
  surname: 'Pac',
  age: '22',
  likesSport: true
}

const  saludoMiembro =(newMember) =>{
    const {name} = newMember
    //console.log(name)
    console.log(`Hola ${name} que tal estas`)

}
saludoMiembro(newMember);

//6. Dado el array celsius, crea un nuevo array (farenheit) que contenga los los elementos del array celsius pero en formato fahrenheit
//Para pasar de celsius a farenheit: F = (C * 9/5) + 32 
const celsius = [20, 23, 12, 30, 22]
const farenheit = celsius.map(elem => (elem*(9/5)) +32)
console.log(farenheit)


//7. apartir de la api dada renderiza por consola los objetos (todos)
const url = 'https://jsonplaceholder.typicode.com/todos/';

//  ->>>    axios.get(url).then();


//8. a partir de la api dada renderiza por consola por cada objeto un objeto del estilo:
/* 
{
  "userId": 1,
  "id": 1,
  "title": "Ronald es un tío majete",
}
*/






/* 
must be installed gloablly:
tsc --> npm install -g typescript
ts-node -> npm install -g ts-node
npm install -g parcel-bundler
*/