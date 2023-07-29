const menuItems = document.querySelectorAll('ul.menu li a');
const clickCatchers = document.querySelectorAll('.catcher');
const yesBtns = document.querySelectorAll('a.btn__yes');
const noBtns = document.querySelectorAll('a.btn__no');

const autov = document.getElementById('autov');
autov.addEventListener('click', e=>{
    openProject('autov-container');
})
const boxing = document.getElementById('box');
boxing.addEventListener('click', e=>{
    openProject('boxing-container');
})
const mars = document.getElementById('mars');
mars.addEventListener('click', e=>{
    openProject('mars-container');
})
const nature = document.getElementById('nature');
nature.addEventListener('click', e=>{
    openProject('nature-container');
})
const raytracer = document.getElementById('raytrace');
raytracer.addEventListener('click', e=>{
    openProject('raytrace-container');
})
const shadowmapper = document.getElementById('shadowmap');
shadowmapper.addEventListener('click', e=>{
    openProject('shadow-mapping-container');
})

const bulletj = document.getElementById('bulletj');
bulletj.addEventListener('click', e=>{
    openProject('bulletj-container');
})

const resumeYes = document.getElementById('btn_yes_Resume');
resumeYes.addEventListener('click', e=>{
    openProject('resume-container');
})

const projectYes = document.getElementById('btn_yes_project');
projectYes.addEventListener('click', e=>{
    openProject('autov-container');
})

document.addEventListener("keydown", key=>{
    if(key.code === "Enter"){
        if(activeListItem.id == "resume-list-item"){
            openProject('resume-container');
        }
    }
})
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
function openProject(currProj){
    const projects = document.getElementsByClassName("project-container");
    for(var i =0; i < projects.length; i++){
        if(projects.item(i).id != currProj){
            projects.item(i).style.opacity = 0;
            projects.item(i).style.zIndex = "1";
        }
    }
    const container = document.getElementById(currProj);
    container.style.opacity = 1;
    container.style.zIndex = "2";
    const logo = document.getElementById('logo');
    logo.style.opacity = 0;
}
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
