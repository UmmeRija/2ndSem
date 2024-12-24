let a = document.getElementById("data")
let x = [
    {
        item: '*'
    },
    {
        item: '**'
    },
    {
        item: '***'
    },
    {
        item: '****'
    },
    {
        item: '*****'
    },
    {
        item: '******'
    },
    {
        item: '*******'
    },
    {
        item: '********'
    },
    {
        item: '*********'
    },
    {
        item: '**********'
    }
]
b = ""
for(let key in x ){
b+= `<p style="text-align:center; font-size: 24px">${' '.repeat(10-key)}${x[key].item}<br></p>`
}
a.innerHTML= b