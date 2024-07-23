function testSubmit(event) {
  var username = document.forms["myForm"]["username"].value;
  console.log("username: ", username);
  // Prevent default form submission to avoid reloading
  event.preventDefault();
}
