$(function () {
    $(".change-devour").on("click", function (event) {
        event.preventDefault()
        var id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
                location.reload()
        );
    });

    $(".create-burger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        
        event.preventDefault();
        // console.log("hello world")

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function (result) {
                console.log("result", result)
                console.log("Burger up!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});