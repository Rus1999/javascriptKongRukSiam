const btnEl = document.querySelector(".btn")
const containerEl = document.querySelector(".container")
const messages = [
  "Good Morning",
  "Hello World",
  "Good Night",
  "Hi",
  "WOWZAA!!!",
  "Rus",
  "Punyarit",
  "Klaphachon"
]

btnEl.addEventListener("click", ()=>createNotification())

function createNotification()
{
  // create new element
  const notificationEl = document.createElement("div")
  notificationEl.classList.add("notification")
  notificationEl.innerText = randomMessage()
  // add new element to the .container class
  containerEl.appendChild(notificationEl)
  // remove the element after 3 seconds
  setTimeout(()=>{
    notificationEl.remove()
  }, 3000)
}

function randomMessage()
{
  return messages[Math.floor(Math.random()*messages.length)]
}
