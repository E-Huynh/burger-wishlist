// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".addBtn").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
      };  
      console.log("i was clicked")
      // Send the POST request.
      $.ajax("/api/add", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });