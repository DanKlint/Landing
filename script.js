window.addEventListener("DOMContentLoaded", (event) =>{
    const buttonElem = document.querySelector('.section_button');
    const modalElem = document.querySelector('.modal');
    const buttonElemCheck = document.querySelector('.btn_check');

modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms easy-in-out;
`;

const closeModal = event => {
    const target = event.target;

    if (target === modalElem || target.closest('.modal_close')) {
        
        modalElem.style.visibility = 'hidden';
        modalElem.style.opacity = 0;
    }
}

const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
};

buttonElem.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);


const checkPassword = () => {
    const password = document.getElementById('pass').value
    const confirm_password = document.getElementById('confirm_pass').value
    
  if (password == confirm_password) {    
    console.log("password:", password);
    alert("Успешно!");
  } else {
    alert("Пароли не совпадают!");
  }
}

buttonElemCheck.addEventListener('click', checkPassword);
});


