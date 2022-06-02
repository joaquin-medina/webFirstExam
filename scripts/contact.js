window.addEventListener('DOMContentLoaded', () => {
    console.log('The page loaded successfully');
    
    const myForm = document.querySelector('form');
    const inputName = myForm.querySelector('#name');    
    const inputPhone = myForm.querySelector('#phone');
    const inputEmail = myForm.querySelector('#email');
    const inputMessage = myForm.querySelector('#message');
    const submitButton = myForm.querySelector('#submit');
    
    submitButton.addEventListener('click', (event) => { 

        
        const userData = { //Guardo los datos del usuario
            name: inputName.value,
            phone: inputPhone.value,
            email: inputEmail.value,
            message: inputMessage.value,                     
        }
        
        if (userData.name === "" && userData.phone === "" && userData.email === "" && userData.message === ""){ //Validar que no haya datos vacíos
            window.alert("¡Por favor completar TODOS los datos!");
        }
        else {
            window.localStorage.setItem('userData', JSON.stringify(userData))            
            window.alert(`Estimado/a ${userData.name}, su mensaje: "${userData.message}" ha sido enviado correctamente. \n¡Muchas gracias!`) //Notificacion al usuario
        }          
                          
    })   
     
})   