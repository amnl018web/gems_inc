function validateForm() {

  // Defining the variables
  var box1 = document.getElementById("first-name");
  var box2 = document.getElementById("last-name");
  var box3a = document.getElementById("email");
  var box4 = document.getElementById("cellphone");
  var box5 = document.getElementById("category");
  var box6 = document.getElementById("date");
  var box7 = document.getElementById("venue");
  var box8 = document.getElementById("guest");
  var box9 = document.getElementById("budget");
  var box10 = document.getElementById("message");
  var valid = true;

  // box1- First Name Validation
  if(box1.value == "") {
    document.getElementById('note1').innerHTML = "Please enter your first name.";
    box1.style.borderColor = "#e44c65";
    box1.focus ();
    valid = false;
  }

  // box2- Last Name Validation
  if(box2.value == "") {
    document.getElementById('note2').innerHTML = "Please enter your last name.";
    box2.style.borderColor = "#e44c65";
    box2.focus ();
    valid = false;
  }

  // box3- E-mail Validation
  if(box3a.value == "") {
    document.getElementById('note3').innerHTML = "Please enter an e-mail address.";
    box3a.style.borderColor = "#e44c65";
    box3a.focus ();
    valid = false;
  }

  // box4- Phone Validation
  if(box4.value == "") {
    document.getElementById('note4').innerHTML = "Please enter a mobile phone number.";
    box4.style.borderColor = "#e44c65";
    box4.focus ();
    valid = false;
  }

  // box5- Event Type Validation
  if(box5.value !== "1") {
    document.getElementById('note5').innerHTML = "Please select an event type.";
    box5.style.borderColor = "#e44c65";
    box5.focus ();
    valid = false;
  }

  // box6- Date Validation
  if(box6.value == "") {
    document.getElementById('note6').innerHTML = "Please indicate the date of the event.";
    box6.style.borderColor = "#e44c65";
    box6.focus ();
    valid = false;
  }

  // box7- Venue Validation
  if(box7.value == "") {
    document.getElementById('note7').innerHTML = "Please indicate the venue of the event.";
    box7.style.borderColor = "#e44c65";
    box7.focus ();
    valid = false;
  }

  // box8- Guest Validation
  if(box8.value == "") {
    document.getElementById('note8').innerHTML = "Please enter the number of guests/participants.";
    box8.style.borderColor = "#e44c65";
    box8.focus ();
    valid = false;
  }

  // box9- Budget Validation
  if(box9.value == "") {
    document.getElementById('note9').innerHTML = "Please enter an amount for the budget.";
    box9.style.borderColor = "#e44c65";
    box9.focus ();
    valid = false;
  }

  // box10- Message Validation
  if(box10.value == "") {
    document.getElementById('note10').innerHTML = "Please enter your message.";
    box10.style.borderColor = "#e44c65";
    box10.focus ();
    valid = false;
  }

  return valid;
}

