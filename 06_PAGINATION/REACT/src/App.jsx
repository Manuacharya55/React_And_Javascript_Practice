import { useState } from "react";
import { faker } from "@faker-js/faker";
import { useEffect } from "react";
import Card from "./Card";

function App() {
  const totalUsers = 20;
  const limitPerPage = 5;
  const totalPage = Math.ceil(totalUsers / limitPerPage);

  const [userData, setUserData] = useState(
    Array(totalUsers)
      .fill(0)
      .map((curele) => {
        return {
          id: faker.string.uuid(),
          username: faker.internet.username(),
          email: faker.internet.email(),
          avatar: faker.image.avatar(),
        };
      })
  );
  const [userList, setUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let skip = (currentPage - 1) * 5;
    let array = [];
    for (let i = skip; i < skip + 5; i++) {
      array.push(userData[i]);
    }
    setUserList(array);
  }, [userData, currentPage]);

  const handleClick = (action) => {
    if (action === "next") {
      setCurrentPage((prev) => prev + 1);
    } else {
      if (currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
      }
    }
  };

  return (
    <div id="container">
      <h1>User List</h1>
      <div id="card-container">
        {userList.map((user) => (
          <Card
            username={user.username}
            email={user.email}
            avatar={user.avatar}
            key={user.id}
          />
        ))}
      </div>

      <span>current page : {currentPage}</span>
      <div id="btn-holder">
        <button
          onClick={() => {
            handleClick("prev");
          }}
          disabled={currentPage <= 1}
          className={currentPage <= 1 && "disabled"}
        >
          prev
        </button>
        <button
          onClick={() => {
            handleClick("next");
          }}
          disabled={totalPage == currentPage}
          className={totalPage == currentPage && "disabled"}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default App;
