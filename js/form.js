const scriptURL = 'https://script.google.com/macros/s/AKfycbwLiaXY7JeXnUgbmODoUiksbHWhDBa_-rzEGglTMR9g_6rY-L9HyIddEb61hr2RSUjerw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msgsent");

form.addEventListener('submit', e => {
    e.preventDefault() 
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Successfully!"
            setTimeout(function() {
                msg.innerHTML = ""
            }, 2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})