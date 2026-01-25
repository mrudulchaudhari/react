console.log("Hello world")
console.log("5" == 5)
console.log("5" === 5)


changed = false;
function changeFont(id){
    if (!changed){
        document.getElementById(id).style.fontSize = "35px";
         
    }    
    else {
        document.getElementById(id).style.fontSize = "15px"; 
    }
    changed = !changed;
}

changedC = false;
function changeContent(id){
    if (!changedC){
        document.getElementById(id).innerHTML = "Content changed";
    }
    else{
        document.getElementById(id).innerHTML = "Original";
    }
    changedC = !changedC;
    
}

function add(a, b){
    return a + b;
}

console.log(add(4, 7));
console.log(add(3, 11));

function kelvinToCelsius(kelvin){
    return kelvin - 273;
}

function celsiusToKelvin(celsius){
    return celsius + 273;
}

console.log(kelvinToCelsius(celsiusToKelvin(15)));
console.log(celsiusToKelvin(18));
console.log(kelvinToCelsius(300));

function myAdd(x, y = 10){
    return x + y;
}
console.log(myAdd(14, 13));
console.log(myAdd(11));

//loops
function sumAll(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum+= arguments[i];

    }
    return sum;
}

x = sumAll(1, 12, 13, 14, 11);
console.log(x);

const y = function(a, b) {return a *b};
console.log(y(5, 4));

// Arrow Functions
let myFunction = (a, b) => a * b;

console.log(myFunction(4, 6));

const addition = (a, b) => {
    return a + b;
};

console.log(addition(4, 3));

// JS Objects
const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};
console.log(car);
console.log(car.type);
console.log(car.model);
console.log(car.color);

const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

const person2 = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
});

console.log(person);
console.log(person2);
console.log(person["firstName"])

delete person.age;
console.log(person);

const person3 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person3.fullName());

// Date
const d = new Date();
a = d.toDateString();
console.log(a);
const c = new Date("2022-03-25");
console.log(c);
year = d.getFullYear();
console.log(year);
month = d.getMonth();
console.log(month);

console.log(typeof(10))       // "number"
console.log(typeof(10.5))      // "number"
console.log(typeof("hi"))      // "string"
console.log(typeof(true))      // "boolean"
console.log(typeof(null))      // "object" ❌ (JS bug)
console.log(typeof(undefined)) // "undefined"

const addd = (a, b) => a + b;
console.log(addd(4, 5));

const hello = () => console.log("hello");
hello()