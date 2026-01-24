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