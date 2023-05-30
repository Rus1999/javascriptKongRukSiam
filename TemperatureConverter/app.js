const celciusInputEl = document.getElementById("celcius")
const fahrenheitInputEl = document.getElementById("fahrenheit")
const kelvinInputEl = document.getElementById("kelvin")
// store all inputs
const tempInputs = document.querySelectorAll("input")

tempInputs.forEach(input=>{
  // add input event listener to each input if user input then store the value and input type to the variable
  input.addEventListener("input", (e)=>{
    // input temperature
    let tempValue = parseInt(e.target.value)
    // temperature type
    let inputName = e.target.name

    if(e.target.value === "")
    {
      celciusInputEl.value = null
      fahrenheitInputEl.value = null
      kelvinInputEl.value = null
      // jump out of loop
      return
    }
    // calculate temperature
    if(inputName === "celcius")
    {
      // celcius to fahrenheit
      let fahrenheit = (tempValue * 1.8) + 32
      fahrenheitInputEl.value = fahrenheit.toFixed(2)
      // celcius to kelvin
      let kelvin = tempValue + 273
      kelvinInputEl.value = kelvin.toFixed(2)
    }
    else if(inputName === "fahrenheit")
    {
      // fahrenheit to celcius
      let celcius = (tempValue - 32) / 1.8
      celciusInputEl.value = celcius.toFixed(2)

      // fahrenheit to kelven
      let kelvin = (tempValue -32) / 1.8 + 273
      kelvinInputEl.value = kelvin.toFixed(2)
    }
    else if(inputName === "kelvin")
    {
      // kelvin to celcius
      let celcius = tempValue - 273
      celciusInputEl.value = celcius.toFixed(2)

      // kelvin to fahrenheit
      let fahrenheit = (tempValue - 273) * 1.8 + 32
      fahrenheitInputEl.value = fahrenheit.toFixed(2)
    }
  })
})