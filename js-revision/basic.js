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