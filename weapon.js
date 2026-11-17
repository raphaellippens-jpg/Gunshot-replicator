const shootButton = document.querySelector("#shoot");
const count = document.querySelector("#count");
const flash = document.querySelector("#flash");
const statusText = document.querySelector("#status");
let busy = false;

shootButton.addEventListener("click", async () => {
  if (busy) return;
  busy = true;
  shootButton.disabled = true;
  statusText.textContent = "FIRING SEQUENCE…";
  for (let n = 3; n >= 1; n--) {
    count.textContent = n;
    count.classList.add("show");
    await new Promise(resolve => setTimeout(resolve, 850));
  }
  count.classList.remove("show");
  // Brief screen-wide light flicker to represent the muzzle flash.
  flash.classList.remove("fire");
  void flash.offsetWidth;
  flash.classList.add("fire");
  statusText.textContent = "SHOT FIRED";
  await new Promise(resolve => setTimeout(resolve, 650));
  statusText.textContent = "READY";
  shootButton.disabled = false;
  busy = false;
});