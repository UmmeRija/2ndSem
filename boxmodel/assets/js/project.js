
$(document).ready(function(){
  $.ajax({
    url:"assets/json/project.json",
    type: "get",
    success:function(card1){
    // console.log(card1.hosting)
    i=""
    $.each(card1,function(index,object){
      let catObj = object.name.split(" ").join("").toLowerCase();
      // console.log(catObj)
      i+=` <div class="col-lg-3 md-6 mt-2"></div>
        <div class="card">
          <img src="${object.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${object.name}</h5>
           
            <a href="product.html?category=${catObj}" class="btn btn-primary">More</a>
          </div>
        </div>`
    })
    $("#catagory").html(i);
    }
  })
})