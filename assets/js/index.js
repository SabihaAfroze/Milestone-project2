$(document).ready(function(){
    $('#magic').click(function(){
        alert("It's just a game for the people who beleives in luck!");
    });
    });


/*--morphing pop up menu--*/
let menu = document.querySelector(".menu");
let button = document.querySelector(".menu__button");

toggleMenu = () => {
  menu.classList.toggle("open");
}

button.addEventListener("click", function() {
  clearInterval(interactionPreview);
  toggleMenu();
});

let interactionPreview = setInterval(() => {
  toggleMenu();
}, 2000)


/*--quiz--*/