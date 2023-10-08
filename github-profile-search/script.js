const APIURL = "https://api.github.com/users/";

const input = document.querySelector("input");
const form = document.querySelector("form");
const main = document.querySelector("main");
let data = [];

form.addEventListener("submit", async (e) => {

    e.preventDefault();
    
    if (input.value) {

        await axios
            .get(APIURL + input.value)
            .then((response) => {
                data = response.data;

                createUser(data);
                getRepos(input.value);
            })
            .catch((error) => showError(error));
        input.value = "";
    }
    
});

function showError(error) {
  const cardHTML = `
     <div class="card">
     <div class="user-info">
     <h1>No profile found</h1>
     </div>
  </div>
    `;
  main.innerHTML = cardHTML;
}

function createUser(data) {
  const userId = data.name || data.login;
  const userBio = data.bio ? `<p>${data.bio}</p>` : "";
  const cardHTML = `
     <div class="card">
    <div>
      <img src="${data.avatar_url}" alt="${data.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${userId}</h2>
      ${userBio}
      <ul>
        <li>${data.followers} <strong>Followers</strong></li>
        <li>${data.following} <strong>Following</strong></li>
        <li>${data.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos">
     </div>
    </div>
  </div>
    `;

  main.innerHTML = cardHTML;
}

function showrepo(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");

    showrepo(data);
  } catch (err) {
    createErrorCard("Problem fetching repos");
  }
}
