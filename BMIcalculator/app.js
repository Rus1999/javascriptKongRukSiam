const btnEl = document.querySelector(".btn")
const resultEl = document.querySelector(".result")

btnEl.addEventListener("click", (e)=>{
  // don't reset value on form
  e.preventDefault()
  let weight = document.getElementById("weight").value
  let height = document.getElementById("height").value

  if(weight === "" || isNaN(weight))
  {
    return resultEl.innerHTML = "Please enter your weight"
  }
  else if(height === "" || isNaN(height))
  {
    return resultEl.innerHTML = "Please enter your height"
  }
  else
  {
    // BMI calculation
    height = height / 100
    let bmi = (weight / (Math.pow(height, 2))).toFixed(2)

    if(bmi < 18.5)
    {
      showResult(bmi, "Too skinny", "Yellow", "Black")
    }
    else if(bmi >= 18.5 && bmi <= 24.9)
    {
      showResult(bmi, "Normal", "Green", "White")
    }
    else if(bmi >= 25 && bmi <= 29.0)
    {
      showResult(bmi, "Fat", "Orange", "White")
    }
    else
    {
      showResult(bmi, "Too fat", "Red", "White")
    }
  }
})


function showResult(bmi, message, colorBtn, colorTxt)
{
  resultEl.style.background = colorBtn
  resultEl.style.color = colorTxt
  return resultEl.innerHTML = `Result = ${bmi} (${message})`
}