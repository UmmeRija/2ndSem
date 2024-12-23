let x = document.getElementById('data')
let a = [
    {
        Name: 'Realme',
        Price: 'Rs. 89,999',
        Disciption: 'Realme 13 Plus price in Pakistan officialy starts at Rs. 89,999. Realme 13 Plus smartphone was launched on Oct 15, 2024. This is 12 GB RAM / 256 GB internal storage variant of  Realme which is available in Victory Gold, Dark Purple colours.',
        Image: '/boxmodel/images/1st img.jpg'
    }, 
    {
        Name: 'Tecno',
        Price: 'Rs. 39,999',
        Disciption: 'Tecno Spark 30 price in Pakistan is Rs. 39,999. Official dealers and warranty providers regulate the retail price of Tecno mobile products in official warranty.',
        Image: '/boxmodel/images/3rd img.jpg'
    },
    {
        Name: 'Infinix Hot 50 Pro Plus',
        Price: 'Rs. 57,999',
        Disciption: 'Infinix Hot 50 Pro Plus price in Pakistan is Rs. 57,999. Official dealers and warranty providers regulate the retail price of Infinix mobile products in official warranty.',
        Image: '/boxmodel/images/2nd img.jpg'
    },
    {
        Name: 'Infinix Smart 9',
        Price: 'Rs. 26,999',
        Disciption: 'Infinix Smart 9 price in Pakistan is Rs. 26,999. Official dealers and warranty providers regulate the retail price of Infinix mobile products in official warranty.',
        Image: '/boxmodel/images/4th img.jpg'
    },
    {
        Name: 'Oppo A3',
        Price: 'Rs. 49,999',
        Disciption: 'Oppo A3 price in Pakistan is Rs. 49,999. Official dealers and warranty providers regulate the retail price of Oppo mobile products in official warranty.',
        Image: '/boxmodel/images/5th img.jpg'
    },
    {
        Name: 'Xiaomi Poco C75',
        Price: 'Rs. 34,999',
        Disciption: 'Xiaomi Poco C75 price in Pakistan is Rs. 34,999. Official dealers and warranty providers regulate the retail price of Xiaomi mobile products in official warranty.',
        Image: '/boxmodel/images/6th img.jpg'
    },
    {
        Name: 'Samsung Galaxy A16',
        Price: 'Rs. 54,999',
        Disciption: 'Samsung Galaxy A16 price in Pakistan officialy starts at Rs. 54,999. Samsung Galaxy A16 smartphone was launched on Oct 30, 2024. This is 6 GB RAM / 128 GB internal storage variant of Samsung which is available in Gray, water green, midnight blue colours.',
        Image: '/boxmodel/images/7th img.jpg'
    },
    {
        Name: 'Samsung Galaxy S24 FE',
        Price: 'Rs. 219,999',
        Disciption: 'Samsung Galaxy S24 FE price in Pakistan is Rs. 219,999. Official dealers and warranty providers regulate the retail price of Samsung mobile products in official warranty.',
        Image: '/boxmodel/images/8th img.jpg'
    },
    {
        Name: 'Vivo V40e ',
        Price: 'Rs. 99,999',
        Disciption: 'Vivo V40e price in Pakistan is Rs. 99,999. Official dealers and warranty providers regulate the retail price of Vivo mobile products in official warranty.',
        Image: '/boxmodel/images/9th img.jpg'
    },
    {
        Name: 'Vivo " " Y19s ',
        Price: 'Rs. 38,999',
        Disciption: 'Vivo Y19s price in Pakistan is Rs. 38,999. Official dealers and warranty providers regulate the retail price of Vivo mobile products in official warranty.',
        Image: '/boxmodel/images/10th img.jpg'
    }
]
b = ""
for (let key in a ){
    b+=`  <tr>
                <td>${a[key].Name}</td>
                <td>${a[key].Price}</td>
                <td>${a[key].Disciption}</td>
                <td><img src="${a[key].Image}" alt=""></td>
            </tr>`

}
x.innerHTML = b