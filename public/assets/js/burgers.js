$(function () {
    $(".change-devour").on("click", function (event) {
        event.preventDefault()
        var id = $(this).data("id");

        var newDevouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("You ate the burger!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-burger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Burger up!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});