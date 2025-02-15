let math = parseInt(prompt("Enter Your Numbers"))
let english = parseInt(prompt("Enter Your Numbers"))
let urdu = parseInt(prompt("Enter Your Numbers"))
let obt = math + english + urdu
let total = 500;
let percentage = obt*100/total;

document.write("<h3>Total Marks: " + total + "</h3>")
document.write("<h1>Obtained Marks: "+obt+"</h1>")
document.write("<h3>Your Percentage: " + percentage.toFixed(2) + "%</h3>");

let grade = "Fails";
if(percentage >= 80 && percentage <= 100){
    Grade = "A-One"
}
else if(percentage >= 70 && percentage <= 79){
    Grade = "A-Grade"
}
else if(percentage >= 60 && percentage <= 69){
    Grade = "B-Grade"
}
else if(percentage >= 50 && percentage <= 59){
    Grade = "C-Grade"
}
if(percentage >= 40 && percentage <= 49){
    Grade = "D-Grade"
}
// else{
//     Grade = "fails";
// }
document.write("<h2>According to your percentage, your grade is: " + Grade + "</h2>");