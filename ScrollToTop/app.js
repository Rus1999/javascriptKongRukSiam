// show scroll to top button when scroll more than 30% of the website
const scrollBtnEl = document.querySelector(".top")
// html tag
const rootEl = document.documentElement
// check if scroll
document.addEventListener("scroll", showBtn)
scrollBtnEl.addEventListener("click", scrollToTop)

function showBtn()
{
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight
  if (rootEl.scrollTop / scrollTotal > 0.3)
  {
    scrollBtnEl.classList.add("show-btn")
  }
  else
  {
    scrollBtnEl.classList.remove("show-btn")
  }
}

function scrollToTop()
{
  rootEl.scrollTo({
    top:0,
    behavior: "smooth"
  })
}