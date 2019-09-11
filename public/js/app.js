$(document).ready( function() {


    let shopCart = [];
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
        
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${dbProducts[i].product_name}</h5>
              <p class="card-text">${dbProducts[i].Description}</p>
              <p>Price: $${dbProducts[i].price}</p>
              <button name="${dbProducts[i].product_name}" value="${dbProducts[i].price}" class="btn products btn-secondary btn-sm 
              ">Add to Cart</button>
            </div>
          </div>`
            )
        }
    };


    $(document).on("click", ".products", function (e) {
        e.preventDefault();
        const name = e.currentTarget.name;
        const price = e.currentTarget.value;
        // console.log(e.currentTarget.name)
        shopCart.push({[name]: price})
        console.log(shopCart)
    })


    // NEEDS FINISHING
    $("#cart").on("click", function (e) {
        e.preventDefault(); 
        console.log(shopCart);
        let total = 0;
        for (i = 0; i < shopCart.length; i++) {
            // let addPrice = parseInt(shopCart[i].price);
            let numPrice = Object.values(shopCart[i])
            // console.log(Object.values(shopCart[i]))
            total += parseInt(numPrice)
            // console.log( typeof numPrice )
            console.log(parseInt(numPrice));
        }
       console.log(total)
    })



$('#modal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
})