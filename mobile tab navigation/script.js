const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("li");

listItems.forEach((item,idx) => {
    item.addEventListener("click", () => {
        hideAllPicture();
        hideAllItem();
        item.classList.add("active");
        contents[idx].classList.add("show");
    })
})

function hideAllPicture() {
    contents.forEach(content =>  content.classList.remove("show"))
}

function hideAllItem() {
    listItems.forEach(item => item.classList.remove("active"));
}