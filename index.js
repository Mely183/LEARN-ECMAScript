//conoceremos que es ECMA version 6
//Para trabajar este curso descargamos node.js e instalamos
// una extensión para correr bloques de js.
//          PARAMETROS POR DEFECTO  

function newFunction(name,age,contry){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age,country);
};


//es6
function newFunction2(name = 'oscar', age = 32, country= "MX"){
console.log(name,age,country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');

//------------------------------------------------------------------------------------

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//Con esto es más fácil realizar las uniones
//`` --> son conocidas como comillas fráncesas

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//para concatenar strings utilizamos comillas fráncesas
// Ejemplo `${valor} ${valor2}`

// asi se realizaba antes 
let lorem = "Neque porro quisquam est qui \n "
+ "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."

// ahora con es6

let lorem2 = `otra frase epica que necesitamos
con solo aplicar enter
podemos realizar saltos de linea sin usar 
el slash n`;

console.log(lorem);
console.log(lorem2);

//------------------------------------------------------------------------------------

//Estructuración de elementos

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
};
console.log(person.name, person.age);

//es6

let {name, age} = person;
console.log(name, age);

//------------------------------------------------------------------------------------

let team1 = ['Melissa', 'Karen', 'Norma'];
let team2 = ['Oscar', 'Gael', 'Monica'];

let education = ['David', ...team1, ...team2];

console.log(education);

//es más fáci unir diferentes elementos

// let es una nueva forma de guardar elementos en memoria
//se utiliza en lugar de var

{
    var global = "Global Var";
}

{
    let globalLet = 'Global Let'; //---> si vas a usar let
    console.log(globalLet); //---> debes agregar un console.log
}

console.log(global)
console.log(globalLet)

var a = 'b';
a = 'a';
console.log(a);

const a = 'b';
a = 'a';
console.log(a);

// la diferencia de var y de let es que 
//las variables var pueden ser modificadas y re-declaradas
//mientras la variables let puede ser modificada pero no re-declarada
//las variables const no puede ser modificada ni re-declarada

