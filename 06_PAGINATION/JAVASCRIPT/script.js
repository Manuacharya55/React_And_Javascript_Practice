import { faker } from "https://cdn.jsdelivr.net/npm/@faker-js/faker/+esm";

const totalUser = 23; 
const limit = 5;
const totalPage = Math.ceil(totalUser / limit);

let currentPage = 1;
let userList = [];

const cardHolder = document.querySelector("#card-container");
const currentpageIndicator = document.querySelector("span");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");


const generateUsers = () => {
  return Array.from({ length: totalUser }, () => ({
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
  }));
};


const renderCard = () => {
  const start = (currentPage - 1) * limit;
  const end = Math.min(start + limit, userList.length);

  cardHolder.innerHTML = "";
  currentpageIndicator.textContent = `current page : ${currentPage}`;

  for (let i = start; i < end; i++) {
    const { avatar, username, email } = userList[i];
    cardHolder.innerHTML += `
      <div class="card">
        <img src="${avatar}" alt="" />
        <h3>${username}</h3>
        <p>${email}</p>
      </div>
    `;
  }


  prev.disabled = currentPage <= 1;
  next.disabled = currentPage >= totalPage;

  prev.classList.toggle("disabled", prev.disabled);
  next.classList.toggle("disabled", next.disabled);
};


const setupPagination = () => {
  prev.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderCard();
    }
  });

  next.addEventListener("click", () => {
    if (currentPage < totalPage) {
      currentPage++;
      renderCard();
    }
  });
};


const init = () => {
  userList = generateUsers();
  renderCard();
  setupPagination();
};

init();
