
const imageContainer = document.querySelector(".img-container");
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const images = document.querySelectorAll(".img");

let idx = 0;

function resetInterval() {
  console.log("reset");
  clearInterval(interval);
  interval = setInterval(run, 2000);
}
let interval = setInterval(run, 2000);
function run() {
    
    idx++;
    changeImage();
}

function changeImage() {
    if (idx == images.length) idx = 0;
    else if (idx == -1) idx = images.length-1;
    imageContainer.style.transform = `translate(-${idx * 100}%)`
    
}


prevBtn.addEventListener("click", () => {
    idx--;
    changeImage();
    resetInterval()
})

nextBtn.addEventListener("click", () => {
    idx++;
    changeImage();
    resetInterval()
});




