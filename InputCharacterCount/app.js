const countEl = document.querySelector(".count")
const inputEl = document.querySelector("input")

// eventlistener when user release one key on keyboard
inputEl.addEventListener("keyup", ()=>{
  countEl.innerHTML = inputEl.value.length
})