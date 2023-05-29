const eyeIconEl = document.querySelector("#eye")
const passwordEl = document.querySelector("#password")

eyeIconEl.addEventListener("click", ()=>{
  if(eyeIconEl.classList.contains("fa-eye"))
  {
    eyeIconEl.classList.replace("fa-eye", "fa-eye-slash")
    passwordEl.setAttribute("type", "text")
  }
  else
  {
    eyeIconEl.classList.replace("fa-eye-slash", "fa-eye")
    passwordEl.setAttribute("type", "password")
  }
})