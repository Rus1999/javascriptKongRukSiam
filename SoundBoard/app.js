const sounds = ["Effect1", "Effect2", "Effect3", "Effect4", "Effect5"]

sounds.forEach(sound=>{
  // create button element for every sound
  const btn = document.createElement("button")
  // add class btn to each button
  btn.classList.add("btn")
  // name every button as each sound effect (sounds[])
  btn.innerText = sound
  btn.addEventListener("click", ()=>{
    stopSounds()
    document.getElementById(sound).play()
  })
  // assign button to the controller div
  document.getElementById("controller").appendChild(btn)
})


function stopSounds(){
  // stop all sounds when button is click
  sounds.forEach(sound=>{
    const oneEffect = document.getElementById(sound)
    oneEffect.pause()
    // reset start time to 0
    oneEffect.currentTime = 0
  })
}