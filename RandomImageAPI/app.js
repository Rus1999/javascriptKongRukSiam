const container = document.querySelector(".container")
const rows = 3
const cols = 3

function randomNumber()
{
  // 0 - 499
  return Math.floor(Math.random()*500)
}

for(let i = 0; i < rows*cols; i++)
{
  // link
  const url = `https://picsum.photos/seed/${randomNumber()}/700/700`
  const imageEl = document.createElement("img")
  imageEl.src = url
  container.appendChild(imageEl)
}