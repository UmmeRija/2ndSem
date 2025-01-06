$(document).ready(function(){
    $.ajax({
        url:"assets/json/project.json",
        type:"get",
        success:function(data1){
            // console.log(data.hosting);
            let i ="";
            $.each(data1,function(indexes,objects){
                let catObj = objects.name.split(" ").join("").toLowerCase();
                i+=`<div class="col-lg-3 col-md-6 mt-2">
      <div class="card">
        <img src="${objects.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${objects.name}</h5>
          <!-- <p class="card-text"></p> -->
          <a href="#" class="btn btn-primary">${catObj}</a>
        </div>
      </div>
    </div>`
        })
$("catageory").html(i);
    }
})
})