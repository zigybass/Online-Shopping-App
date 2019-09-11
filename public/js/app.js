$(document).ready( function() {

    $.get("/", function () {

        // renderProducts(req.body);
    })

    $.get("/api/load", function (data) {
        console.log(data)
    })


    function renderProducts (data) {
        console.log("render test")
        // for (i = 0; i < data.length; i++ ) {
        //     $("#products").append()
        // }
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