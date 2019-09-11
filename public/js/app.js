$(document).ready( function() {

    // $.get("/", function () {

    //     // renderProducts(req.body);
    // })
    // grabs db data and sends to render function
    $.get("/api/load", function (data) {
        console.log(data)
        renderProducts(data)
    })


    function renderProducts (dbProducts) {
        for (i = 0; i < dbProducts.length; i++ ) {
            // console.log(dbProducts[i])
            $("#productsList").append(`
        
            <div class="card" value="${dbProducts[i].price}" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${dbProducts[i].product_name}</h5>
              <p class="card-text">${dbProducts[i].Description}</p>
              <p>Price: $${dbProducts[i].price}</p>
              <button value="${dbProducts[i].price}" class="btn btn-secondary btn-sm 
              ">Add to Cart</button>
            </div>
          </div>`
            )
        }
    };


    $(document).on("click", ".btn", function (e) {
        e.preventDefault();
        console.log(e.currentTarget.value)
    })

    $("#cart").on("click", function (e) {
        e.preventDefault(); 
        console.log("checkout")
    })



$('#modal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
})