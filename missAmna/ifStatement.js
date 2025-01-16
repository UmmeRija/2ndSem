let req=parseFloat(prompt("Enter today's tempreture"))

if(req>0&& req<10){
    document.write("It's cold today")
}else if (req>10 && req<35){
    document.write("The tempreture is moderate today")
}else {
    ducument.write("it's hot today")
}