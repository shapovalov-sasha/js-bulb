const bulb = document.querySelector(".bulb-img")
const switchButton = document.querySelector(".circle")
const switchContainer = document.querySelector(".switch")

let toggleBulb = false;


switchContainer.addEventListener("click", () => {

  if (toggleBulb) {
    switchButton.classList.remove("circle-on")
    switchContainer.classList.remove("swith-on")
    bulb.src = 'images/bulb-off.png'
  } else {
    switchButton.classList.add("circle-on")
    switchContainer.classList.add("swith-on")
    bulb.src = 'images/bulb-on.png'
  }
  toggleBulb = !toggleBulb
})