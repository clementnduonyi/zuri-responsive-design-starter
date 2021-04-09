const sideNav = document.querySelector(".sideNav")
const overlay = document.querySelector(".overlay")
const hamburger = document.querySelector(".ham")
const menuX = document.querySelector(".menuX")
const menucontents = document.querySelectorAll(".menuLink")

menucontents.forEach(menucontent => {
  menucontent.addEventListener("click", toggleHamburger)
})

hamburger.addEventListener("click", toggleHamburger)
menuX.addEventListener("click", toggleHamburger)
overlay.addEventListener("click", toggleHamburger)

function toggleHamburger() {
  overlay.classList.toggle("showOverlay")
  sideNav.classList.toggle("showNav")
}
