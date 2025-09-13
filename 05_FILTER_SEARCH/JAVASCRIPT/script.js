const users = [
  { id: 1, name: "Aarav" },
  { id: 2, name: "Ishita" },
  { id: 3, name: "Rohan" },
  { id: 4, name: "Meera" },
  { id: 5, name: "Kabir" },
  { id: 6, name: "Ananya" },
  { id: 7, name: "Vivaan" },
  { id: 8, name: "Diya" },
  { id: 9, name: "Arjun" },
  { id: 10, name: "Saanvi" },
  { id: 11, name: "Aditya" },
  { id: 12, name: "Kriti" },
  { id: 13, name: "Rahul" },
  { id: 14, name: "Nisha" },
  { id: 15, name: "Siddharth" },
  { id: 16, name: "Pooja" },
  { id: 17, name: "Manish" },
  { id: 18, name: "Sneha" },
  { id: 19, name: "Harsh" },
  { id: 20, name: "Ritika" },
];

const search = document.querySelector("#search");
const ul = document.querySelector("ul");
search.addEventListener("input", (e) => {
  renderUser(e.target.value);
});

const renderUser = (value) => {
  ul.innerHTML = "";

  const filteredData = users.filter((curele) =>
    curele.name.toLowerCase().includes(value.toLowerCase())
  );

  filteredData.forEach((curele) => {
    ul.innerHTML += `<li>${curele.name}</li>`;
  });
};

renderUser("");
