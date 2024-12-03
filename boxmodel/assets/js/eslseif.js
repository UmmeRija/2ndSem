let a = parseInt( prompt("enter operent1" , "0-9" ))
let b = parseInt( prompt("enter operent 2"  , "0-9"))
let c = prompt("enter operator" , "+-*/")
 
if (c == "+"){
    alert("the addition of " + a + " and " + b +  "is " + (a + b))
}
else if (c == "-"){
    if (b > a){
        alert("b > a ; try again");}
   else {
    alert("the substraction of " + a + " and " + b +  "is " + (a - b) )}

}
else if (c == "*"){
    alert ("the multiplication of " + a + " and " + b +  "is " + (a * b) )
}else if (c == "/"){
    if (b == 0){
        alert("b cant be 0 ; try again ")
    }
    alert ("the division of " + a + " and " + b +  "is " + (a / b) )
}else if (c !== "+","-","*","/"){
    alert("invalid operator")
}

