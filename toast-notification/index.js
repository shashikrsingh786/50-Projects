const button = document.getElementById("button");
const toasts = document.querySelector(".toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const randomMessage = Math.floor(Math.random() * 4);
  const randomType = Math.floor(Math.random() * 3);

  const toast = document.createElement("div");

  toast.classList.add("toast");
  toast.classList.add(types[randomType]);

  toast.innerHTML = messages[randomMessage];

  toasts.appendChild(toast);

  setTimeout(() => {
    toasts.removeChild(toast);
  }, 3000);
}
