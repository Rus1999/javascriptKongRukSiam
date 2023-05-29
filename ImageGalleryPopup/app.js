// all img element in gallery class
const smallImgEl = document.querySelectorAll(".gallery img")
const fullImgEl = document.querySelector(".full-image")
const modalEl = document.querySelector(".modal")
// loop through all array of small image element and add each small image a event listener to get the alt attribute (full size image name)
smallImgEl.forEach(img=>{
  img.addEventListener("click", ()=>{
    const fullsize = img.getAttribute("alt")
    const path = `images/full/${fullsize}.jpg`
    fullImgEl.src = path
    modalEl.classList.add("open")
  })
})

modalEl.addEventListener("click", (e)=>{
  if(e.target.classList.contains("modal"))
  {
    modalEl.classList.remove("open")
  }
})

