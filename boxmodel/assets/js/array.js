let classmate =['Ali' , 'Rija' , 'Yumna' , 'Mansoor' , 'Yousha' ,'Hala' , 'Afifa', 'Awais' , 'Abdul Basit' , 'Haidar' , 'Abdul Haq' , 'Asad' , 'Abdul Haq'];
let x = ''
let z = 1

for (let i =0; i <classmate.length ; i++ ){
    x+=`
    <li>
    ${z+i}&nbsp;
    ${classmate[i]}
    </li>`;
}
document.getElementById("names").innerHTML=x