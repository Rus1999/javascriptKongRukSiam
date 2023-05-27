const countEl = document.querySelector(".count")
const inputEl = document.querySelector("input")

inputEl.addEventListener("keyup", ()=>{
  let word = inputEl.value.toLowerCase()
  let vowelCount = 0
  // read every character in word and count if its vowel
  for(let i = 0; i<word.length; i++){
    let letter = word[i]
    if(letter.match(/([a,e,i,o,u])/)){
      vowelCount++
    }
  }
  countEl.innerHTML = `${vowelCount}`
})