function mailform() {
  let mailform = document.getElementById("mailform");
  let username = document.getElementById("mailform").name.value;
  console.log("user-name = ", username);
  let useremail = document.getElementById("mailform").email.value;
  console.log("user-email = ", useremail);
  let usermessage = document.getElementById("mailform").message.value;
  console.log("user-message = ", usermessage);
  localStorage.setItem("username", mailform.name.value);
  localStorage.setItem("useremail", mailform.email.value);
  localStorage.setItem("usermessage", mailform.message.value);
  console.log("localstorage", localStorage.getItem("username"));

  return username, useremail, usermessage;
}

let mailresponse = document.getElementById("mailresponse");
let replyname = document.querySelector("#replyname").value;
console.log(mailresponse);
let localname = localStorage.getItem("username");
let localemail = localStorage.getItem("useremail");
let localmessage = localStorage.getItem("usermessage");
console.log("localstorage user-name = ", localStorage.getItem("username"));
console.log("localstorage user-email = ", localStorage.getItem("useremail"));
console.log(
  "localstorage user-message = ",
  localStorage.getItem("usermessage")
);
replyname = document.querySelector("#replyname");
replyname.innerHTML = localname;

const sendemail = () => {
  Email.send({
    Host: "smtp.google.com",
    Username: "developer.saro@gmail.com",
    Password: "@qwe123R",
    To: "developer.saro@gmail.com ",
    From: "developer.saro@gmail.com",
    Subject: `${localname} sent you a message`,
    Body: `name : ${localname} <br/> email : ${localemail} <br/> message : ${localmessage}`,
  }).then((message) => alert("message sent"));
};

sendemail(localname, localemail, localmessage);

// done by saravanan sathiyamoorthi
