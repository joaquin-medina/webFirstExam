window.addEventListener('DOMContentLoaded', () => {
    console.log('The page loaded successfully');

    const myForm = document.querySelector('form');
    const inputName = myForm.querySelector('#name');    
    const inputPhone = myForm.querySelector('#phone');
    const inputEmail = myForm.querySelector('#email');
    const inputMessage = myForm.querySelector('#message');
    const submitButton = myForm.querySelector('#submit');

    submitButton.addEventListener('click', (event) => {
        
        event.preventDefault()

        const userData = {
            username: inputName.value,
            phone: inputPhone.value,
            email: inputEmail.value,
            message: inputMessage.value,                     
        }

        window.localStorage.setItem('userData', JSON.stringify(userData));     
        
        window.alert(`Estimado/a ${userData.username}, su mensaje: "${userData.message}" ha sido enviado correctamente. \n¡Muchas gracias!`);
    })

})