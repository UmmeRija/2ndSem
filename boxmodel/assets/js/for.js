let a = document.getElementById("data")
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