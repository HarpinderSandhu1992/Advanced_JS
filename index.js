$(document).ready(function () {
  // jQuery code goes here
  console.log("jQuery is ready");

  $("#myForm").on("submit", function (event) {
    console.log("Form submitted");

    // get form data
    var formData = $("#myForm").serializeArray();
    console.log("Form data: ", formData);

    // var username = formData[0].value;
    var username = $("#username").val();
    // inert username into page
    var resultsDiv = $("#results");
    resultsDiv.html("<p class='p1'>Username: " + username + "</p>");
    resultsDiv.css("backgroundColor", "lightblue");

    // get p1 element by class name to add another class to it
    var p1_element = $(".p1");
    p1_element.addClass("p2");
    // remove p1 class
    p1_element.removeClass("p1");

    event.preventDefault();
  });
});
