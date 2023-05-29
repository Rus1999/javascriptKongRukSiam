const navEl = document.querySelector(".nav")
window.addEventListener("scroll", stickyNavbar)

function stickyNavbar(){
  if(window.scrollY > navEl.offsetHeight + 300)
  {
    navEl.classList.add("active")
  }
  else
  {
    navEl.classList.remove("active")
  }
}