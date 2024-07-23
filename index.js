function testSubmit(event) {
  var username = document.forms["myForm"]["username"].value;
  console.log("username: ", username);

  //   Insert username
  document.getElementById("results").innerHTML =
    "<p class='p1'>Username: " + username + "</p>";
  results.style.backgroundColor = "lightblue";
  results.style.fontSize = "50px";

  var p1 = document.getElementsByClassName("p1");
  p1[0].classList.add("p2");

  // Prevent default form submission to avoid reloading
  event.preventDefault();
}
