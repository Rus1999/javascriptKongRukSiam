const openBtnEl = document.querySelector(".open-btn")
const closeBtnEl = document.querySelector(".close-btn")
const modalContainerEl = document.querySelector(".modal-container")

openBtnEl.addEventListener("click", ()=>{
  modalContainerEl.classList.add("show")
})
closeBtnEl.addEventListener("click", ()=>{
  modalContainerEl.classList.remove("show")
})