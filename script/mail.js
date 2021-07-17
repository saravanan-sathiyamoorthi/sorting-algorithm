function myFunction() {
  let mailform = document.getElementById("mailform");
  let username = document.getElementById("mailform").name.value;
  console.log("user-name = ", username);
  let useremail = document.getElementById("mailform").email.value;
  console.log("user-email = ", useremail);
  let usermessage = document.getElementById("mailform").message.value;
  console.log("user-message = ", usermessage);
  localStorage.setItem("username", mailform.name.value);
  localStorage.setItem("useremail", mailform.email.value);
  localStorage.setItem("message", mailform.message.value);
  console.log("localstorage", localStorage.getItem("username"));

  return username, useremail, usermessage;
}

// done by saravanan sathiyamoorthi
let mailresponse = document.getElementById("mailresponse");
console.log(mailresponse);
let;
