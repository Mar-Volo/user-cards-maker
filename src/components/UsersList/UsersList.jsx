import { UsersList, UserCard, Eclipse } from "./UserList.styled";
import { MainButton } from "../Button/Button";
import { Filter } from "../Filter/Filter";
import { Container } from "../Layout/Layout.styled";
import { useState, useEffect } from "react";

export const Users = ({ users }) => {
  const [isFollow, setIsFollow] = useState(() =>
    users.reduce((acc, { id }) => ({ ...acc, [id]: false }), {})
  );
  const [filter, setFilter] = useState("all");
  const toggleFollow = (id) => {
    setIsFollow((prevIsFollow) => {
      const newIsFollow = { ...prevIsFollow, [id]: !prevIsFollow[id] };
      localStorage.setItem("isFollow", JSON.stringify(newIsFollow));
      return newIsFollow;
    });
  };

  useEffect(() => {
    const savedIsFollow = JSON.parse(localStorage.getItem("isFollow"));
    if (savedIsFollow) {
      setIsFollow(savedIsFollow);
    }
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <>
      <Container className="filter-container">
        <Filter value={filter} handleChange={handleFilterChange} />
      </Container>
      <UsersList>
        {users
  .filter((user) => {
    if (filter === "all") return true;
    if (filter === "following") return isFollow[user.id];
    if (filter === "not-following") return !isFollow[user.id];
    return false;
  })
  .map(({ id, user, tweets, followers, avatar }) => {
    const followText = isFollow[id] ? "following" : "follow";
    const followClass = isFollow[id] ? "following" : "not-following";
    return (
      <UserCard key={id}>
        <Eclipse>
          <img src={avatar} alt={user} width="80" />
        </Eclipse>

        <p className="cardTitle" style={{ marginBottom: "16px" }}>
          {tweets} tweets
        </p>
        <p className="cardTitle" style={{ marginBottom: "26px" }}>
          {followers + (isFollow[id] ? 1 : 0)} followers
        </p>
        <MainButton
          className={`button ${followClass}`}
          onClick={() => toggleFollow(id)}
        >
          {followText}
        </MainButton>
      </UserCard>
    );
  })}
      </UsersList>
    </>
  );
};