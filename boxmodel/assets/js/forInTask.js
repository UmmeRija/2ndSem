let a = document.getElementById("data")
let x = [0, 1]
let n = prompt("Enter the number of terms: ")

while (x.length < n){
    let nextNumber = x[x.length-1] + x[x.length-2]
    x.push(nextNumber)
  }
  
  b = ""
  for (let key in x){
    b += `${x[key]}<br>`
  }
a.innerHTML=b