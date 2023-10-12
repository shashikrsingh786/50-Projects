const goodINPUT = document.querySelector("#good")
const cheapINPUT = document.querySelector("#cheap")
const fastINPUT = document.querySelector("#fast")
const input = document.querySelectorAll(".toggle");


input.forEach(toggle => toggle.addEventListener("change", (e) => {
    doTheTrick(e.target);
}))

function doTheTrick(clickedOne) {
    if (goodINPUT.checked && cheapINPUT.checked && fastINPUT.checked) {
        if (clickedOne === goodINPUT) {
            fastINPUT.checked = false;
        }
        if (clickedOne === fastINPUT) {
            cheapINPUT.checked = false;
        }
        if (clickedOne === cheapINPUT) {
            goodINPUT.checked = false;
        }
    }

}