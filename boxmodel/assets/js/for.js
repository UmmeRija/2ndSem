let a = document.getElementById("data")
let x = parseInt(prompt("What table you want to start"))
let y = parseInt(prompt("Enter initial value"))
let z = parseInt(prompt("enter termination value"))
let b = ""
let q = "initial*x"

if(x && y && z){
    if(isNaN(x && y && z)){
        if(z>y){       
for (let initial=y; initial<=z; initial++){
    // if (isNaN(x) && isNaN(y) && isNaN(z))
    b+=` <tr>
                <td>${x}</td>
                <td>*</td>
                <td>${initial}</td>
                <td>=</td>
                <td>${q}</td>
            </tr>`
}
a.innerHTML=b
}else{
    alert("z must be greater to  y");
    location.assign('for.html')
}
}else{
alert("value should be number");
location.assign('for.html')

}
}else{
alert("FILL ALL FIELDS");
location.assign('for.html')

}
