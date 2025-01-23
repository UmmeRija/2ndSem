document.getElementById('button').addEventListener('click', function() {
    let box = document.getElementById('box')

    if (box.classList.contains("hidden")) {
    if (box.classList.remove("hidden")) ;
    this.textContent= "hide box" 
    } else {
         box.classList.add("hidden");
         textContent= "show box"
    }
});
     