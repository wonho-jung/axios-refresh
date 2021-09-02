import React, { useEffect, useState } from "react";
import axios from "axios";
interface Address {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  geo: { lat: number; lng: number };
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface Users {
  id: number;
  name: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
const Post = () => {
  const [data, setData] = useState<Users[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    axios
      .post<Users[]>("https://jsonplaceholder.typicode.com/users", {
        id: userId,
        name: userName,
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
    setUserId("");
    setUserName("");
  };
  console.log(data);
  return (
    <div>
      <form
        onSubmit={(event) => handleSubmit(event)}
        style={{ display: "flex" }}
      >
        <div style={{ paddingLeft: "1rem" }}>
          <label>userId: </label>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div style={{ paddingLeft: "1rem" }}>
          <label>userName: </label>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Post;
