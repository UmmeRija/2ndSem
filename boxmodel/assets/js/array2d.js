let a = document.getElementById("data")

let b = ""
let x =[
    [1 , 'Rija' , 'cpism' , '3 to 5' , 8650],
    [2 , 'Fiza' , 'cpism' , '3 to 5' , 8650],
    [3 , 'Rida' , 'cpism' , '3 to 5' , 8650],
    [4 , 'Sana' , 'cpism' , '3 to 5' , 8650],
    [5 , 'Huma' , 'cpism' , '3 to 5' , 8650],
    [6 , 'Neha' , 'cpism' , '3 to 5' , 8650],
    [7 , 'Sana' , 'cpism' , '3 to 5' , 8650],
    [8 , 'Safa' , 'cpism' , '3 to 5' , 8650],
    [9 , 'Rijab' , 'cpism' , '3 to 5' , 8650],
    [10 , 'Lija' , 'cpism' , '3 to 5' , 8650],
    [11 , 'Dua' , 'cpism' , '3 to 5' , 8650],
    [12 , 'Sara' , 'cpism' , '3 to 5' , 8650],
    [13 , 'Sadaf' , 'cpism' , '3 to 5' , 8650],
    [14 , 'Daneen' , 'cpism' , '3 to 5' , 8650],
    [15 , 'Haniya' , 'cpism' , '3 to 5' , 8650],
]
b += `
  <tr style="background-color: gray">
    <th>S.No</th>
    <th>Name</th>
    <th>Course</th>
    <th>Duration</th>
    <th>Fees</th>
  </tr>`

for (let i =0; i <x.length ; i++ ){
    if (i % 2===0){
    b+=` <tr style = "background-color: rgb(224, 163, 204)">
    <td>${x[i][0]}</td>
    <td>${x[i][1]}</td>
    <td>${x[i][2]}</td>
    <td>${x[i][3]}</td>
    <td>${x[i][4]}</td>
</tr>`
}else{
    b+=` <tr style = "background-color: rgb(215, 246, 255)">
    <td>${x[i][0]}</td>
    <td>${x[i][1]}</td>
    <td>${x[i][2]}</td>
    <td>${x[i][3]}</td>
    <td>${x[i][4]}</td>
</tr>`
}
}
a.innerHTML = b