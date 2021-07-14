let mailform = document.getElementById("mailform");
let username = document.getElementById("name");
console.log(username);
let useremail = document.getElementById("email");
let message = document.getElementById("message");
let usr_name = document.getElementById("usr_name");
let submitbtn = document.getElementById("footerbtn");
console.log(username);

// Done by : Saravanan Sathiyamoorthi

window.onload = () => {
  const storedata = () => {
    localStorage.setItem("usr_name", username.value);
    localStorage.setItem("usr_mail", useremail.value);
    console.log(usr_name);
  };

  submitbtn.addEventListener("click", storedata);
};

window.addEventListener("DOMContentLoaded", () => {
  console.log("usrnm", username);
});
