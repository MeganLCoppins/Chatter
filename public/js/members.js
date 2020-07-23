$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  // Getting jQuery references to the post body, title, form, and author select
  var bodyInput = $("#body");
  var titleInput = $("#title");
  var cmsForm = $("#cms");

  // var kards = ['Kim', 'Khloe', 'Kourtney'];

  // var rowsToAdd = [];

  // for (var i = 0; i < kards.length; i++) {
  //   var newAuthor = new Author(kards[i], i + 1);
  //   rowsToAdd.push(createAuthorRow(newAuthor));
  // }

  // authorSelect.empty();
  // console.log(rowsToAdd);
  // console.log(authorSelect);
  // authorSelect.append(rowsToAdd);
  // authorSelect.val(authorId);


  // // Creates the author options in the dropdown
  // function createAuthorRow(author) {
  //   var listOption = $("<option>");
  //   listOption.attr("value", author.id);
  //   listOption.text(author.name);
  //   return listOption;
  // }

  // // Constructor function for Author objects 
  // function Author(authName, authID) {
  //   this.name = authName;
  //   this.id   = authID;
  // }


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
    var newQuote = {
      title: titleInput.val().trim(),
      body: bodyInput.val().trim()
    };

    console.log(newQuote);

    submitPost(newQuote);

  }

  // Submits a post for a new quote and reloads the current page after quote successfully created
  function submitPost(newQuote) {
    $.post("/api/quote", newQuote, function(data) {
      // window.location.href = "/quote/" + data.id;
      location.reload();
      //console.log(data);
    });
  }

});
