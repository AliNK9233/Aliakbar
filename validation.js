$(document).ready(function () {
    $("#contact-form").validate({
      rules: {
        your_name: {
          required: true,
          minlength: 3,
          pattern: /^[A-Za-z]+$/,
        },
        your_number: {
          required: true,
          digits: true,
          minlength: 10,
          maxlength: 10, // Ensure exactly 10 digits
        },
        your_email: {
          required: true,
          email: true, // Validate as an email address
        },
        "re-your_email": {
          required: true,
          equalTo: "[name='your_email']", // Ensure it matches the 'your_email' field
        },
        message: {
          required: true,
        },
      },
      messages: {
        your_name: {
          required: "Your name is required",
          minlength: "Your name must be at least 3 characters long",
          pattern: "Your name can only contain alphabetic characters",
        },
        your_number: {
          required: "Your number is required",
          digits: "Your number can only contain digits",
          minlength: "Your number must be exactly 10 digits",
          maxlength: "Your number must be exactly 10 digits",
        },
        your_email: {
          required: "Your email is required",
          email: "Please enter a valid email address",
        },
        "re-your_email": {
          required: "Please re-enter your email",
          equalTo: "Emails must match",
        },
        message: {
          required: "Your message is required",
        },
      },
      
    });
  });
