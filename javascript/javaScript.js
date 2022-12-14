"use strict";
// Čia rašykite savo JS kodą
// const btn = document.querySelector("#btn");
// const infoBlock = document.querySelector(".container");

// btn.addEventListener("click", (e) => {
//   infoBlock.classList.toggle("show-element");
// });

const buttons = document.querySelectorAll(".button");

if (buttons.length) {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      button.classList.toggle("active");

      let aSide = button.parentNode.firstElementChild;
      let bSide = aSide.nextElementSibling;
      if (aSide && bSide) {
        aSide.classList.toggle("hidden");
        bSide.classList.toggle("hidden");
      }
    });
  });
}

/* ================================================================ contact_section JS  */

function disableSubmit() {
  if (
    document.getElementById("name").value == "" &&
    document.getElementById("email").value == "" &&
    document.getElementById("companyName").value == "" &&
    document.getElementById("title").value == "" &&
    document.getElementById("message").value == ""
  ) {
    document.getElementById("submit").disabled = true;
  } else {
    document.getElementById("submit").disabled = false;
    document.getElementById("submit");
  }
}

const validate = new window.JustValidate("#submitForm");

validate
  .addField(
    "#name",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Name is too short",
      },
    ],
    {
      errorFieldCssClass: "name-error-field",
      errorLabelCssClass: "name-error-label",
      errorsContainer: "#name-errors",
    }
  )
  .addField(
    "#email",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
      {
        rule: "email",
        errorMessage: "Please use a valid email address",
      },
    ],
    {
      errorFieldCssClass: "email-error-field",
      errorLabelCssClass: "email-error-label",
      errorsContainer: "#email-errors",
    }
  )
  .addField(
    "#message",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Message is to short",
      },
    ],
    {
      errorFieldCssClass: "message-error-field",
      errorLabelCssClass: "message-error-label",
      errorsContainer: "#message-errors",
    }
  );

  $('#submitForm').validate({
    rules: {
    isNameEmpty: true,
    }
});

$.validator.addMethod('isNameEmpty', function (value, element) {        
  var loc = $('#name').text();
  return (loc != "")
}, 'REQUIRED.');
