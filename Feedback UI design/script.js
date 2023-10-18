const button = document.querySelector("button");
const rating = document.querySelectorAll(".rating");
const container = document.querySelector(".feedback-container");

let selected = "";

rating.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.forEach((rate) => rate.classList.remove("active"));
      rate.classList.add("active");
      selected = rate.classList[0];
      console.log(rate,selected);
  });
});
button.addEventListener("click", (e) => {
    console.log("hi", e.target);
    container.innerHTML = `<div class="thanks">
        <img src="heart.png" alt="heart" width="40px" height="40px" />
        <h5>Thank You</h5>
        <h5>Feedback : ${selected}</h5>
        <p>We will use your feedback for customer support</p>
      </div>`;
});

{
  /* <div class="thanks">
        <img src="heart.png" alt="heart" width="40px" height="40px" />
        <h5>Thank You</h5>
        <h5>Feedback : ${}</h5>
        <p>We will use your feedback for customer support</p>
      </div> */
}
