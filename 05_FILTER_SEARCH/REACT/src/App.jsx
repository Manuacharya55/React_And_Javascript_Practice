import { useState } from "react";

function App() {
  const [user, setUser] = useState([
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
  ]);
  const [search, setSearch] = useState("");

  let filteredData = user.filter((curele) =>
    curele.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div id="container">
      <h1>Search User</h1>
      <form>
        <input
          type="text"
          placeholder="Serach User"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        {filteredData.map((curele) => (
          <li key={curele.id}>{curele.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
