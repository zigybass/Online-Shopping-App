$(document).ready( function() {

    $.get("/", function (data) {
        console.log(data)
        // renderProducts(data);
    })


    function renderProducts (data) {
        for (i = 0; i < data.length; i++ ) {
        const bootCard = $("<div>").addClass("card");
        const cardBody = $("<div>").addClass("card-body");
        const cardHead = $("<h5>").addClass("card-title");
        const pTag = $("<p>").addClass("card-text");
        const aTag = $("<a>").addClass("btn btn-primary");
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