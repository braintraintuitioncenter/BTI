document.addEventListener('contextmenu', event => event.preventDefault());

const firebaseConfig = {
    apiKey: "AIzaSyCCTtC44hXwEY58m5_lmYfYKs4Az2I6AGk",
    authDomain: "contact-form-a77bc.firebaseapp.com",
    databaseURL: "https://contact-form-a77bc-default-rtdb.firebaseio.com",
    projectId: "contact-form-a77bc",
    storageBucket: "contact-form-a77bc.appspot.com",
    messagingSenderId: "215950490136",
    appId: "1:215950490136:web:f1f79b30a428405185616d",
    measurementId: "G-CSZ4VXZ74E"
  };


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var phone = getElementVal("phone"); // Add this line for the phone number
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, phone, msgContent);

  // enable alert
  document.querySelector(".alert").style.display = "block";

  // remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, phone, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    phone: phone,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

