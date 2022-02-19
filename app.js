const buttonEl = document.querySelector("#share_button");
const shareboxEl = document.querySelector(".share_box_desktop_wrap");


function clickTrigger (){
    buttonEl.addEventListener("click", function(){
        console.log("yo");
        shareboxEl.classList.toggle("open");

    })
}

clickTrigger();

