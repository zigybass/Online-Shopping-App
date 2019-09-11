$(document).ready( function() {

    $.get("/", function () {

        // renderProducts(req.body);
    })

    $.get("/api/load", function (data) {
        console.log(data)
        renderProducts(data)
    })


    function renderProducts (dbProducts) {
        for (i = 0; i < dbProducts.length; i++ ) {
            // console.log(dbProducts[i])
            $("#products").append(`
            
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${dbProducts[i].product_name}</h5>
              <p class="card-text">${dbProducts[i].Description}</p>
              <p>Price: $${dbProducts[i].price}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
            )
        }
    };


    $("#products").on("click", function (e) {
        e.preventDefault();
        console.log("Click: " + e.currentTarget.val())

    $("#cart").on("click", function () {
        console.log("checkout")
    })


})
$('#modal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

})