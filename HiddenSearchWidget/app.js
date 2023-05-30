const searchEl = document.querySelector(".search")
const inputEl = document.querySelector(".input")
const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click", ()=>{
  searchEl.classList.toggle("active")
  inputEl.focus()
})