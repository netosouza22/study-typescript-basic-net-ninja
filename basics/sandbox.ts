const user = "mario";

console.log(user);

const inputs = document.querySelectorAll("input");

console.log(inputs);

function circ( diameter: number ){
    return diameter * Math.PI;
}

console.log(circ(3));

//ARRAY

//The typescript sees the type of array based on the values belonging to him
let champions = ["Darius", "Lux", "Diane", "Leona"];

champions.push("Taric"); // ok
//champions.push(20); //err
///champions[0] = 2; /err

let levels = [2, 6, 8, 13, 16];

levels.push(2); // ok
//levels.push("a"); //err
///levels[0] = "A"; /err

let info = ["Leona", 2, "passive active", 12];
info.push(2);
info.push("aaa");

//EXPLICITS ARRAYs 
let nome: string;
let number: number;
let isUser: boolean;

let uid: number|string;

//ARRAY
let arrValues: string[] = [];
let arrNames: number[] = [];
let arrInfo: (number|string|boolean)[] = [];

//OBJECT
let objName: object;
let objEmail: {
    assunto: string,
    descricao: string,
    data: number,
}

//any type

let a: any;

let b: (any)[] = [];

let c: {
    name:any,
    age: any
}


//Enum

enum ResourceType { BOOK, AUTHOR, MOVIE, MAINC, FINALG }

interface Resource<T> {
    uid: number,
    resourceName: string,
    data: ResourceType,
}

const docSis: Resource<ResourceType> = {
    uid: 3,
    resourceName: 'lilica',
    data: ResourceType.FINALG,
}


//TUPLES

let tup: [string, number, ResourceType];

tup[0] = 'a';
tup[1] = ResourceType.FINALG;
tup[2] = 2;