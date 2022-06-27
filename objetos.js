let name = 'Melissa';
let age = 25;

//es5
obj = {name: name, age: age}; 
//es6
obj2 = {name, age};
console.log(obj2);

//-----------------------------------------------------
// FUNCIONES DE TIPO FLECHA 

const names = [
    {name: 'Oscar', age:32}
    {name: 'Melissa', age:25}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;


//                PROMESAS
//Asincronismo lo que quiere decir que ejecuta
//elemento por elemento.
//Las promesas se establecen las acciones que van a pasar

const helloPromise = () => {
    return new Promise((resolve,reject)=>{
        if (true){
            resolve('Hey!');
        } else{
            reject('Upss!!');
        }
    });
}

helloPromise()
.then(response => console.log(response))
.then(() => console.log('hola'))
.catch(error => console.log(error));

//-----------------------------------------------------------

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//----------------------------------------------------------------
// TRABAJAR CON MODULOS
//para este ejercicio utilizamos el archivo module.js

import {hello} from './module';

hello();


//           GENERADORES

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


