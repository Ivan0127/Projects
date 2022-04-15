const normalHand =document.querySelector('.closed');
const spockHand =document.querySelector('.open');

normalHand.addEventListener('click',() => {

    if(spockHand.classList.contains('open')){
        spockHand.classList.add('active');
        normalHand.classList.remove('active');
    }
});

spockHand.addEventListener('click',() => {
    if (normalHand.classList.contains('closed')){
    normalHand.classList.add('active');
    spockHand.classList.remove('active');
    }
});
