let a = document.getElementById("data")
<<<<<<< HEAD
let b = ""
let x = prompt("Table to write")
let y = prompt("give the initial value")
let z = prompt("what should be the iteration value")

for (let initial =x; initial <=y; initial++){
    if (x !== 0-9){
        alert("please enter a number")
    }
    if (a>=z){
        alert("termination value mu")
    }

    b+= `<tr>
                <td>x</td>
                <td>*</td>
                <td>${y}</td>
                <td>=</td>
                <td>${z}</td>
            </tr>`
}

a.innerHTML = b 
=======
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
>>>>>>> 4af861910de4ba07fd1479315fc9df5f8b05567d
