const scriptURL = 'https://script.google.com/macros/s/AKfycbwDoWcta-qawHjSiPotia2pVSsrBPrZOik5fpJ7w6E6frS_PPe4YtipDB_NnV1mIyx8pg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => response.text()) // Parse the response as text
  .then(data => {
    alert("Thank you! your form is submitted successfully.")
    window.location.href = 'index.html';
  })
  .catch(error => console.error('Error!', error.message))
})
