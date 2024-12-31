function a(){
  let uinput = parseInt(document.querySelector("#initial").value);
  let x =parseInt(document.querySelector("#termination").value);
  let data = document.querySelector("#prnt");
  
  for (let i = uinput; i <= x; i++) {
    if (i % 5 === 0) {
      bgcolor = "lightgreen";
      data.innerHTML += i + " fizz buzz" + "<br>";
    } else if (i % 2 === 0) {
      bgcolor = "lightblue"
      data.innerHTML += i + " buzz" + "<br>";
    } else {
      bgcolor = "pink"
      data.innerHTML += i + " fizz" + "<br>";
    }
  }
}


