const openBtn = document.querySelector(".three_lines");
const closeBtn = document.querySelector(".cross_lines");
const nav = document.querySelectorAll(".nav");

openBtn.addEventListener("click", () => {
    console.log("ss")
    nav.forEach(nav_el => {
        nav_el.classList.add("visible")
        console.log(nav_el)
    });
})

closeBtn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
});