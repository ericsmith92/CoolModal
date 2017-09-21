//grab open button
const myBtn = document.querySelector('#myBtn');
//grab close button
const closeBtn = document.querySelector('.modal_close');
//grab modal
const modal = document.querySelector('.modal');

//open modal onclick
function openModal(){
    modal.style.display = 'block';
}

//close modal onclick
function closeModal(){
  modal.style.display = 'none';
}

//listner for buttons
myBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);