const menuItems = document.querySelectorAll('ul.menu li a');
const clickCatchers = document.querySelectorAll('.catcher');
const yesBtns = document.querySelectorAll('a.btn__yes');
const noBtns = document.querySelectorAll('a.btn__no');
let activeListItem = null;
const menus = [
    `.js-overlay-continue`,
    `.js-overlay-new`,
    `.js-overlay-load`,
    `.js-overlay-credits`,
    `.js-overlay-quit`
]
var opened = false;
var inprogress = false;
var override = false;
Array.from(yesBtns).forEach(b => {
    b.addEventListener('click', e => {
        console.log("canceled button click");
        e.preventDefault();
    });
});
Array.from(noBtns).forEach(b => {
    b.addEventListener('click', e => {
        console.log("canceled button click");
        e.preventDefault();
    });
});

Array.from(menuItems).forEach(m => {
    m.addEventListener('click', e => activateOverlay(e));
});

Array.from(clickCatchers).forEach(c => {
    c.addEventListener('click', e => closeOverlay(e));
});


// function confirm(e) {
    
// }

// function cancel(e) {
    
// }

function activateOverlay(event) {
    event.preventDefault();
    if(activeListItem  != null){
        activeListItem.classList.remove('active');
    }

    activeListItem = event.target;
    event.target.classList.add('active');
    const overlayName = event.target.getAttribute('data-overlay-activate');
    menus.forEach(element =>{
        if(!(element == `.js-overlay-${overlayName}`)){
            var thing = document.querySelector(element);
            thing.classList.remove('active');
        }
    });
    var delayInMilliseconds = 110; //1 second
    if(opened == true){
            setTimeout(function() {
                const overlayEl = document.querySelector(`.js-overlay-${overlayName}`);
                overlayEl.classList.add('active');
                
            }, delayInMilliseconds);
    }
    else{
        const overlayEl = document.querySelector(`.js-overlay-${overlayName}`);
        overlayEl.classList.add('active');
        opened = true;
    }

}

function closeOverlay(event) {
    event.preventDefault();
    
    activeListItem.classList.remove('active');
    const overlayName = event.target.getAttribute('data-overlay-close');
    const overlayEl = document.querySelector(`.js-overlay-${overlayName}`);
    overlayEl.classList.remove('active');
}
