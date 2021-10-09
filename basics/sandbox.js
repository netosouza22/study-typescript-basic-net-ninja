var user = "mario";
console.log(user);
var inputs = document.querySelectorAll("input");
console.log(inputs);
function circ(diameter) {
    return diameter * Math.PI;
}
console.log(circ(3));
//ARRAY
//The typescript sees the type of array based on the values belonging to him
var champions = ["Darius", "Lux", "Diane", "Leona"];
champions.push("Taric"); // ok
//champions.push(20); //err
///champions[0] = 2; /err
var levels = [2, 6, 8, 13, 16];
levels.push(2); // ok
//levels.push("a"); //err
///levels[0] = "A"; /err
var info = ["Leona", 2, "passive active", 12];
info.push(2);
info.push("aaa");
//EXPLICITS ARRAYs 
var nome;
var number;
var isUser;
var uid;
//ARRAY
var arrValues = [];
var arrNames = [];
var arrInfo = [];
//OBJECT
var objName;
var objEmail;
//any type
var a;
var b = [];
var c;
