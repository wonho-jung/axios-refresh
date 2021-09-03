import React, { useEffect, useState } from "react";
import axios from "axios";

interface Users {
  id: number;
  name: string;
}
const Delete = () => {
  const [userId, setUserId] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
    axios
      .delete<Users[]>(`http://localhost:3006/users/${userId}`)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <form
        onSubmit={(event) => handleSubmit(event)}
        style={{ display: "flex", paddingTop: "1rem" }}
      >
        <div style={{ paddingLeft: "1rem" }}>
          <label>Delete: </label>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Delete;
