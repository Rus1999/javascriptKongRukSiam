const timeElement = document.querySelector(".time")
const btnToggleElement = document.querySelector(".toggle")

function setTime()
{
  const currentTime = new Date()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()
  // 0${minutes}, 0${seconds} add 0 in front of a minutes when < 10
  timeElement.innerHTML = 
  `${hours<10 ? `0${hours}`:hours}:
  ${minutes<10 ? `0${minutes}`:minutes}:
  ${seconds<10 ? `0${seconds}`:seconds}`
}

btnToggleElement.addEventListener("click", (e)=>
{
  const htmlElement = document.querySelector("html")

  // when light mode do below
  if(htmlElement.classList.contains("dark"))
  {
    htmlElement.classList.remove("dark")
    // change the inner HTML of this element
    e.target.innerHTML = "Dark Mode"
  }
  else // when dark mode to below 
  {
    htmlElement.classList.add("dark")
    // change the inner HTML of this element
    e.target.innerHTML = "Light Mode"
  }
})

setTime()
setInterval(setTime, 1000)