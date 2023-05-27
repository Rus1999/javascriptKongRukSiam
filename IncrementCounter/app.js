// store all counter class to an array
const counterEles = document.querySelectorAll(".counter")
// loop through all coutner and in each counter do the following
counterEles.forEach(counter=>{
  counter.innerText = '0'
  const updateCounter = ()=>{
    // add + to convert string to number
    const target = +counter.getAttribute("data-target")
    const start = +counter.innerText
    const increment = target/200
    if(start<target){
      counter.innerText = `${Math.ceil(start+increment)}`
      // method calls a function after a number of milliseconds
      setTimeout(updateCounter, 1)
    }else{
      counter.innerText = target
    }
  }
  updateCounter()
})