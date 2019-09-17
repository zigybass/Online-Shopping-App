$(document).ready(function() {
  let shopCart = [];
  let totalCost = 0;

  // $.get("/", function () {

  //     // renderProducts(req.body);
  // })
  // grabs db data and sends to render function
  $.get("/api/load", function(data) {
    console.log(data);
    const availProducts = [];
    const notAvailProducts = [];
    data.forEach(product => {
      product.stock_quantity > 0
        ? availProducts.push(product)
        : notAvailProducts.push(product);
    });
    renderProducts(availProducts);
    renderUnavail(notAvailProducts);
    console.log(notAvailProducts);
  });

  function renderUnavail(unavailProducts) {
    for (i = 0; i < unavailProducts.length; i++) {
      $("#productsList").append(`
        
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Item Currently Unavailable: ${unavailProducts[i].product_name}</h5>
              <p class="card-text">Description: ${unavailProducts[i].Description}</p>

            </div>
          </div>`);
    }
  }

  function renderProducts(dbProducts) {
    for (i = 0; i < dbProducts.length; i++) {
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
              <button data-id="qnty${[i]}" id="${
        dbProducts[i].stock_quantity
      }" prodid=${dbProducts[i].id} name="${
        dbProducts[i].product_name
      }" type="submit" value="${
        dbProducts[i].price
      }" class="btn btn-secondary btn-sm products
              ">Add To Cart</button>
              </fieldset>
              </form>
            </div>
          </div>`);
    }
  }

  $(document).on("click", ".products", function(e) {
    e.preventDefault();
    const id = e.target.attributes[0].value;
    const amount = $(`#${id}`).val();
    const stock = e.currentTarget.id - amount;
    const prodId = $(this).attr("prodid");
    console.log(shopCart);
    console.log(stock);

    if (amount <= 0) {
      alert("Please enter a valid quantity");
    } else if (stock < 0) {
      alert(`Not enough inventory to fulfill order. Only ${e.currentTarget.id} left.`);
    } else {
      const name = e.currentTarget.name;
      const price = e.currentTarget.value;
      totalCost += amount * price;
      shopCart.push([name, stock, price, amount, prodId]);
     
      $("#shopList").append(
        `<li class="list-group-item listed"><span>Product: ${name}  </span>  |  <span>Price: $${price}  </span>  |  <span>Quantity: ${amount}</span><button type="button" class="btn btn-secondary btn-sm clearItem" id="${amount}" value="${price}">Remove Item</button></li>`
      );
    }
  });

  // NEEDS FINISHING
  $("#cart").on("click", function(e) {
    e.preventDefault();
    runModal();
    $("#modal-content h4").text("Check Out Time! Your Cart:")
    console.log(shopCart);
    // for (i = 0; i < shopCart.length; i++) {
    //     // let addPrice = parseInt(shopCart[i].price);
    //     let numPrice = shopCart[i][2] * shopCart[i][3];
    //     console.log(numPrice)
    //     // console.log(Object.values(shopCart[i]))
    //     totalCost += parseInt(numPrice)
    //     // console.log( typeof numPrice )
    //     // console.log(parseInt(numPrice));
    // }
    console.log(totalCost);
    $("#totalCart").text(`Total Cost: $${totalCost}`);
  });

  // Modal scripts
  function runModal(totalCost) {
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
  };
  $(document).on("click", "#close", function(e) {
    e.preventDefault();
    $("#modal").css("display", "none");
    $("#completeOrder").css("display", "initial");
  });

  $(document).on("click", ".clearItem", function(e) {
    e.preventDefault();
    const removeVal = e.currentTarget.value;
    totalCost -= removeVal * e.currentTarget.id;
    $("#totalCart").text(`Total Cost: $${totalCost}`);
    $(this)
      .parent()
      .remove();
  });

  $(document).on("click", "#completeOrder", function(e) {
    e.preventDefault();
    if (totalCost <= 0) {
      alert("Please continue shopping.");
    } else {
      $("#modal-content h4").text("Thank you for your purchase!");
      $("#shopList")
        .children()
        .remove();
      $("#completeOrder").css("display", "none");
      updateDatabase();
    }
  });


  function updateDatabase() {
      const finalShopCart = shopCart;
      console.log(finalShopCart);
      totalCost = 0;
    shopCart = [];
    for ( i = 0; i < finalShopCart.length; i++) {
      updateProduct = {
          id: finalShopCart[i][4],
          stock_quantity: finalShopCart[i][1]
      };
      console.log(updateProduct)
      $.ajax({
        method: "PUT",
        url: "/api/updateInv/" + finalShopCart[i][4],
        data: updateProduct,
        dataType: "json"
      }).then( () => {
          console.log("sent item")
      });
    };
  }
});
