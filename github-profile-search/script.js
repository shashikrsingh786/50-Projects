const APIURL = "https://api.github.com/users/";


const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    

    axios.get(APIURL + input.value)
        .then(response => console.log(response.data))
        .catch(error => console.log(error.message));
})