
let x = document.getElementById('data')
let a = [
    {
        Name: 'Realme',
        Price: 'Rs. 89,999',
        Disciption: 'Realme 13 Plus price in Pakistan officialy starts at Rs. 89,999. Realme 13 Plus smartphone was launched on Oct 15, 2024. This is 12 GB RAM / 256 GB internal storage variant of  Realme which is available in Victory Gold, Dark Purple colours.',
        Image: '/boxmodel/1st picture.jpg'
    }, 
    {
        Name: 'Realme',
        Price: 'Rs. 89,999',
        Disciption: 'Realme 13 Plus price in Pakistan officialy starts at Rs. 89,999. Realme 13 Plus smartphone was launched on Oct 15, 2024. This is 12 GB RAM / 256 GB internal storage variant of  Realme which is available in Victory Gold, Dark Purple colours.',
        Image: '/boxmodel/1st picture.jpg'
    },
    {
        Name: 'Realme',
        Price: 'Rs. 89,999',
        Disciption: 'Realme 13 Plus price in Pakistan officialy starts at Rs. 89,999. Realme 13 Plus smartphone was launched on Oct 15, 2024. This is 12 GB RAM / 256 GB internal storage variant of  Realme which is available in Victory Gold, Dark Purple colours.',
        Image: '/boxmodel/1st picture.jpg'
    },
    {
        Name: 'Realme',
        Price: 'Rs. 89,999',
        Disciption: 'Realme 13 Plus price in Pakistan officialy starts at Rs. 89,999. Realme 13 Plus smartphone was launched on Oct 15, 2024. This is 12 GB RAM / 256 GB internal storage variant of  Realme which is available in Victory Gold, Dark Purple colours.',
        Image: '/boxmodel/1st picture.jpg'
    },
    {
        Name: 'Realme',
        Price: 'Rs. 89,999',
        Disciption: 'Realme 13 Plus price in Pakistan officialy starts at Rs. 89,999. Realme 13 Plus smartphone was launched on Oct 15, 2024. This is 12 GB RAM / 256 GB internal storage variant of  Realme which is available in Victory Gold, Dark Purple colours.',
        Image: '/boxmodel/1st picture.jpg'
    }
]
b = ""
for (let key in a ){
    b+=`  <tr>
                <td></td>
                <td></td>
                <td></td>
                <td><img src="" alt=""></td>
            </tr>`

}
x.innerHTML = '<img src=""+a[key].Image+"" <br>'