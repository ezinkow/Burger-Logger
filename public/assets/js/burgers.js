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
            function (result) {
                // Reload the page
                location.reload();
            }
        );
    });
});