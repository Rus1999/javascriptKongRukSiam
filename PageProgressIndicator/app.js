const progressEl = document.querySelector(".progress")

window.onscroll=()=>scrollProgress()

function scrollProgress(){
  // full website height - websiet height on screen display
  const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  // top of website height to top of display screen
  const scrollTop = document.documentElement.scrollTop
  const scrollPercentage = (scrollTop / pageHeight) * 100
  progressEl.style.visibility = "visible"
  progressEl.style.width = scrollPercentage + "%";
}