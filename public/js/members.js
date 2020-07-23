$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  function getUser(){
    $.get("/api/user_data").then(function(data) {
      $(".member-name").text(data.email);
    });
  }
 
  // Getting jQuery references to the post body, title, form, and author select
  let bodyInput = $("#body");
  let titleInput = $("#title");
  let cmsForm = $("#cms");

  // Add an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or title
    if (!bodyInput.val().trim() || !titleInput.val().trim()) {
      return;
    }

    // Constructing a newQuote object to hand to the database
    let newQuote = {
      title: titleInput.val().trim(),
      body: bodyInput.val().trim(),
      UserId: titleInput.attr("data-id"),
    };

    submitPost(newQuote);
  }

  // Submits a post for a new quote and reloads the current page after quote successfully created
  function submitPost(newQuote) {
    $.post("/api/quote", newQuote, function(data) {
      location.reload();
    });
  }
});
