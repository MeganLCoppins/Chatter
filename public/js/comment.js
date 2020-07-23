$(document).ready(function() {
  let comInput = $("#com");
  let comForm = $("#comForm");
  // Add an event listener for when the comment form is submitted
  $(comForm).on("submit", handleFormSubmit);
  // A function for handling what happens when the form to create a new comment is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a comment
    if (!comInput.val().trim()) {
      return;
    }
    // Constructing a newCom object to hand to the database
    let newCom = {
      comment: comInput.val().trim(),
      QuoteId: comInput.attr("data-id"),
    };

    postComment(newCom);
  }

  function postComment(newCom){
    $.post("/api/quote/comment", newCom, function(data) {
      location.reload();
    });
  }
});
