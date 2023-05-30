const resultEl = document.getElementById("result")
const filterEl = document.getElementById("filter")
// create array variable type to use the array method (filter method)
const listItemEl = []

filterEl.addEventListener("input", (e)=>{
  const search = e.target.value.toLowerCase()
  listItemEl.forEach(item=>{
    // make inner text of li all lowercase and find if match the search input
    // thailand (item in listItemEl) == Thailand (search)
    if(item.innerText.toLowerCase().includes(search))
    {
      // show match list
      item.classList.remove("hide")
    }
    else
    {
      // hide not match list
      item.classList.add("hide")
    }
  })
})



// async & await fetch all data before continue
async function getDate(){
  const url = "https://restcountries.com/v3.1/all"
  const response = await fetch(url)
  // convert data to .json file
  const items = await response.json()
  resultEl.innerHTML = ""
  items.forEach(data => {
    // create li element according to the amount of item
    const li = document.createElement("li")
    // store li to the array
    listItemEl.push(li)
    li.innerHTML = 
    `
      <img src="${data.flags.png}">
      <div class="info">
        <h4>${data.name.common}</h4>
        <p>${formatNumber(data.population)}</p>
      </div>
    `
    resultEl.appendChild(li)
  })
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

getDate()