let a = parseInt( prompt("enter operent1"  ))
let b = parseInt( prompt("enter operent 2"  ))
let c = prompt("enter operator" , "+-*/")
 
if (c == "+"){
    alert("the addition of " + a + " and " + b +  "is " + (a + b))
}else if (c == "-"){
    alert("the substraction of " + a + " and " + b +  "is " + (a - b) )
}else if (c == "*"){
    alert ("the multiplication of " + a + " and " + b +  "is " + (a * b) )
}else if (c == "/"){
    alert ("the division of " + a + " and " + b +  "is " + (a / b) )
}else if (c !== "+","-","*","/"){
    alert("invalid operator")
}

