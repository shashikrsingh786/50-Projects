const squares = document.querySelector(".container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const numOfsquare = 500;


for (let i = 0; i < numOfsquare; i++) {
    const square = document.createElement("div");
     square.classList.add("square");
     squares.appendChild(square);
   
      square.addEventListener("mouseover", (e) => changecolor(e.target))
    

    
      square.addEventListener("mouseleave", (e) => returnbacktoNormal(e.target))
    
   
}




function changecolor(selectedDiv) {
     const randomColor = colors[Math.floor(Math.random() * colors.length)];
    selectedDiv.style.backgroundColor = randomColor;
    selectedDiv.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function returnbacktoNormal(selectedDiv) {
    selectedDiv.style.backgroundColor = "#1d1d1d";
    selectedDiv.style.boxShadow = `0 0 2px #000`;
}


