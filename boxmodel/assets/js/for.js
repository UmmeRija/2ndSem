let a = document.getElementById("data")

let x = parseInt(prompt("What table you want to start"))
let y = parseInt(prompt("Enter initial value"))
let z = parseInt(prompt("enter termination value"))
let b = ""
// let q = "initial*x"

if(x && y && z){
}else{
    alert("FILL ALL FIELDS")
    location.assign('for.html')
}
    if(isNaN(x && y && z)){
        alert("value should be number");
        location.assign('for.html')
 }

        if(z>y){ 
        }else{
            alert("TERMINATION VALUE SHOULD BE GREATER THEN INITIAL VALUE")
            location.assign('for.html')
            
            }
            

for (let initial=y; initial<=z; initial++){
    if ((initial*x) % 2 === 0){
    b+=` <tr style = "background-color : blue">
                <td>${x}</td>
                <td>*</td>
                <td>${initial}</td>
                <td>=</td>
                <td>${initial*x}</td>
            </tr>`
}else{
    b+=` <tr style = "background-color: pink">
    <td>${x}</td>
    <td>*</td>
    <td>${initial}</td>
    <td>=</td>
    <td>${initial*x}</td>
</tr>`
}
}
a.innerHTML=b
