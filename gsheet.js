const scriptURL = 'https://script.google.com/macros/s/AKfycby8kSBwdz0TvlwMWhGqtKbRRk7Qc0g9pXRKeJcwtyiiM2D2460oM2YMNMsuDQEG8BGOJA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => response.text()) // Parse the response as text
  .then(data => {
    alert("Thank you! your form is submitted successfully.")
    window.location.reload();
  })
  .catch(error => console.error('Error!', error.message))
})
