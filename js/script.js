//grab open button
const myBtn = document.querySelector('#myBtn');
//grab close button
const closeBtn = document.querySelector('.modal_close');
//grab modal
const modal = document.querySelector('.modal');

//toggleModal
function toggleModal(){
    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }
    
}

//listner for buttons
myBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);