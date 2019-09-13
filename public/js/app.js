$(document).ready( function() {


    let shopCart = [];
    let totalCost = 0;

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
              <form>
              <fieldset>
              <legend>Quantity:</legend>
              <input id="qnty${[i]}" type="text" maxlength="5" size="6">
              <br>
              <button data-id="qnty${[i]}" id="${dbProducts[i].id}" something="something" name="${dbProducts[i].product_name}" type="submit" value="${dbProducts[i].price}" class="btn btn-secondary btn-sm products
              ">Add To Cart</button>
              </fieldset>
              </form>
            </div>
          </div>`
            )
        // $(document).on("click", `qnty${[i]}`,function (e) {
        //     e.preventDefault();
        //     let amount = $(`qnty${[i]}`).val()
        //     console.log(amount)
            
        // })
        }
    };


    $(document).on("click", ".products", function (e) {
        e.preventDefault(); 
        const name = e.currentTarget.name;
        const price = e.currentTarget.value;
        // console.log(e.currentTarget.value);
        // console.log(e.currentTarget.name)
        const pId = e.currentTarget.id;
        const id = e.target.attributes[0].value
        const amount = $(`#${id}`).val()
        console.log(amount)
        shopCart.push([name, pId, price, amount]);
        $("#shopList").append(`<li class="list-group-item listed"><span>Product: ${name}  </span>  |  <span>Price: $${price}  </span>  |  <span>Quantity: ${amount}</span><button type="button" class="btn btn-secondary btn-sm clearItem" id="${amount}" value="${price}">Remove Item</button></li>`)
        if (amount > 0) {
        // console.log(e.currentTarget.name)
        // console.log(amount)
        console.log(shopCart)
        } else {
            // alert("Please type in the quantity you would like to add to cart.")
        }
    })


    // NEEDS FINISHING
    $("#cart").on("click", function (e) {
        e.preventDefault(); 
        runModal();
        console.log(shopCart);
        for (i = 0; i < shopCart.length; i++) {
            // let addPrice = parseInt(shopCart[i].price);
            let numPrice = shopCart[i][2] * shopCart[i][3];
            console.log(numPrice)
            // console.log(Object.values(shopCart[i]))
            totalCost += parseInt(numPrice)
            // console.log( typeof numPrice )
            // console.log(parseInt(numPrice));
        }
       console.log(totalCost)
       $("#totalCart").text(`Total Cost: $${totalCost}`)
    })

// Modal scripts
function runModal (totalCost) {
    $("#modal").css("display", "block");
    // shopCart.map( item => {
    //     $("#shopList").append(`<li class="list-group-item"><span>Product: ${item[0]}  </span>  |  <span>Price: ${item[2]}  </span>  |  <span>Quantity: ${item[3]}</span></li>`)
    // })
    // $("#shopList").append(`<div id="totalCart">Total Cost: $${totalCost}`)
    
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

$(document).on("click", ".clearItem", function (e) {
    e.preventDefault();
    const removeVal = e.currentTarget.value
    totalCost -= removeVal * e.currentTarget.id
    $("#totalCart").text(`Total Cost: $${totalCost}`)
    $(this).parent().remove();
})

})
