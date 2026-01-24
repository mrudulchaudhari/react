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