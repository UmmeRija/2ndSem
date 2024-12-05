
let a = prompt ("Enter a initial value for a ");
let z = prompt ("Enter a terminal value for z");
let b = document.getElementById("while")
if (a && z){

if (isNaN(a) && isNan(z)){
    alert( "You should enter a number");
}else{
if (a > z){
    alert("a should be less then z")
}
else {
    while(a<=b){
        c.innerHTML+=`<p>iteration count: $(a)</P>`
    }
}
}
}
