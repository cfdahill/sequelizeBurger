//This will make the buttons do what they are suppose to do!
$(function () {

    //add a burger
    $(".add-burger").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
        burger_name: $("#newBurger").val().trim()
        };
        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger: " + newBurger);
        });
        location.reload();
    });


    //eat a burger
    $(".devoured").click(function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        console.log("devoured button " + id + " clicked");
        var eaten = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(function () {
            console.log("Hope you enjoyed the burger");
            location.reload();
        });
    });
});