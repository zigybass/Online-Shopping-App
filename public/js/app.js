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
            <div class="card-body" id="card${[i]}>
              <h5 class="card-title">${dbProducts[i].product_name}</h5>
              <p class="card-text">Description: ${dbProducts[i].Description}</p>
              <p>Price: $${dbProducts[i].price}</p>
              <form class="products" name="${dbProducts[i].product_name}" value="${dbProducts[i].price}">
              <fieldset>
              <legend>Quantity:</legend>
              <input type="text" maxlength="5" size="6">
              <br>
              <button class="btn btn-secondary btn-sm 
              ">Add to Cart</button>
              </fieldset>
              </form>
            </div>
          </div>`
            )
        }
    };


    $(document).on("click", ".products", function (e) {
        e.preventDefault();
        const name = e.currentTarget.name;
        const price = e.currentTarget.value;
        console.log(e.currentTarget)
        const amount = $("input").val();
        console.log(amount)
        if (amount > 0) {
        // console.log(e.currentTarget.name)
        console.log(amount)
        shopCart.push({[name]: [price, amount]})
        console.log(shopCart)
        } else {
            alert("Please type in the quantity you would like to add to cart.")
        }
    })


    // NEEDS FINISHING
    $("#cart").on("click", function (e) {
        e.preventDefault(); 
        runModal();
        console.log(shopCart);
        let total = 0;
        for (i = 0; i < shopCart.length; i++) {
            // let addPrice = parseInt(shopCart[i].price);
            let numPrice = Object.values(shopCart[i])
            // console.log(Object.values(shopCart[i]))
            total += parseInt(numPrice)
            // console.log( typeof numPrice )
            // console.log(parseInt(numPrice));
        }
       console.log(total)
    })

// Modal scripts
function runModal () {
    $("#modal").css("display", "block");
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(document).on("click", "#close", function (e) {
    e.preventDefault();
    $("#modal").css("display", "none")
})

})
