// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    //Handles adding a burger
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim()
        };
        //Validate that name isn't empty
        if ($("#burger").val() === "") {
            alert("Please type a burger");
        }
        else {
            // Send the POST request.
            $.ajax("/api/add", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        }
    });
    //Handles the devour btn click
    $(".devourBtn").on("click", function (event) {
        event.preventDefault;
        let btnId = $(this).data("id");
        // console.log("clicked devourBtn ", btnId);
        $.ajax("/api/devour/" + btnId, {
            type: "PUT",
        }).then(
            function (response) {
                console.log("PUT: ", response);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })
});